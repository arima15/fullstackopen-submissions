0.4: New note diagram

```mermaid

flowchart TD
    A[User on homepage] --> B[Navigates to notes section]
    B --> C[Browser requests HTML\nGET /notes]
    C --> D[Server responds with HTML]
    D --> E[Browser parses HTML]
    E --> F[Browser fetches CSS\nGET /main.css]
    F --> G[Server responds with CSS]
    G --> H[Browser fetches JS\nGET /main.js]
    H --> I[Server responds with JS]
    I --> J[Browser executes JS]
    J --> K[Browser requests JSON data\nGET /data.json]
    K --> L[Server responds with JSON]
    L --> M[Browser renders notes using JS callback]
