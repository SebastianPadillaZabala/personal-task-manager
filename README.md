# Task Manager

A simple personal task manager web application built with **HTML5, SCSS, and JavaScript**.  
The app allows users to **view**, **add**, **complete**, and **delete tasks**.

---

## 📁 Project Structure

task-manager/
│
├─ index.html # Main HTML file
├─ styles.scss # SCSS source file
├─ styles.css # Compiled CSS file
├─ src/
│ └─ js/
│ └─ app.js # JavaScript logic
├─ tasks-mongo.json # Example NoSQL database (MongoDB simulation)
├─ db.sql # SQL schema example
└─ README.md # Project documentation

---

## 🏗️ HTML & SCSS

- **HTML5**: Semantic structure using `<header>`, `<main>`, `<section>`, `<form>`, `<ul>`.
- **SCSS**:
  - Variables for colors, spacing, and border-radius.
  - Mixins for reusable card and button styles.
  - BEM methodology for class naming (`task-list__item`, `task-form__input`).
  - Responsive design using Flexbox and media queries.
  - Card layout for form and task list with proper spacing.

---

## 💻 JavaScript

- **Classes & OOP**:
  - `Task`: Represents a single task with properties `title`, `description`, `isCompleted`.
  - `TaskManager`: Manages the list of tasks, with methods to add, remove, toggle, and retrieve tasks.
- **Principles Applied**:
  - **Single Responsibility**: `Task` handles data, `TaskManager` handles task logic.
  - **Clean Code**: Functions are small, descriptive, and organized.
- **Fake API**:
  - Simulates database operations with an in-memory array `tasksDB`.
  - CRUD functions: `createTask`, `getTasks`, `updateTask`, `deleteTask`.
- **Rendering**:
  - `renderTasks()` updates the DOM based on the current task list.
  - Buttons for "Done"/"Undo" and "Delete" actions interact with the fake API.

---

## 🗄️ Database Simulation

### SQL Example
```sql
CREATE TABLE Tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### MongoDB Example
```
[
  {
    "_id": "64f1a2bc1234567890abcdef",
    "title": "Finish homework",
    "description": "Math exercises and reading",
    "isCompleted": false,
    "createdAt": "2025-09-03T23:21:00Z"
  },
  {
    "_id": "64f1a2bc1234567890abcdea",
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "isCompleted": true,
    "createdAt": "2025-09-03T23:25:00Z"
  }
]
```