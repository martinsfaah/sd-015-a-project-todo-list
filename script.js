const taskList = document.getElementById('lista-tarefas');

// Adiciona uma tarefa
function addNewTask() {
  const newTaskItem = document.createElement('li');
  const taskText = document.getElementById('texto-tarefa');
  newTaskItem.innerText = taskText.value;
  taskList.appendChild(newTaskItem);
  taskText.value = '';
}

const addTaskButton = document.getElementById('criar-tarefa');
addTaskButton.addEventListener('click', addNewTask);

// Apaga todos os itens da lista de tarefas
// Consulta: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const deleteTasksButton = document.getElementById('apaga-tudo');

function deleteTasks() {
  deleteTasksButton.addEventListener('click', () => {
    const getTasks = document.querySelectorAll('li');
    for (let i = 0; i < getTasks.length; i += 1) {
      getTasks[i].remove();
    }
  });
}

deleteTasks();

// Altera background-color do item selecionado
function taskRemoveBgColor() {
  const getTasks = document.querySelectorAll('li');
  for (let i = 0; i < getTasks.length; i += 1) {
    getTasks[i].style.backgroundColor = '';
  }
}

function taskChangeBgColor(task) {
  taskRemoveBgColor();
  const clickedTask = task.target;
  clickedTask.style.backgroundColor = 'rgb(128,128,128)';
}

taskList.addEventListener('click', taskChangeBgColor);

// Adiciona um risco ao elemento selecionado, indicando que a tarefa foi cumprida
// Um salve pro Pedro Guarize que me iluminou nessa aqui
function addCompletedTask(task) {
  const taskTarget = task.target;
  if (taskTarget.className !== 'completed') {
    taskTarget.className = 'completed';
    taskTarget.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  } else {
    taskTarget.style.textDecoration = '';
    taskTarget.className = '';
  }
}

taskList.addEventListener('dblclick', addCompletedTask);

// Remover tarefas finalizadas
const deleteCompletedTasksButton = document.getElementById('remover-finalizados');

function deleteCompletedTasks() {
  deleteCompletedTasksButton.addEventListener('click', () => {
    const getTasks = document.querySelectorAll('.completed');
    for (let i = 0; i < getTasks.length; i += 1) {
      getTasks[i].remove();
    }
  });
}

deleteCompletedTasks();
