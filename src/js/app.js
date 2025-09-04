// ======================= CLASSES =======================

class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.isCompleted = false;
    }

    toggleComplete() {
        this.isCompleted = !this.isCompleted;
    }
}

class TaskManager {
    constructor(api) {
        this.api = api;
    }

    addTask(title, description) {
        const task = new Task(title, description);
        this.api.createTask(task);
    }

    removeTask(index) {
        this.api.deleteTask(index);
    }

    toggleTask(index) {
        const task = this.api.getTasks()[index];
        task.toggleComplete();
        this.api.updateTask(index, task);
    }

    getTasks() {
        return this.api.getTasks();
    }
}

// ======================= FAKE API =======================

const FakeAPI = (() => {
    let tasksDB = [];

    return {
        getTasks: () => [...tasksDB],
        createTask: (task) => tasksDB.push(task),
        updateTask: (index, task) => { tasksDB[index] = task },
        deleteTask: (index) => { tasksDB.splice(index, 1) }
    };
})();

// ======================= DOM ELEMENTS =======================

const taskForm = document.getElementById('taskForm');
const tasksList = document.getElementById('tasks');
const manager = new TaskManager(FakeAPI);

// ======================= RENDERING FUNCTION =======================

function renderTasks() {
    tasksList.innerHTML = '';

    manager.getTasks().forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-list__item';

        li.innerHTML = `
            <div>
                <div class="task-list__title">${task.title}</div>
                <div class="task-list__desc">${task.description}</div>
            </div>
            <div>
                <button class="toggle-btn">${task.isCompleted ? 'Undo' : 'Done'}</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        li.querySelector('.toggle-btn').addEventListener('click', () => {
            manager.toggleTask(index);
            renderTasks();
        });

        li.querySelector('.delete-btn').addEventListener('click', () => {
            manager.removeTask(index);
            renderTasks();
        });

        tasksList.appendChild(li);
    });
}

// ======================= FORM SUBMIT =======================

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = taskForm.title.value.trim();
    const description = taskForm.description.value.trim();

    if (title === '') return;

    manager.addTask(title, description);
    taskForm.reset();
    renderTasks();
});

// Initial render
renderTasks();
