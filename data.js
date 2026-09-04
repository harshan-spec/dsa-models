window.DSA_DATA = {
  "exercises": [
    {
      "id": "ex-01",
      "number": "01",
      "title": "Arrays, structures & pointers",
      "shortTitle": "Arrays + pointers",
      "description": "Array operations plus pass-by-address with structure pointers.",
      "source": "DSA REC 1.pdf",
      "pages": "1–10",
      "problems": [
        {
          "id": "ex01-p1",
          "label": "1(a)",
          "title": "Array operations",
          "question": "Implement insertion (beginning, middle, and end), deletion (beginning, middle, end), searching and display operations on arrays.",
          "aim": "To write a C program to implement insertion, deletion, searching and display operations on arrays.",
          "concepts": [
            "Arrays",
            "Insertion",
            "Deletion",
            "Searching",
            "Merging",
            "Menu-driven"
          ],
          "pages": "1–7",
          "code": "#include <stdio.h>\n#define MAX 100\nvoid display(int arr[], int n)\n{\nint i;\nif(n == 0)\n{\nprintf(\"Array is empty.\\n\");\nreturn;\n}\nprintf(\"Array Elements: \");\nfor(i = 0; i < n; i++)\nprintf(\"%d \", arr[i]);\nprintf(\"\\n\");\n}\nvoid insertBeginning(int arr[], int *n, int value)\n{\nint i;\nfor(i = *n; i > 0; i--)\narr[i] = arr[i-1];\narr[0] = value;\n(*n)++;\n}\nvoid insertEnd(int arr[], int *n, int value)\n{\narr[*n] = value;\n(*n)++;\n}\nvoid insertMiddle(int arr[], int *n, int pos, int value)\n{\nint i;\nif(pos < 1 || pos > *n + 1)\n{\nprintf(\"Invalid Position!\\n\");\nreturn;\n}\nfor(i = *n; i >= pos; i--)\narr[i] = arr[i-1];\narr[pos-1] = value;\n(*n)++;\n}\nvoid deleteBeginning(int arr[], int *n)\n{\nint i;\nif(*n == 0)\n{\nprintf(\"Array is empty.\\n\");\nreturn;\n}\nfor(i = 0; i < *n-1; i++)\narr[i] = arr[i+1];\n(*n)--;\n}\nvoid deleteEnd(int *n)\n{\nif(*n == 0)\n{\nprintf(\"Array is empty.\\n\");\nreturn;\n}\n(*n)--;\n}\nvoid deleteMiddle(int arr[], int *n, int pos)\n{\nint i;\nif(pos < 1 || pos > *n)\n{\nprintf(\"Invalid Position!\\n\");\nreturn;\n}\nfor(i = pos-1; i < *n-1; i++)\narr[i] = arr[i+1];\n(*n)--;\n}\nvoid search(int arr[], int n, int key)\n{\nint i;\nfor(i = 0; i < n; i++)\n{\nif(arr[i] == key)\n{\nprintf(\"Element found at position %d\\n\", i+1);\nreturn;\n}\n}\nprintf(\"Element not found.\\n\");\n}\nvoid mergeArrays(int arr1[], int n1, int arr2[], int n2)\n{\nint merge[MAX];\nint i;\nfor(i = 0; i < n1; i++)\nmerge[i] = arr1[i];\nfor(i = 0; i < n2; i++)\nmerge[n1+i] = arr2[i];\nprintf(\"Merged Array: \");\nfor(i = 0; i < n1+n2; i++)\nprintf(\"%d \", merge[i]);\nprintf(\"\\n\");\n}\nvoid checkSorted(int arr[], int n)\n{\nint i;\nfor(i = 0; i < n-1; i++)\n{\nif(arr[i] > arr[i+1])\n{\nprintf(\"Array is NOT Sorted.\\n\");\nreturn;\n}\n}\nprintf(\"Array is Sorted.\\n\");\n}\nint main()\n{\nint arr[MAX], arr2[MAX];\nint n, n2;\nint choice, value, pos, key;\nint i;\nprintf(\"Enter number of elements: \");\nscanf(\"%d\", &n);\nprintf(\"Enter elements:\\n\");\nfor(i = 0; i < n; i++)\nscanf(\"%d\", &arr[i]);\ndo\n{\nprintf(\"\\n------ MENU ------\\n\");\nprintf(\"1. Insert at Beginning\\n\");\nprintf(\"2. Insert at Middle\\n\");\nprintf(\"3. Insert at End\\n\");\nprintf(\"4. Delete at Beginning\\n\");\nprintf(\"5. Delete at Middle\\n\");\nprintf(\"6. Delete at End\\n\");\nprintf(\"7. Search\\n\");\nprintf(\"8. Merge Arrays\\n\");\nprintf(\"9. Check Sorted\\n\");\nprintf(\"10. Display\\n\");\nprintf(\"11. Exit\\n\");\nprintf(\"Enter Choice: \");\nscanf(\"%d\", &choice);\nswitch(choice)\n{\ncase 1:\nprintf(\"Enter value: \");\nscanf(\"%d\", &value);\ninsertBeginning(arr, &n, value);\nbreak;\ncase 2:\nprintf(\"Enter position: \");\nscanf(\"%d\", &pos);\nprintf(\"Enter value: \");\nscanf(\"%d\", &value);\ninsertMiddle(arr, &n, pos, value);\nbreak;\ncase 3:\nprintf(\"Enter value: \");\nscanf(\"%d\", &value);\ninsertEnd(arr, &n, value);\nbreak;\ncase 4:\ndeleteBeginning(arr, &n);\nbreak;\ncase 5:\nprintf(\"Enter position: \");\nscanf(\"%d\", &pos);\ndeleteMiddle(arr, &n, pos);\nbreak;\ncase 6:\ndeleteEnd(&n);\nbreak;\ncase 7:\nprintf(\"Enter element to search: \");\nscanf(\"%d\", &key);\nsearch(arr, n, key);\nbreak;\ncase 8:\nprintf(\"Enter number of elements in second array: \");\nscanf(\"%d\", &n2);\nprintf(\"Enter second array elements:\\n\");\nfor(i = 0; i < n2; i++)\nscanf(\"%d\", &arr2[i]);\nmergeArrays(arr, n, arr2, n2);\nbreak;\ncase 9:\ncheckSorted(arr, n);\nbreak;\ncase 10:\ndisplay(arr, n);\nbreak;\ncase 11:\nprintf(\"Program Ended.\\n\");\nbreak;\ndefault:\nprintf(\"Invalid Choice!\\n\");\n}\n} while(choice != 11);\nreturn 0;\n}\n"
        },
        {
          "id": "ex01-p2",
          "label": "1(b)",
          "title": "Pointers to structures",
          "question": "Read the details of 2 employees (Name, EMP_ID, Salary) using pointers to structures. Display the employee with maximum salary using high_paid_employee() and pass by address.",
          "aim": "To implement pointers to structures in C and compare two employee salaries using pass by address.",
          "concepts": [
            "Structures",
            "Pointers",
            "Pass by address",
            "Functions",
            "Comparison"
          ],
          "pages": "8–10",
          "code": "#include <stdio.h>\nstruct Employee\n{\nchar name[30];\nint empid;\nfloat salary;\n};\nvoid read(struct Employee *e)\n{\nprintf(\"Enter Name: \");\nscanf(\"%s\", e->name);\nprintf(\"Enter Employee ID: \");\nscanf(\"%d\", &e->empid);\nprintf(\"Enter Salary: \");\nscanf(\"%f\", &e->salary);\n}\nvoid display(struct Employee *e)\n{\nprintf(\"\\nEmployee Details\\n\");\nprintf(\"Name : %s\\n\", e->name);\nprintf(\"Employee ID : %d\\n\", e->empid);\nprintf(\"Salary : %.2f\\n\", e->salary);\n}\nvoid high_paid_employee(struct Employee *e1, struct Employee *e2)\n{\nif(e1->salary > e2->salary)\ndisplay(e1);\nelse\ndisplay(e2);\n}\nint main()\n{\nstruct Employee emp1, emp2;\nprintf(\"Enter Details of Employee 1\\n\");\nread(&emp1);\nprintf(\"\\nEnter Details of Employee 2\\n\");\nread(&emp2);\nprintf(\"\\nEmployee with Maximum Salary:\\n\");\nhigh_paid_employee(&emp1, &emp2);\nreturn 0;\n}\n"
        }
      ],
      "problemCount": 2
    },
    {
      "id": "ex-02",
      "number": "02",
      "title": "Stack & applications",
      "shortTitle": "Stack",
      "description": "Array-backed stack operations and an infix-to-postfix converter.",
      "source": "DSA REC 2.pdf",
      "pages": "11–16",
      "problems": [
        {
          "id": "ex02-p1",
          "label": "2(a)",
          "title": "Stack using arrays",
          "question": "Implement stack operations using arrays.",
          "aim": "To implement Push, Pop, Peek and Display operations using a stack array in C.",
          "concepts": [
            "Stack",
            "Push",
            "Pop",
            "Peek",
            "LIFO",
            "Arrays"
          ],
          "pages": "11–14",
          "code": "#include <stdio.h>\n#define SIZE 100\nint stack[SIZE];\nint top = -1;\nvoid push()\n{\nint item;\nif (top == SIZE - 1)\n{\nprintf(\"Stack Overflow\\n\");\n}\nelse\n{\nprintf(\"Enter element: \");\nscanf(\"%d\", &item);\ntop++;\nstack[top] = item;\nprintf(\"Element inserted\\n\");\n}\n}\nvoid pop()\n{\nif (top == -1)\n{\nprintf(\"Stack Underflow\\n\");\n}\nelse\n{\nprintf(\"Deleted element = %d\\n\", stack[top]);\ntop--;\n}\n}\nvoid peek()\n{\nif (top == -1)\n{\nprintf(\"Stack is Empty\\n\");\n}\nelse\n{\nprintf(\"Top element = %d\\n\", stack[top]);\n}\n}\nvoid display()\n{\nint i;\nif (top == -1)\n{\nprintf(\"Stack is Empty\\n\");\n}\nelse\n{\nprintf(\"Stack elements are:\\n\");\nfor (i = top; i >= 0; i--)\n{\nprintf(\"%d \", stack[i]);\n}\nprintf(\"\\n\");\n}\n}\nint main()\n{\nint choice;\nwhile (1)\n{\nprintf(\"\\n----- STACK MENU -----\\n\");\nprintf(\"1. Push\\n\");\nprintf(\"2. Pop\\n\");\nprintf(\"3. Peek\\n\");\nprintf(\"4. Display\\n\");\nprintf(\"5. Exit\\n\");\nprintf(\"Enter your choice: \");\nscanf(\"%d\", &choice);\nswitch (choice)\n{\ncase 1:\npush();\nbreak;\ncase 2:\npop();\nbreak;\ncase 3:\npeek();\nbreak;\ncase 4:\ndisplay();\nbreak;\ncase 5:\nreturn 0;\ndefault:\nprintf(\"Invalid Choice\\n\");\n}\n}\n}\n"
        },
        {
          "id": "ex02-p2",
          "label": "2(b)",
          "title": "Infix to postfix conversion",
          "question": "Implement infix to postfix conversion using Stack.",
          "aim": "To convert an infix expression into postfix notation using the Stack data structure in C.",
          "concepts": [
            "Stack",
            "Infix",
            "Postfix",
            "Operators",
            "Expression conversion"
          ],
          "pages": "15–16",
          "code": "#include <stdio.h>\n#include <ctype.h>\nchar stack[20];\nint top = -1;\nvoid push(char x)\n{\nstack[++top] = x;\n}\nchar pop()\n{\nreturn stack[top--];\n}\nint priority(char x)\n{\nif(x == '+' || x == '-') return 1;\nif(x == '*' || x == '/') return 2;\nreturn 0;\n}\nint main()\n{\nchar infix[20], postfix[20];\nint i = 0, j = 0;\nprintf(\"Enter Infix: \");\nscanf(\"%s\", infix);\nwhile(infix[i] != '\\0')\n{\nif(isalnum(infix[i]))\npostfix[j++] = infix[i];\nelse\n{\nwhile(top != -1 && priority(stack[top]) >= priority(infix[i]))\npostfix[j++] = pop();\npush(infix[i]);\n}\ni++;\n}\nwhile(top != -1)\npostfix[j++] = pop();\npostfix[j] = '\\0';\nprintf(\"Postfix = %s\", postfix);\nreturn 0;\n}\n"
        }
      ],
      "problemCount": 2
    },
    {
      "id": "ex-03",
      "number": "03",
      "title": "Linear & circular queues",
      "shortTitle": "Queues",
      "description": "FIFO queue behavior with array and circular-buffer implementations.",
      "source": "DSA REC 3.pdf",
      "pages": "17–26",
      "problems": [
        {
          "id": "ex03-p1",
          "label": "3(A)",
          "title": "Linear queue using arrays",
          "question": "Implement Enqueue and Dequeue operations on a linear Queue.",
          "aim": "To implement Enqueue and Dequeue operations on a Linear Queue using an array.",
          "concepts": [
            "Queue",
            "Enqueue",
            "Dequeue",
            "FIFO",
            "Linear queue",
            "Arrays"
          ],
          "pages": "17–21",
          "code": "#include <stdio.h>\n#define MAX 5\nint queue[MAX];\nint front = -1;\nint rear = -1;\n/* Enqueue operation */\nvoid enqueue()\n{\nint value;\nif (rear == MAX - 1)\n{\nprintf(\"Queue Overflow\\n\");\n}\nelse\n{\nprintf(\"Enter the value: \");\nscanf(\"%d\", &value);\nif (front == -1)\n{\nfront = 0;\n}\nrear++;\nqueue[rear] = value;\nprintf(\"%d inserted into the queue\\n\", value);\n}\n}\n/* Dequeue operation */\nvoid dequeue()\n{\nint value;\nif (front == -1 || front > rear)\n{\nprintf(\"Queue Underflow\\n\");\n}\nelse\n{\nvalue = queue[front];\nfront++;\nif (front > rear)\n{\nfront = rear = -1;\n}\nprintf(\"%d deleted from the queue\\n\", value);\n}\n}\n/* Display operation */\nvoid display()\n{\nint i;\nif (front == -1)\n{\nprintf(\"Queue is empty\\n\");\n}\nelse\n{\nprintf(\"Queue elements are: \");\nfor (i = front; i <= rear; i++)\n{\nprintf(\"%d \", queue[i]);\n}\nprintf(\"\\n\");\n}\n}\nint main()\n{\nint choice;\nwhile (1)\n{\nprintf(\"\\n1. Enqueue\");\nprintf(\"\\n2. Dequeue\");\nprintf(\"\\n3. Display\");\nprintf(\"\\n4. Exit\");\nprintf(\"\\nEnter your choice: \");\nscanf(\"%d\", &choice);\nswitch (choice)\n{\ncase 1:\nenqueue();\nbreak;\ncase 2:\ndequeue();\nbreak;\ncase 3:\ndisplay();\nbreak;\ncase 4:\nreturn 0;\ndefault:\nprintf(\"Invalid choice\\n\");\n}\n}\nreturn 0;\n}\n"
        },
        {
          "id": "ex03-p2",
          "label": "3(B)",
          "title": "Circular queue using arrays",
          "question": "Implement Enqueue and Dequeue operations on a Circular Queue.",
          "aim": "To implement Enqueue and Dequeue operations on a Circular Queue using an array.",
          "concepts": [
            "Queue",
            "Circular queue",
            "Enqueue",
            "Dequeue",
            "FIFO",
            "Modulo"
          ],
          "pages": "22–26",
          "code": "#include <stdio.h>\n#define MAX 5\nint queue[MAX];\nint front = -1;\nint rear = -1;\n/* Enqueue operation */\nvoid enqueue()\n{\nint value;\nif ((rear + 1) % MAX == front)\n{\nprintf(\"Circular Queue Overflow\\n\");\n}\nelse\n{\nprintf(\"Enter the value: \");\nscanf(\"%d\", &value);\nif (front == -1)\n{\nfront = 0;\nrear = 0;\n}\nelse\n{\nrear = (rear + 1) % MAX;\n}\nqueue[rear] = value;\nprintf(\"%d inserted into the circular queue\\n\", value);\n}\n}\n/* Dequeue operation */\nvoid dequeue()\n{\nint value;\nif (front == -1)\n{\nprintf(\"Circular Queue Underflow\\n\");\n}\nelse\n{\nvalue = queue[front];\nif (front == rear)\n{\nfront = -1;\nrear = -1;\n}\nelse\n{\nfront = (front + 1) % MAX;\n}\nprintf(\"%d deleted from the circular queue\\n\", value);\n}\n}\n/* Display operation */\nvoid display()\n{\nint i;\nif (front == -1)\n{\nprintf(\"Circular Queue is empty\\n\");\n}\nelse\n{\nprintf(\"Circular Queue elements are: \");\ni = front;\nwhile (1)\n{\nprintf(\"%d \", queue[i]);\nif (i == rear)\n{\nbreak;\n}\ni = (i + 1) % MAX;\n}\nprintf(\"\\n\");\n}\n}\nint main()\n{\nint choice;\nwhile (1)\n{\nprintf(\"\\n1. Enqueue\");\nprintf(\"\\n2. Dequeue\");\nprintf(\"\\n3. Display\");\nprintf(\"\\n4. Exit\");\nprintf(\"\\nEnter your choice: \");\nscanf(\"%d\", &choice);\nswitch (choice)\n{\ncase 1:\nenqueue();\nbreak;\ncase 2:\ndequeue();\nbreak;\ncase 3:\ndisplay();\nbreak;\ncase 4:\nreturn 0;\ndefault:\nprintf(\"Invalid choice\\n\");\n}\n}\nreturn 0;\n}\n"
        }
      ],
      "problemCount": 2
    },
    {
      "id": "ex-04",
      "number": "04",
      "title": "Singly linked list",
      "shortTitle": "Singly list",
      "description": "Node creation, insertion, deletion, search, display and list merging.",
      "source": "DSA REC 4.pdf",
      "pages": "27–36",
      "problems": [
        {
          "id": "ex04-p1",
          "label": "4",
          "title": "Singly linked list operations",
          "question": "Implement creation of a sorted linked list, deletion of a node, search a value, merge two sorted lists, and display operations on a Singly Linked List.",
          "aim": "To implement creation, deletion, searching, merging and display operations on a Singly Linked List.",
          "concepts": [
            "Linked list",
            "Nodes",
            "Pointers",
            "Insertion",
            "Deletion",
            "Search",
            "Merge"
          ],
          "pages": "27–36",
          "code": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\nint data;\nstruct Node *next;\n};\nstruct Node *head = NULL;\nstruct Node* createNode(int data)\n{\nstruct Node *newNode = (struct Node *)malloc(sizeof(struct Node));\nif (newNode == NULL)\n{\nprintf(\"Memory Allocation Failed!\\n\");\nexit(1);\n}\nnewNode->data = data;\nnewNode->next = NULL;\nreturn newNode;\n}\nvoid insertBeginning(int data)\n{\nstruct Node *newNode = createNode(data);\nnewNode->next = head;\nhead = newNode;\n}\nvoid insertEnd(int data)\n{\nstruct Node *newNode = createNode(data);\nif (head == NULL)\n{\nhead = newNode;\nreturn;\n}\nstruct Node *temp = head;\nwhile (temp->next != NULL)\ntemp = temp->next;\ntemp->next = newNode;\n}\nvoid insertPosition(int data, int pos)\n{\nint i;\nif (pos < 1)\n{\nprintf(\"Invalid Position\\n\");\nreturn;\n}\nif (pos == 1)\n{\ninsertBeginning(data);\nreturn;\n}\nstruct Node *newNode = createNode(data);\nstruct Node *temp = head;\nfor (i = 1; i < pos - 1 && temp != NULL; i++)\ntemp = temp->next;\nif (temp == NULL)\n{\nprintf(\"Invalid Position\\n\");\nfree(newNode);\nreturn;\n}\nnewNode->next = temp->next;\ntemp->next = newNode;\n}\nvoid deleteBeginning()\n{\nif (head == NULL)\n{\nprintf(\"List is Empty\\n\");\nreturn;\n}\nstruct Node *temp = head;\nhead = head->next;\nfree(temp);\n}\nvoid deleteEnd()\n{\nif (head == NULL)\n{\nprintf(\"List is Empty\\n\");\nreturn;\n}\nif (head->next == NULL)\n{\nfree(head);\nhead = NULL;\nreturn;\n}\nstruct Node *temp = head;\nwhile (temp->next->next != NULL)\ntemp = temp->next;\nfree(temp->next);\ntemp->next = NULL;\n}\nvoid deletePosition(int pos)\n{\nint i;\nif (head == NULL)\n{\nprintf(\"List is Empty\\n\");\nreturn;\n}\nif (pos < 1)\n{\nprintf(\"Invalid Position\\n\");\nreturn;\n}\nif (pos == 1)\n{\ndeleteBeginning();\nreturn;\n}\nstruct Node *temp = head;\nfor (i = 1; i < pos - 1 && temp != NULL; i++)\ntemp = temp->next;\nif (temp == NULL || temp->next == NULL)\n{\nprintf(\"Invalid Position\\n\");\nreturn;\n}\nstruct Node *del = temp->next;\ntemp->next = del->next;\nfree(del);\n}\nvoid search(int key)\n{\nstruct Node *temp = head;\nint pos = 1;\nwhile (temp != NULL)\n{\nif (temp->data == key)\n{\nprintf(\"Element found at position %d\\n\", pos);\nreturn;\n}\ntemp = temp->next;\npos++;\n}\nprintf(\"Element not found\\n\");\n}\nvoid display(struct Node *ptr)\n{\nif (ptr == NULL)\n{\nprintf(\"List is Empty\\n\");\nreturn;\n}\nwhile (ptr != NULL)\n{\nprintf(\"%d -> \", ptr->data);\nptr = ptr->next;\n}\nprintf(\"NULL\\n\");\n}\n// Merge Lists\nstruct Node* mergeLists(struct Node *list1, struct Node *list2)\n{\nif (list1 == NULL)\nreturn list2;\nstruct Node *temp = list1;\nwhile (temp->next != NULL)\ntemp = temp->next;\ntemp->next = list2;\nreturn list1;\n}\nint main()\n{\nint choice, data, pos;\nwhile (1)\n{\nprintf(\"\\n--- Linked List Menu ---\\n\");\nprintf(\"1. Insert at Beginning\\n\");\nprintf(\"2. Insert at End\\n\");\nprintf(\"3. Insert at Position\\n\");\nprintf(\"4. Delete from Beginning\\n\");\nprintf(\"5. Delete from End\\n\");\nprintf(\"6. Delete from Position\\n\");\nprintf(\"7. Search Element\\n\");\nprintf(\"8. Display\\n\");\nprintf(\"9. Merge Another List\\n\");\nprintf(\"10. Exit\\n\");\nprintf(\"Enter Choice: \");\nscanf(\"%d\", &choice);\nswitch (choice)\n{\ncase 1:\nprintf(\"Enter Data: \");\nscanf(\"%d\", &data);\ninsertBeginning(data);\nbreak;\ncase 2:\nprintf(\"Enter Data: \");\nscanf(\"%d\", &data);\ninsertEnd(data);\nbreak;\ncase 3:\nprintf(\"Enter Data and Position: \");\nscanf(\"%d%d\", &data, &pos);\ninsertPosition(data, pos);\nbreak;\ncase 4:\ndeleteBeginning();\nbreak;\ncase 5:\ndeleteEnd();\nbreak;\ncase 6:\nprintf(\"Enter Position: \");\nscanf(\"%d\", &pos);\ndeletePosition(pos);\nbreak;\ncase 7:\nprintf(\"Enter Element to Search: \");\nscanf(\"%d\", &data);\nsearch(data);\nbreak;\ncase 8:\ndisplay(head);\nbreak;\ncase 9:\n{\nstruct Node *head2 = NULL;\nstruct Node *temp;\nint n, value, i;\nprintf(\"Enter number of nodes in second list: \");\nscanf(\"%d\", &n);\nfor (i = 0; i < n; i++)\n{\nprintf(\"Enter value: \");\nscanf(\"%d\", &value);\nstruct Node *newNode = createNode(value);\nif (head2 == NULL)\nhead2 = newNode;\nelse\n{\ntemp = head2;\nwhile (temp->next != NULL)\ntemp = temp->next;\ntemp->next = newNode;\n}\n}\nhead = mergeLists(head, head2);\nprintf(\"Lists Merged Successfully.\\n\");\nbreak; }\ncase 10:\nexit(0);\ndefault:\nprintf(\"Invalid Choice\\n\");\n} }\nreturn 0;\n}\n"
        }
      ],
      "problemCount": 1
    },
    {
      "id": "ex-05",
      "number": "05",
      "title": "Circular singly linked lists",
      "shortTitle": "Circular list",
      "description": "Sorted circular nodes with deletion, search, display and merge.",
      "source": "DSA REC 5.pdf",
      "pages": "37–45",
      "problems": [
        {
          "id": "ex05-p1",
          "label": "5",
          "title": "Circular singly linked list operations",
          "question": "Implement creation of a sorted linked list, deletion of a node, search a value, merge two sorted lists, and display operations on a Circular Singly Linked List.",
          "aim": "To implement creation, deletion, searching, merging and display operations on a Circular Singly Linked List.",
          "concepts": [
            "Circular linked list",
            "Sorted insertion",
            "Deletion",
            "Search",
            "Merge",
            "Traversal"
          ],
          "pages": "37–45",
          "code": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node{\nint data;\nstruct Node *next; };\nstruct Node *head1 = NULL, *head2 = NULL;\nvoid insertSorted(struct Node **head, int value) {\nstruct Node *newNode, *current;\nnewNode = (struct Node *)malloc(sizeof(struct Node));\nnewNode->data = value;\nif (*head == NULL) {\nnewNode->next = newNode;\n*head = newNode;\nreturn; }\nif (value < (*head)->data) {\ncurrent = *head;\nwhile (current->next != *head)\ncurrent = current->next;\ncurrent->next = newNode;\nnewNode->next = *head;\n*head = newNode;\nreturn; }\ncurrent = *head;\nwhile (current->next != *head && current->next->data < value)\ncurrent = current->next;\nnewNode->next = current->next;\ncurrent->next = newNode; }\nvoid display(struct Node *head) {\nif (head == NULL) {\nprintf(\"List is Empty\\n\");\nreturn;\n}\nstruct Node *temp = head;\ndo\n{\nprintf(\"%d \", temp->data);\ntemp = temp->next;\n} while (temp != head);\nprintf(\"\\n\"); }\nvoid search(struct Node *head, int key) {\nif (head == NULL) {\nprintf(\"List Empty\\n\");\nreturn;\n}\nstruct Node *temp = head;\ndo\n{\nif (temp->data == key)\n{\nprintf(\"Element Found\\n\");\nreturn;\n}\ntemp = temp->next;\n} while (temp != head);\nprintf(\"Element Not Found\\n\");\n}\nvoid deleteNode(struct Node **head, int key)\n{\nif (*head == NULL)\n{\nprintf(\"List Empty\\n\");\nreturn;\n}\nstruct Node *curr = *head, *prev = NULL;\nif (curr->data == key)\n{\nif (curr->next == *head)\n{\nfree(curr);\n*head = NULL;\nreturn;\n}\nwhile (curr->next != *head)\ncurr = curr->next;\nstruct Node *temp = *head;\ncurr->next = temp->next;\n*head = temp->next;\nfree(temp);\nprintf(\"Deleted Successfully\\n\");\nreturn;\n}\ncurr = *head;\nwhile (curr->next != *head && curr->data != key)\n{\nprev = curr;\ncurr = curr->next;\n}\nif (curr->data == key)\n{\nprev->next = curr->next;\nfree(curr);\nprintf(\"Deleted Successfully\\n\");\n}\nelse\nprintf(\"Element Not Found\\n\");\n}\nstruct Node *merge(struct Node *head1, struct Node *head2)\n{\nstruct Node *result = NULL;\nif (head1 != NULL)\n{\nstruct Node *temp = head1;\ndo\n{\ninsertSorted(&result, temp->data);\ntemp = temp->next;\n} while (temp != head1);\n}\nif (head2 != NULL)\n{\nstruct Node *temp = head2;\ndo\n{\ninsertSorted(&result, temp->data);\ntemp = temp->next;\n} while (temp != head2);\n}\nreturn result;\n}\nint main()\n{\nint n, i, value, choice, key;\nstruct Node *merged = NULL;\nwhile (1)\n{\nprintf(\"\\n--- Circular Singly Linked List ---\\n\");\nprintf(\"1.Create List1\\n\");\nprintf(\"2.Create List2\\n\");\nprintf(\"3.Display List1\\n\");\nprintf(\"4.Display List2\\n\");\nprintf(\"5.Delete from List1\\n\");\nprintf(\"6.Search in List1\\n\");\nprintf(\"7.Merge Lists\\n\");\nprintf(\"8.Display Merged List\\n\");\nprintf(\"9.Exit\\n\");\nprintf(\"Enter Choice: \");\nscanf(\"%d\", &choice);\nswitch (choice)\n{\ncase 1:\nprintf(\"Enter number of elements: \");\nscanf(\"%d\", &n);\nfor (i = 0; i < n; i++)\n{\nscanf(\"%d\", &value);\ninsertSorted(&head1, value);\n}\nbreak;\ncase 2:\nprintf(\"Enter number of elements: \");\nscanf(\"%d\", &n);\nfor (i = 0; i < n; i++)\n{\nscanf(\"%d\", &value);\ninsertSorted(&head2, value);\n}\nbreak;\ncase 3:\nprintf(\"List1: \");\ndisplay(head1);\nbreak;\ncase 4:\nprintf(\"List2: \");\ndisplay(head2);\nbreak;\ncase 5:\nprintf(\"Enter element to delete: \");\nscanf(\"%d\", &key);\ndeleteNode(&head1, key);\nbreak;\ncase 6:\nprintf(\"Enter element to search: \");\nscanf(\"%d\", &key);\nsearch(head1, key);\nbreak;\ncase 7:\nmerged = merge(head1, head2);\nprintf(\"Lists Merged Successfully\\n\");\nbreak;\ncase 8:\nprintf(\"Merged List: \");\ndisplay(merged);\nbreak;\ncase 9:\nexit(0);\ndefault:\nprintf(\"Invalid Choice\\n\");\n}\n}\nreturn 0;\n}\n"
        }
      ],
      "problemCount": 1
    },
    {
      "id": "ex-06",
      "number": "06",
      "title": "Doubly linked lists",
      "shortTitle": "Doubly list",
      "description": "Bidirectional node links with insertion, deletion, search and display.",
      "source": "DSA REC 6.pdf",
      "pages": "46–54",
      "problems": [
        {
          "id": "ex06-p1",
          "label": "6",
          "title": "Doubly linked list operations",
          "question": "Implement creation of a sorted linked list, deletion of a node, search a value, merge two sorted lists, and display operations on a Doubly Linked List.",
          "aim": "To implement creation, deletion, searching, merging and display operations on a Doubly Linked List.",
          "concepts": [
            "Doubly linked list",
            "Prev pointer",
            "Next pointer",
            "Insertion",
            "Deletion",
            "Search"
          ],
          "pages": "46–54",
          "code": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\nint data;\nstruct Node *prev;\nstruct Node *next;\n};\nstruct Node *head = NULL;\nvoid insertBeginning(int value) {\nstruct Node *newNode = (struct Node *)malloc(sizeof(struct Node));\nnewNode->data = value;\nnewNode->prev = NULL;\nnewNode->next = head;\nif (head != NULL)\nhead->prev = newNode;\nhead = newNode;\n}\nvoid insertEnd(int value) {\nstruct Node *newNode = (struct Node *)malloc(sizeof(struct Node));\nnewNode->data = value;\nnewNode->next = NULL;\nif (head == NULL) {\nnewNode->prev = NULL;\nhead = newNode;\nreturn;\n}\nstruct Node *temp = head;\nwhile (temp->next != NULL)\ntemp = temp->next;\ntemp->next = newNode;\nnewNode->prev = temp;\n}\nvoid insertMiddle(int key, int value) {\nstruct Node *temp = head;\nwhile (temp != NULL && temp->data != key)\ntemp = temp->next;\nif (temp == NULL) {\nprintf(\"Node not found.\\n\");\nreturn;\n}\nstruct Node *newNode = (struct Node *)malloc(sizeof(struct Node));\nnewNode->data = value;\nnewNode->next = temp->next;\nnewNode->prev = temp;\nif (temp->next != NULL)\ntemp->next->prev = newNode;\ntemp->next = newNode;\n}\nvoid deleteBeginning() {\nif (head == NULL) {\nprintf(\"List is empty.\\n\");\nreturn;\n}\nstruct Node *temp = head;\nhead = head->next;\nif (head != NULL)\nhead->prev = NULL;\nfree(temp);\nprintf(\"First node deleted.\\n\");\n}\nvoid deleteEnd() {\nif (head == NULL) {\nprintf(\"List is empty.\\n\");\nreturn;\n}\nif (head->next == NULL) {\nfree(head);\nhead = NULL;\nprintf(\"Last node deleted.\\n\");\nreturn;\n}\nstruct Node *temp = head;\nwhile (temp->next != NULL)\ntemp = temp->next;\ntemp->prev->next = NULL;\nfree(temp);\nprintf(\"Last node deleted.\\n\");\n}\nvoid deleteMiddle(int key) {\nif (head == NULL) {\nprintf(\"List is empty.\\n\");\nreturn;\n}\nstruct Node *temp = head;\nwhile (temp != NULL && temp->data != key)\ntemp = temp->next;\nif (temp == NULL) {\nprintf(\"Node not found.\\n\");\nreturn;\n}\nif (temp == head) {\ndeleteBeginning();\nreturn;\n}\nif (temp->next == NULL) {\ndeleteEnd();\nreturn;\n}\ntemp->prev->next = temp->next;\ntemp->next->prev = temp->prev;\nfree(temp);\nprintf(\"Node deleted.\\n\");\n}\nvoid search(int key) {\nstruct Node *temp = head;\nint pos = 1;\nwhile (temp != NULL) {\nif (temp->data == key) {\nprintf(\"Element found at position %d\\n\", pos);\nreturn;\n}\ntemp = temp->next;\npos++;\n}\nprintf(\"Element not found.\\n\");\n}\nvoid display() {\nif (head == NULL) {\nprintf(\"List is empty.\\n\");\nreturn;\n}\nstruct Node *temp = head;\nprintf(\"Doubly Linked List: \");\nwhile (temp != NULL) {\nprintf(\"%d \", temp->data);\ntemp = temp->next;\n}\nprintf(\"\\n\");\n}\nint main() {\nint choice, value, key;\nwhile (1) {\nprintf(\"\\n===== DOUBLY LINKED LIST =====\\n\");\nprintf(\"1. Insert at Beginning\\n\");\nprintf(\"2. Insert at Middle\\n\");\nprintf(\"3. Insert at End\\n\");\nprintf(\"4. Delete from Beginning\\n\");\nprintf(\"5. Delete from Middle\\n\");\nprintf(\"6. Delete from End\\n\");\nprintf(\"7. Search\\n\");\nprintf(\"8. Display\\n\");\nprintf(\"9. Exit\\n\");\nprintf(\"Enter your choice: \");\nscanf(\"%d\", &choice);\nswitch (choice) {\ncase 1:\nprintf(\"Enter value: \");\nscanf(\"%d\", &value);\ninsertBeginning(value);\nbreak;\ncase 2:\nprintf(\"Insert after which value? \");\nscanf(\"%d\", &key);\nprintf(\"Enter new value: \");\nscanf(\"%d\", &value);\ninsertMiddle(key, value);\nbreak;\ncase 3:\nprintf(\"Enter value: \");\nscanf(\"%d\", &value);\ninsertEnd(value);\nbreak;\ncase 4:\ndeleteBeginning();\nbreak;\ncase 5:\nprintf(\"Enter value to delete: \");\nscanf(\"%d\", &key);\ndeleteMiddle(key);\nbreak;\ncase 6:\ndeleteEnd();\nbreak;\ncase 7:\nprintf(\"Enter value to search: \");\nscanf(\"%d\", &key);\nsearch(key);\nbreak;\ncase 8:\ndisplay();\nbreak;\ncase 9:\nprintf(\"Exiting...\\n\");\nexit(0);\ndefault:\nprintf(\"Invalid choice.\\n\");\n}\n}\nreturn 0;\n}\n"
        }
      ],
      "problemCount": 1
    },
    {
      "id": "ex-07",
      "number": "07",
      "title": "Binary search tree",
      "shortTitle": "BST",
      "description": "BST creation, insertion, search and depth-first traversals.",
      "source": "DSA REC 7.pdf",
      "pages": "55–61",
      "problems": [
        {
          "id": "ex07-p1",
          "label": "7",
          "title": "BST traversals and search",
          "question": "Implement creation, insertion, searching and traversals (preorder, inorder, postorder) in a Binary Search Tree.",
          "aim": "To implement creation, insertion, searching and preorder, inorder and postorder traversals in a Binary Search Tree.",
          "concepts": [
            "Binary search tree",
            "BST",
            "Insertion",
            "Search",
            "Inorder",
            "Preorder",
            "Postorder"
          ],
          "pages": "55–61",
          "code": "#include <stdio.h>\n#include <stdlib.h>\nstruct node {\nint data;\nstruct node *left;\nstruct node *right;\n};\nstruct node *root = NULL;\nstruct node *temp, *newnode, *parent;\nstruct node* create(int value) {\nnewnode = (struct node*)malloc(sizeof(struct node));\nnewnode->data = value;\nnewnode->left = NULL;\nnewnode->right = NULL;\nreturn newnode;\n}\nvoid insert(int value) {\nnewnode = create(value);\nif (root == NULL)\n{\nroot = newnode;\nreturn;\n}\ntemp = root;\nparent = NULL;\nwhile (temp != NULL)\n{\nparent = temp;\nif (value < temp->data)\n{\ntemp = temp->left;\n}\nelse\n{\ntemp = temp->right;\n}\n}\nif (value < parent->data)\nparent->left = newnode;\nelse\nparent->right = newnode;\n}\nstruct node* search(int value) {\ntemp = root;\nwhile (temp != NULL)\n{\nif (temp->data == value)\nreturn temp;\nelse if (value < temp->data)\ntemp = temp->left;\nelse\ntemp = temp->right;\n}\nreturn NULL;\n}\nvoid inorder(struct node *root) {\nif (root != NULL)\n{\ninorder(root->left);\nprintf(\"%d \", root->data);\ninorder(root->right);\n}\n}\nvoid preorder(struct node *root) {\nif (root != NULL)\n{\nprintf(\"%d \", root->data);\npreorder(root->left);\npreorder(root->right);\n}\n}\nvoid postorder(struct node *root) {\nif (root != NULL)\n{\npostorder(root->left);\npostorder(root->right);\nprintf(\"%d \", root->data);\n}\n}\nint main() {\nint choice = 0, value;\nstruct node *result;\nwhile (choice != 6)\n{\nprintf(\"\\nBinary Search Tree\\n\");\nprintf(\"1. Insert\\n\");\nprintf(\"2. Search\\n\");\nprintf(\"3. Inorder\\n\");\nprintf(\"4. Preorder\\n\");\nprintf(\"5. Postorder\\n\");\nprintf(\"6. Exit\\n\");\nprintf(\"Enter choice: \");\nscanf(\"%d\", &choice);\nswitch (choice) {\ncase 1:\nprintf(\"Enter value: \");\nscanf(\"%d\", &value);\ninsert(value);\nbreak;\ncase 2:\nprintf(\"Enter value to search: \");\nscanf(\"%d\", &value);\nresult = search(value);\nif (result != NULL)\nprintf(\"Value found.\\n\");\nelse\nprintf(\"Value not found.\\n\");\nbreak;\ncase 3:\nprintf(\"Inorder Traversal: \");\ninorder(root);\nprintf(\"\\n\");\nbreak;\ncase 4:\nprintf(\"Preorder Traversal: \");\npreorder(root);\nprintf(\"\\n\");\nbreak;\ncase 5:\nprintf(\"Postorder Traversal: \");\npostorder(root);\nprintf(\"\\n\");\nbreak;\ncase 6:\nprintf(\"Exit.\\n\");\nbreak;\ndefault:\nprintf(\"invalid!\\n\");\n}\n}\nreturn 0;\n}\n"
        }
      ],
      "problemCount": 1
    },
    {
      "id": "ex-08",
      "number": "08",
      "title": "AVL trees",
      "shortTitle": "AVL",
      "description": "Self-balancing BST insertion, rotations, search and traversal display.",
      "source": "DSA REC 8.pdf",
      "pages": "62–72",
      "problems": [
        {
          "id": "ex08-p1",
          "label": "8",
          "title": "AVL tree insertion and display",
          "question": "Implement creation of an AVL Tree with insertion and deletion operations and display the AVL Tree.",
          "aim": "To implement creation of an AVL Tree with insertion operations, balancing rotations and traversal display.",
          "concepts": [
            "AVL tree",
            "Self-balancing tree",
            "Rotations",
            "Balance factor",
            "Height",
            "Inorder",
            "Preorder",
            "Postorder"
          ],
          "pages": "62–72",
          "code": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\nint data;\nint height;\nstruct Node *left;\nstruct Node *right;\n};\n/* Get height of a node */\nint height(struct Node *root) {\nif (root == NULL)\nreturn 0;\nreturn root->height;\n}\n/* Find maximum of two numbers */\nint max(int a, int b) {\nreturn (a > b) ? a : b;\n}\n/* Create a new node */\nstruct Node* createNode(int value) {\nstruct Node *newNode;\nnewNode = (struct Node*)malloc(sizeof(struct Node));\nif (newNode == NULL) {\nprintf(\"Memory allocation failed!\\n\");\nexit(1);\n}\nnewNode->data = value;\nnewNode->height = 1;\nnewNode->left = NULL;\nnewNode->right = NULL;\nreturn newNode;\n}\n/* Right Rotation */\nstruct Node* rightRotate(struct Node *y) {\nstruct Node *x;\nstruct Node *t;\nx = y->left;\nt = x->right;\nx->right = y;\ny->left = t;\ny->height = 1 + max(height(y->left), height(y->right));\nx->height = 1 + max(height(x->left), height(x->right));\nreturn x;\n}\n/* Left Rotation */\nstruct Node* leftRotate(struct Node *x) {\nstruct Node *y;\nstruct Node *t;\ny = x->right;\nt = y->left;\ny->left = x;\nx->right = t;\nx->height = 1 + max(height(x->left), height(x->right));\ny->height = 1 + max(height(y->left), height(y->right));\nreturn y;\n}\n/* Get Balance Factor */\nint getBalance(struct Node *root) {\nif (root == NULL)\nreturn 0;\nreturn height(root->left) - height(root->right);\n}\n/* Insert a node into AVL Tree */\nstruct Node* insert(struct Node *root, int value) {\n/* Normal BST insertion */\nif (root == NULL)\nreturn createNode(value);\nif (value < root->data) {\nroot->left = insert(root->left, value);\n}\nelse if (value > root->data) {\nroot->right = insert(root->right, value);\n}\nelse {\n/* Duplicate values are not allowed */\nreturn root;\n}\n/* Update height */\nroot->height = 1 + max(height(root->left),\nheight(root->right));\n/* Get balance factor */\nint balance = getBalance(root);\n/* LL Case */\nif (balance > 1 && value < root->left->data) {\nreturn rightRotate(root);\n}\n/* RR Case */\nif (balance < -1 && value > root->right->data) {\nreturn leftRotate(root);\n}\n/* LR Case */\nif (balance > 1 && value > root->left->data) {\nroot->left = leftRotate(root->left);\nreturn rightRotate(root);\n}\n/* RL Case */\nif (balance < -1 && value < root->right->data) {\nroot->right = rightRotate(root->right);\nreturn leftRotate(root);\n}\nreturn root;\n}\n/* Search an element */\nvoid search(struct Node *root, int value) {\nif (root == NULL) {\nprintf(\"Element not found\\n\");\nreturn;\n}\nif (root->data == value) {\nprintf(\"Element found\\n\");\nreturn;\n}\nif (value < root->data)\nsearch(root->left, value);\nelse\nsearch(root->right, value);\n}\n/* Inorder Traversal */\nvoid inorder(struct Node *root) {\nif (root != NULL) {\ninorder(root->left);\nprintf(\"%d \", root->data);\ninorder(root->right);\n}\n}\n/* Preorder Traversal */\nvoid preorder(struct Node *root) {\nif (root != NULL) {\nprintf(\"%d \", root->data);\npreorder(root->left);\npreorder(root->right);\n}\n}\n/* Postorder Traversal */\nvoid postorder(struct Node *root) {\nif (root != NULL) {\npostorder(root->left);\npostorder(root->right);\nprintf(\"%d \", root->data);\n}\n}\n/* Display all traversals */\nvoid display(struct Node *root) {\nif (root == NULL) {\nprintf(\"AVL Tree is empty\\n\");\nreturn;\n}\nprintf(\"\\nInorder : \");\ninorder(root);\nprintf(\"\\nPreorder : \");\npreorder(root);\nprintf(\"\\nPostorder : \");\npostorder(root);\nprintf(\"\\n\");\n}\n/* Free all nodes */\nvoid freeTree(struct Node *root) {\nif (root != NULL) {\nfreeTree(root->left);\nfreeTree(root->right);\nfree(root);\n}\n}\n/* Main Function */\nint main() {\nstruct Node *root = NULL;\nint choice;\nint value;\nint n;\nint i;\nwhile (1) {\nprintf(\"\\n=============================\\n\");\nprintf(\" AVL TREE MENU\\n\");\nprintf(\"=============================\\n\");\nprintf(\"1. Create AVL Tree\\n\");\nprintf(\"2. Insert\\n\");\nprintf(\"3. Search\\n\");\nprintf(\"4. Inorder Traversal\\n\");\nprintf(\"5. Preorder Traversal\\n\");\nprintf(\"6. Postorder Traversal\\n\");\nprintf(\"7. Display\\n\");\nprintf(\"8. Exit\\n\");\nprintf(\"=============================\\n\");\nprintf(\"Enter your choice: \");\nscanf(\"%d\", &choice);\nswitch (choice) {\n/* Create AVL Tree */\ncase 1:\n/* Clear existing tree */\nif (root != NULL) {\nfreeTree(root);\nroot = NULL;\n}\nprintf(\"Enter number of elements: \");\nscanf(\"%d\", &n);\nif (n <= 0) {\nprintf(\"Invalid number of elements!\\n\");\nbreak;\n}\nprintf(\"Enter %d elements:\\n\", n);\nfor (i = 0; i < n; i++) {\nscanf(\"%d\", &value);\nroot = insert(root, value);\n}\nprintf(\"AVL Tree created successfully!\\n\");\nbreak;\n/* Insert */\ncase 2:\nprintf(\"Enter value to insert: \");\nscanf(\"%d\", &value);\nroot = insert(root, value);\nprintf(\"Element inserted successfully!\\n\");\nbreak;\n/* Search */\ncase 3:\nif (root == NULL) {\nprintf(\"AVL Tree is empty\\n\");\n}\nelse {\nprintf(\"Enter value to search: \");\nscanf(\"%d\", &value);\nsearch(root, value);\n}\nbreak;\n/* Inorder */\ncase 4:\nif (root == NULL) {\nprintf(\"AVL Tree is empty\\n\");\n}\nelse {\nprintf(\"Inorder Traversal: \");\ninorder(root);\nprintf(\"\\n\");\n}\nbreak;\n/* Preorder */\ncase 5:\nif (root == NULL) {\nprintf(\"AVL Tree is empty\\n\");\n}\nelse {\nprintf(\"Preorder Traversal: \");\npreorder(root);\nprintf(\"\\n\");\n}\nbreak;\n/* Postorder */\ncase 6:\nif (root == NULL) {\nprintf(\"AVL Tree is empty\\n\");\n}\nelse {\nprintf(\"Postorder Traversal: \");\npostorder(root);\nprintf(\"\\n\");\n}\nbreak;\n/* Display */\ncase 7:\ndisplay(root);\nbreak;\n/* Exit */\ncase 8:\nfreeTree(root);\nprintf(\"Program exited successfully.\\n\");\nreturn 0;\n/* Invalid choice */\ndefault:\nprintf(\"Invalid choice! Please try again.\\n\");\n}\n}\nreturn 0;\n}\n"
        }
      ],
      "problemCount": 1
    },
    {
      "id": "ex-09",
      "number": "09",
      "title": "Single-source shortest path",
      "shortTitle": "Dijkstra",
      "description": "Dijkstra’s algorithm for shortest paths in a weighted graph.",
      "source": "DSA REC 9.pdf",
      "pages": "73–77",
      "problems": [
        {
          "id": "ex09-p1",
          "label": "9",
          "title": "Dijkstra’s algorithm",
          "question": "Write a C program to implement Dijkstra’s algorithm to find the shortest path in a weighted graph.",
          "aim": "To implement Dijkstra’s algorithm to find the shortest path in a weighted graph.",
          "concepts": [
            "Graphs",
            "Dijkstra",
            "Shortest path",
            "Weighted graph",
            "Greedy algorithm",
            "Adjacency matrix"
          ],
          "pages": "73–77",
          "code": "#include <stdio.h>\n#define MAX 10\n#define INF 9999\nvoid printPath(int parent[], int source, int vertex)\n{\nif (vertex == source)\n{\nprintf(\"%c\", 'A' + source);\nreturn;\n}\nprintPath(parent, source, parent[vertex]);\nprintf(\" -> %c\", 'A' + vertex);\n}\nvoid dijkstra(int adj[MAX][MAX], int distance[MAX][MAX], int n, int source)\n{\nint dist[MAX], visited[MAX], parent[MAX];\nint i, j, min, u;\nfor (i = 0; i < n; i++)\n{\ndist[i] = INF;\nvisited[i] = 0;\nparent[i] = -1;\n}\ndist[source] = 0;\nfor (i = 0; i < n - 1; i++)\n{\nmin = INF;\nu = -1;\nfor (j = 0; j < n; j++)\n{\nif (!visited[j] && dist[j] < min)\n{\nmin = dist[j];\nu = j;\n}\n}\nif (u == -1)\nbreak;\nvisited[u] = 1;\nfor (j = 0; j < n; j++)\n{\nif (adj[u][j] == 1 && !visited[j])\n{\nif (dist[u] + distance[u][j] < dist[j])\n{\ndist[j] = dist[u] + distance[u][j];\nparent[j] = u;\n}\n}\n}\n}\nprintf(\"\\nShortest paths from %c:\\n\", 'A' + source);\nfor (i = 0; i < n; i++)\n{\nif (dist[i] == INF)\n{\nprintf(\"To %c = No path\\n\", 'A' + i);\n}\nelse\n{\nprintf(\"\\n%c to %c = %d\",\n'A' + source, 'A' + i, dist[i]);\nif (i == source)\n{\nprintf(\" (Source)\");\n}\nelse if (parent[i] == source)\n{\nprintf(\" directly\");\n}\nelse\n{\nint path[MAX];\nint count = 0;\nint current = i;\nwhile (parent[current] != -1 &&\nparent[current] != source)\n{\npath[count++] = parent[current];\ncurrent = parent[current];\n}\nprintf(\" through \");\nfor (j = count - 1; j >= 0; j--)\n{\nprintf(\"%c\", 'A' + path[j]);\nif (j != 0)\nprintf(\" -> \");\n}\n}\nprintf(\"\\nPath: \");\nprintPath(parent, source, i);\nprintf(\"\\n\");\n}\n}\n}\nint main()\n{\nint adj[MAX][MAX];\nint distance[MAX][MAX];\nint n, i, j;\nchar source;\nprintf(\"Enter number of vertices: \");\nscanf(\"%d\", &n);\nprintf(\"\\nEnter adjacency matrix (0 or 1):\\n\");\nfor (i = 0; i < n; i++)\n{\nfor (j = 0; j < n; j++)\n{\nscanf(\"%d\", &adj[i][j]);\n}\n}\nprintf(\"\\nEnter distance for each connected edge:\\n\");\nfor (i = 0; i < n; i++)\n{\nfor (j = 0; j < n; j++)\n{\nif (adj[i][j] == 1)\n{\nprintf(\"Distance from %c to %c: \",\n'A' + i, 'A' + j);\nscanf(\"%d\", &distance[i][j]);\n}\nelse\n{\ndistance[i][j] = 0;\n}\n}\n}\nprintf(\"\\nEnter source vertex (A-%c): \", 'A' + n - 1);\nscanf(\" %c\", &source);\nint sourceIndex = source - 'A';\ndijkstra(adj, distance, n, sourceIndex);\nreturn 0;\n}\n"
        }
      ],
      "problemCount": 1
    }
  ]
};
