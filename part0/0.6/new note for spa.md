0.6: New note in Single page app diagram

```mermaid
    sequenceDiagram
    participant browser
    participant server
    
    Note right of browser: User submits a new note using the SPA form

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Created (no redirect)
    deactivate server

    browser->>browser: Render new note in DOM without reloading page