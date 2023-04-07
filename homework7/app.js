const datePicker = document.getElementById('date-picker');
const taskList = document.getElementById('task-list');
const addTaskForm = document.getElementById('add-task-form');
const newTaskDescription = document.getElementById('new-task-description');

let tasks = [];

function loadTasks() {
  const savedTasks = localStorage.getItem(datePicker.value);
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  } else {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        tasks = data.find(item => item.date === datePicker.value)?.list || [];
        localStorage.setItem(datePicker.value, JSON.stringify(tasks));
      });
  }
}

function displayTasks() {
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" ${task.status === 'Done' ? 'checked' : ''}>
      <span>${task.description}</span>
    `;
    taskList.appendChild(li);
  });
}

function addTask(e) {
  e.preventDefault();
  if (!newTaskDescription.value) return;
  tasks.push({ description: newTaskDescription.value, status: 'Not Done' });
  localStorage.setItem(datePicker.value, JSON.stringify(tasks));
  newTaskDescription.value = '';
  displayTasks();
}

datePicker.addEventListener('change', () => {
  loadTasks();
  displayTasks();
});

addTaskForm.addEventListener('submit', addTask);
