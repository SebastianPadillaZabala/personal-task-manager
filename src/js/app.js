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
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
  }

  toggleTask(index) {
    this.tasks[index].toggleComplete();
  }

  getTasks() {
    return this.tasks;
  }
}

// ======================= DOM ELEMENTS =======================

const taskForm = document.getElementById('taskForm');
const tasksList = document.getElementById('tasks');
const manager = new TaskManager();

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
        <button onclick="toggleTask(${index})">${task.isCompleted ? 'Undo' : 'Done'}</button>
        <button onclick="removeTask(${index})">Delete</button>
      </div>
    `;

    tasksList.appendChild(li);
  });
}

// ======================= HELPER FUNCTIONS =======================

function toggleTask(index) {
  manager.toggleTask(index);
  renderTasks();
}

function removeTask(index) {
  manager.removeTask(index);
  renderTasks();
}

// ======================= EVENT LISTENERS =======================

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = taskForm.title.value;
  const description = taskForm.description.value;

  const newTask = new Task(title, description);
  manager.addTask(newTask);

  taskForm.reset();
  renderTasks();
});
