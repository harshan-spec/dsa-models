(function () {
  "use strict";

  const exercises = (window.DSA_DATA && window.DSA_DATA.exercises) || [];
  const searchInput = document.getElementById("searchInput");
  const clearSearch = document.getElementById("clearSearch");
  const exerciseNav = document.getElementById("exerciseNav");
  const exerciseList = document.getElementById("exerciseList");
  const emptyState = document.getElementById("emptyState");
  const resultsSummary = document.getElementById("resultsSummary");
  const copyVisible = document.getElementById("copyVisible");
  const topbarStatus = document.getElementById("topbarStatus");

  const allPrograms = exercises.flatMap((exercise) =>
    exercise.problems.map((problem, order) => ({ exercise, problem, order }))
  );
  const programById = new Map(allPrograms.map((entry) => [entry.problem.id, entry]));
  const sourceBaseUrl = "https://github.com/harshan-spec/dsa-models/blob/main/";
  let activeQuery = "";
  let visiblePrograms = allPrograms;
  let copyResetTimer;

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[’']/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function tokens(value) {
    return normalize(value).split(/\s+/).filter((token) => token.length > 1);
  }

  function searchable(entry) {
    const { exercise, problem } = entry;
    return {
      title: normalize(problem.title),
      question: normalize(problem.question),
      concepts: normalize(problem.concepts.join(" ")),
      exercise: normalize(exercise.title),
      description: normalize(exercise.description),
      code: normalize(problem.code),
    };
  }

  function scoreEntry(entry, query) {
    const phrase = normalize(query);
    if (!phrase) return 0;
    const words = tokens(query);
    const fields = searchable(entry);
    let score = 0;

    if (fields.title === phrase) score += 1000;
    if (fields.question === phrase) score += 950;
    if (fields.concepts === phrase) score += 900;
    if (fields.title.includes(phrase)) score += 360;
    if (fields.question.includes(phrase)) score += 320;
    if (fields.concepts.includes(phrase)) score += 290;
    if (fields.exercise.includes(phrase)) score += 210;

    words.forEach((word) => {
      if (fields.title.includes(word)) score += 125;
      if (fields.question.includes(word)) score += 100;
      if (fields.concepts.includes(word)) score += 92;
      if (fields.exercise.includes(word)) score += 65;
      if (fields.description.includes(word)) score += 35;
      if (fields.code.includes(word)) score += 8;
    });

    return score;
  }

  function rankedPrograms(query) {
    if (!normalize(query)) return allPrograms.slice();

    return allPrograms
      .map((entry) => ({ ...entry, score: scoreEntry(entry, query) }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score || a.exercise.number.localeCompare(b.exercise.number) || a.order - b.order);
  }

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function highlight(value, query) {
    const safe = escapeHTML(value);
    const words = [...new Set(tokens(query).sort((a, b) => b.length - a.length))];
    if (!words.length) return safe;
    const pattern = words.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
    return safe.replace(new RegExp(`(${pattern})`, "gi"), "<mark>$1</mark>");
  }

  function renderNav() {
    document.getElementById("exerciseCount").textContent = String(exercises.length).padStart(2, "0");
    exerciseNav.innerHTML = exercises.map((exercise) => `
      <button type="button" class="exercise-nav-item" data-jump="${exercise.id}">
        <span class="nav-number">${exercise.number}</span>
        <span>${escapeHTML(exercise.shortTitle)}</span>
      </button>
    `).join("");
  }

  function lineMarkup(code) {
    return code.split("\n").map((line, index) =>
      `<span class="code-line"><span class="line-number">${String(index + 1).padStart(3, "0")}</span>${escapeHTML(line) || " "}</span>`
    ).join("");
  }

  function renderCard(entry) {
    const { exercise, problem } = entry;
    return `
      <article class="problem-card" id="${problem.id}" data-program-id="${problem.id}">
        <div class="problem-head">
          <div class="problem-ident">
            <span class="problem-label">Q ${escapeHTML(problem.label)}</span>
            <h3 class="problem-title">${highlight(problem.title, activeQuery)}</h3>
            <p class="problem-question">${highlight(problem.question, activeQuery)}</p>
          </div>
          <button class="copy-button" type="button" data-copy="${problem.id}">copy</button>
        </div>
        <div class="problem-body">
          <div class="concepts" aria-label="Concepts">
            ${problem.concepts.map((concept) => `<span class="concept-tag">${highlight(concept, activeQuery)}</span>`).join("")}
          </div>
          <div class="code-frame" tabindex="0" aria-label="${escapeHTML(problem.title)} source code">
            <pre>${lineMarkup(problem.code)}</pre>
          </div>
          <div class="source-meta">
            <span>${escapeHTML(problem.aim)}</span>
            <span>${escapeHTML(exercise.source)} · record pages ${escapeHTML(problem.pages)}</span>
          </div>
        </div>
      </article>
    `;
  }

  function renderResults() {
    const grouped = new Map();
    visiblePrograms.forEach((entry) => {
      const id = entry.exercise.id;
      if (!grouped.has(id)) grouped.set(id, { exercise: entry.exercise, entries: [] });
      grouped.get(id).entries.push(entry);
    });

    const groups = [...grouped.values()].sort((a, b) => {
      const aScore = a.entries[0].score || 0;
      const bScore = b.entries[0].score || 0;
      return bScore - aScore || a.exercise.number.localeCompare(b.exercise.number);
    });

    exerciseList.innerHTML = groups.map(({ exercise, entries }) => `
      <section class="exercise-section" id="${exercise.id}">
        <div class="exercise-header">
          <div>
            <div class="exercise-title-wrap">
              <span class="exercise-number">EX ${exercise.number}</span>
              <h2 class="exercise-title">${escapeHTML(exercise.title)}</h2>
            </div>
            <p class="exercise-description">${escapeHTML(exercise.description)}</p>
          </div>
          <a class="exercise-source" href="${sourceBaseUrl}${encodeURIComponent(exercise.source)}" target="_blank" rel="noreferrer">open source ↗</a>
        </div>
        <div class="problem-list">${entries.map(renderCard).join("")}</div>
      </section>
    `).join("");

    emptyState.hidden = visiblePrograms.length > 0;
    const noun = visiblePrograms.length === 1 ? "program" : "programs";
    if (activeQuery) {
      resultsSummary.textContent = `${visiblePrograms.length} ${noun} · sorted by relevance`;
    } else {
      resultsSummary.textContent = `${visiblePrograms.length} programs across ${exercises.length} exercises`;
    }
    clearSearch.hidden = !activeQuery;
    copyVisible.disabled = visiblePrograms.length === 0;
    topbarStatus.textContent = `${allPrograms.length} programs indexed`;
  }

  function setQuery(value) {
    activeQuery = value.trim();
    searchInput.value = activeQuery;
    visiblePrograms = rankedPrograms(activeQuery);
    renderResults();
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.focus();
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }

  function markCopied(button, label) {
    button.textContent = label;
    button.classList.add("copied");
    window.clearTimeout(copyResetTimer);
    copyResetTimer = window.setTimeout(() => {
      document.querySelectorAll(".copy-button.copied").forEach((item) => {
        item.textContent = "copy";
        item.classList.remove("copied");
      });
      if (copyVisible.classList.contains("copied")) {
        copyVisible.textContent = "copy visible";
        copyVisible.classList.remove("copied");
      }
    }, 1600);
  }

  searchInput.addEventListener("input", () => setQuery(searchInput.value));
  clearSearch.addEventListener("click", () => {
    setQuery("");
    searchInput.focus();
  });

  document.addEventListener("click", async (event) => {
    const queryButton = event.target.closest("[data-query]");
    if (queryButton) {
      setQuery(queryButton.dataset.query || "");
      searchInput.focus();
      return;
    }

    const jumpButton = event.target.closest("[data-jump]");
    if (jumpButton) {
      setQuery("");
      window.requestAnimationFrame(() => document.getElementById(jumpButton.dataset.jump)?.scrollIntoView({ behavior: "smooth", block: "start" }));
      return;
    }

    const copyButton = event.target.closest("[data-copy]");
    if (copyButton) {
      const entry = programById.get(copyButton.dataset.copy);
      if (!entry) return;
      try {
        await copyText(entry.problem.code);
        markCopied(copyButton, "copied");
      } catch (error) {
        copyButton.textContent = "select code";
      }
    }
  });

  copyVisible.addEventListener("click", async () => {
    const code = visiblePrograms.map((entry) => entry.problem.code).join("\n\n");
    if (!code) return;
    try {
      await copyText(code);
      markCopied(copyVisible, "copied");
    } catch (error) {
      copyVisible.textContent = "select code";
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== searchInput) {
      event.preventDefault();
      searchInput.focus();
    }
    if (event.key === "Escape" && document.activeElement === searchInput && activeQuery) {
      setQuery("");
    }
  });

  renderNav();
  renderResults();
})();
