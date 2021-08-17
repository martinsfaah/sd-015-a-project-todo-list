const taskButton = document.getElementById('criar-tarefa');
const cleanButton = document.getElementById('apaga-tudo');

function makeSelected(event) {
  const addSelectedClass = event.target;
  const selectedItemList = document.querySelector('.selected');
  addSelectedClass.classList.add('selected');
  addSelectedClass.style.backgroundColor = 'rgb(128,128,128)';

  if (selectedItemList) {
    selectedItemList.classList.remove('selected');
    selectedItemList.style.backgroundColor = '';
  }
}

function completedTask(event) {
  const cutItemList = event.target;

  if (!cutItemList.classList.contains('completed')) {
    cutItemList.classList.add('completed');
  } else {
    cutItemList.classList.remove('completed');
  }
}

function addToList() {
  const getInput = document.querySelector('#texto-tarefa');
  const newItemList = document.createElement('li');
  newItemList.innerHTML = getInput.value;
  newItemList.classList.add('list-item');
  document.querySelector('#lista-tarefas').appendChild(newItemList);
  newItemList.addEventListener('click', makeSelected);
  newItemList.addEventListener('dblclick', completedTask);
  document.getElementById('texto-tarefa').value = '';
}

taskButton.addEventListener('click', addToList);

function deleteButton() {
  const getList = document.querySelectorAll('li');
  for (let index = 0; index < getList.length; index += 1) {
    getList[index].remove();
  }
}
cleanButton.addEventListener('click', deleteButton);
