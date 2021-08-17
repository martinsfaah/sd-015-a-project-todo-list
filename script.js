const taskList = document.querySelector('#lista-tarefas');
const addTaskBtn = document.querySelector('#criar-tarefa');
const clearListBtn = document.querySelector('#apaga-tudo');
const clearCompletedBtn = document.querySelector('#remover-finalizados');
const saveTasksBtn = document.querySelector('#salvar-tarefas');
const moveUpBtn = document.querySelector('#mover-cima');
const moveDwnBtn = document.querySelector('#mover-baixo');
const removeBtn = document.querySelector('#remover-selecionado');
let fullTaskLi = document.querySelectorAll('ol#lista-tarefas li');

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
  });
}

function toggleTaskCompletion(whichTask) {
  whichTask.addEventListener('dblclick', (task) => {
    task.target.classList.toggle('completed');
  });
}

function moveTaskUp(selectedTask) {
  const previousTask = selectedTask.previousElementSibling;
  const currTask = selectedTask;
  const currentTaskProps = {
    classes: selectedTask.className,
    currValue: selectedTask.innerText,
  };
  if (previousTask !== null) {
    const previousTaskProps = {
      classes: previousTask.className,
      prevValue: previousTask.innerText,
    };
    currTask.className = previousTaskProps.classes;
    currTask.innerText = previousTaskProps.prevValue;
    previousTask.className = currentTaskProps.classes;
    previousTask.innerText = currentTaskProps.currValue;
  } else {
    console.log('Cant move that task up');
  }
}

function moveTaskDown(selectedTask) {
  const nextTask = selectedTask.nextElementSibling;
  const currTask = selectedTask;
  const currentTaskProps = {
    classes: selectedTask.className,
    currValue: selectedTask.innerText,
  };
  if (nextTask !== null) {
    const nextTaskProps = {
      classes: nextTask.className,
      nextValue: nextTask.innerText,
    };
    currTask.className = nextTaskProps.classes;
    currTask.innerText = nextTaskProps.nextValue;
    nextTask.className = currentTaskProps.classes;
    nextTask.innerText = currentTaskProps.currValue;
  } else {
    console.log('Cant move that task down');
  }
}

addTaskBtn.addEventListener('click', () => {
  const taskToAddText = document.querySelector('#texto-tarefa');
  if (taskToAddText.value !== '') {
    const taskLi = document.createElement('li');
    taskLi.innerHTML = taskToAddText.value;
    taskLi.className = 'task';
    taskList.appendChild(taskLi);
    taskToAddText.value = '';
    makeTasksClicable(taskLi);
    toggleTaskCompletion(taskLi);
    fullTaskLi = document.querySelectorAll('ol#lista-tarefas li');
  } else {
    alert('Tarefa invállida');
  }
});

clearListBtn.addEventListener('click', () => {
  taskList.innerHTML = '';
});

clearCompletedBtn.addEventListener('click', () => {
  const actualList = document.querySelectorAll('ol#lista-tarefas li');
  for (const comp of actualList) {
    if (comp.classList.contains('completed')) {
      comp.parentNode.removeChild(comp);
    }
  }
});

saveTasksBtn.addEventListener('click', () => {
  if (taskList.childElementCount > 0) {
    localStorage.clear();
    localStorage.setItem('savedTaskList', JSON.stringify(taskList.innerHTML));
    console.log('List saved to local storage');
  } else {
    localStorage.clear();
    console.log('Local storage cleared');
  }
});

moveUpBtn.addEventListener('click', () => {
  const currentTask = document.querySelector('.selected');
  if (currentTask !== null) {
    moveTaskUp(currentTask);
  } else {
    console.log('No task selected to move up');
  }
});

moveDwnBtn.addEventListener('click', () => {
  const currentTask = document.querySelector('.selected');
  if (currentTask !== null) {
    moveTaskDown(currentTask);
  } else {
    console.log('No task selected to move down');
  }
});

removeBtn.addEventListener('click', () => {
  const currentTask = document.querySelector('.selected');
  currentTask.parentElement.removeChild(currentTask);
});

window.onload = function restoreSavedList() {
  if (localStorage.length > 0) {
    taskList.innerHTML = JSON.parse(localStorage.getItem('savedTaskList'));
    fullTaskLi = document.querySelectorAll('ol#lista-tarefas li');
    fullTaskLi.forEach((element) => {
      makeTasksClicable(element);
      toggleTaskCompletion(element);
    });
  }
};
