let taskList = document.querySelector('#lista-tarefas');
const addTaskBtn = document.querySelector('#criar-tarefa');
const clearListBtn = document.querySelector('#apaga-tudo');
let fullTaskLi = document.querySelectorAll('ol#lista-tarefas li');

addTaskBtn.addEventListener('click', () => {
  const taskToAddText = document.querySelector('#texto-tarefa');
  if (taskToAddText.value != '') {
  const taskLi = document.createElement('li');
  taskLi.innerHTML = taskToAddText.value;
  taskLi.className = 'task';
  taskList.appendChild(taskLi);
  taskToAddText.value = '';
  makeTasksClicable(taskLi);
  toggleTaskCompletion(taskLi);
  fullTaskLi = document.querySelectorAll('ol#lista-tarefas li');
  } else {
    alert("Tarefa invállida");
  }
});

// Create a function to reset the task selection
function clearTasksSelection() {
  for (let li = 0; li < fullTaskLi.length; li += 1) {
    fullTaskLi[li].classList.remove('selected');
  }
}

function makeTasksClicable(whichTask) {
  whichTask.addEventListener('click', (task) => {
      const thisTaskClasses = task.target.classList;
      if (!thisTaskClasses.contains('selected')) {
        clearTasksSelection();
        thisTaskClasses.add('selected');
      }
    })
}

function toggleTaskCompletion(whichTask) {
  whichTask.addEventListener('dblclick', (task) => {
    task.target.classList.toggle("completed");
  })
}

clearListBtn.addEventListener('click', () => {
  taskList.innerHTML = '';
});
