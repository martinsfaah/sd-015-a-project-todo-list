let oList = document.createElement('ol');

function createOl() {
  document.querySelector('#lista-tarefas-section').appendChild(oList);
  oList.id = 'lista-tarefas';

  // oList.innerHTML = 'lista lista'
}

function createList() {
  const inputPlace = document.querySelector('#texto-tarefa');

  let buttonInput = document.querySelector('#criar-tarefa');
  buttonInput.addEventListener('click', function () {
    const lists = document.createElement('li');
    lists.innerHTML = inputPlace.value;
    lists.classList.add('item-List');

    document.querySelector('#lista-tarefas').appendChild(lists);

    inputPlace.value = '';
    // localStorage.setItem('list', )
  });
}

function selectItens() {
  oList.addEventListener('click', function marker(event) {
    let oListArray = document.querySelector('#lista-tarefas').children;

    for (let idx = 0; idx < oListArray.length; idx += 1) {
      oListArray[idx].classList.remove('marked');
    }
    event.target.classList.add('marked');
  });
}

function completedItens() {
  oList.addEventListener('dblclick', function (clicado) {
    const compl = clicado;

    compl.target.classList.toggle('completed');
  });
}

function eraseList() {
  let eraseButton = document.querySelector('#apaga-tudo');
  eraseButton.addEventListener('click', function () {
    let eachItem = document.querySelectorAll('.item-List');

    for (let idx2 = 0; idx2 < eachItem.length; idx2 += 1) {
      eachItem[idx2].remove();
      localStorage.clear();
    }
  });
}

function eraseCompleted() {
  let eraseCompleted = document.querySelector('#remover-finalizados');
  eraseCompleted.addEventListener('click', function erasing() {
    let completedItem = document.querySelectorAll('.completed');

    for (let idx3 = 0; idx3 < completedItem.length; idx3 += 1) {
      completedItem[idx3].remove();
      // if (completedItem[idx3].classList.includes('completed')) {
      // }
    }
  });
}

function saveLocalStorage() {

  const buttonSave = document.querySelector('#salvar-tarefas');
  buttonSave.addEventListener('click', function () {

    let saveItens = document.querySelector('#lista-tarefas').children;

    for (let idx4 = 0; idx4 < saveItens.length; idx4 += 1) {
    

      localStorage.setItem('li' + [idx4], saveItens[idx4].innerHTML);
      localStorage.setItem('class' + [idx4], saveItens[idx4].className);
      console.log(saveItens[idx4]);
    }

    console.log(document.querySelector('#lista-tarefas').children);
    // console.log(localStorage);
  });
}


function loadStorage() {
  for (let idx5 = 0; idx5 < localStorage.length/2; idx5 += 1) {
    let loadList = document.createElement('li');
    loadList.innerHTML = localStorage.getItem("li" + idx5);
    loadList.classList = localStorage.getItem("class" + idx5);


    document.querySelector('#lista-tarefas').appendChild(loadList);
  }
}


// Remover item por item
// let eraseButton = document.querySelector('#apaga-tudo');
// eraseButton.addEventListener('click', function eraseList() {
//   let eachItem = document.querySelector('.item-List');
//   eachItem.remove();
// });

createOl();
createList();
selectItens();
completedItens();
eraseCompleted();
eraseList();
saveLocalStorage();
loadStorage();
eraseList();
