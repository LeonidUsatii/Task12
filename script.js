// - Дописать реализацию приложения TodoList: добавить кнопку, которая перечёркивает дело
//(делает его сделанным);

// (Advanced ***)
// - Дописать стилистику приложения по своему вкусу;

const task = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskListOl = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

taskListOl.addEventListener('click', deleteTask);

function addTask() {
  const taskName = task.value.trim();
  if (taskName) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${taskName}</span>`;
    const button = document.createElement('button');
    button.innerHTML = `Button`;
    taskListOl.append(li);
    li.append(button);
  }
  task.value = '';
}

function deleteTask(taskListOl) {
  taskListOl.target.previousSibling.style.textDecoration = 'line-through';
}
