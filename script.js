const selectBody = document.querySelector('body');
const createMain = document.createElement('main');
createMain.className = 'borda';
selectBody.appendChild(createMain);

// Requisito 1 Criando o HEADER

function CreateHeader () {  
  const creatHeader = document.createElement('header');
  const createTitle = document.createElement('h1');
  createTitle.innerHTML = "Minha Lista de Tarefas"
  creatHeader.appendChild(createTitle);
  createMain.appendChild(creatHeader);
}
CreateHeader();


// Requisito 2  Adicionando paragrafo

function CreateP (){
  const setHeader = document.getElementsByTagName('header')[0];
  const creatTagP = document.createElement('p');
  creatTagP.id = "funcionamento"
  creatTagP.innerHTML = "Clique duas vezes em um item para marcá-lo como completo";
  setHeader.appendChild(creatTagP);
}
CreateP();

// Requisito 3 Criando o input

function CreateInput (){
  const createSec = document.createElement('section');
  createMain.appendChild(createSec);
  createSec.id ="input-section"
  const createInput = document.createElement('input');
  createInput.setAttribute('type', 'text');
  createInput.id = "texto-tarefa"
  createSec.appendChild(createInput);
}
CreateInput();


// Requisito 4 Criando Lista

function CreateLista() {
  const createLista = document.createElement('ol');
  createLista.id = "lista-tarefas"
  createMain.appendChild(createLista);
}
CreateLista();

//Requisito 5 - 6 Criando Botão

function createButton(){
  const setSection = document.querySelector('#input-section')
  const button = document.createElement('button');
  button.id = "criar-tarefa";
  button.innerHTML = "Adicionar"
  setSection.appendChild(button);
}
createButton();

function addTask (){
  const setList = document.querySelector('ol');
  const creatLi = document.createElement('li')
  const targetInput = document.querySelector('input');
  setList.appendChild(creatLi)
  creatLi.innerText = targetInput.value;
  setList.appendChild(creatLi);
  targetInput.value = '';
}

const setButton = document.querySelector('#criar-tarefa')
setButton.addEventListener('click', addTask);
// setButton.addEventListener('keypress', addTask);

// Requisito 7 click muda o background

function paintLiGray (event) {
  removeColor();
  const backGrayColor = event.target
  backGrayColor.className = 'colorGray';
}

const setList2 = document.querySelector('ol');
setList2.addEventListener('click', paintLiGray);

//Requisito 8 RESETANDO O selecionado

const clickListItem = document.getElementsByTagName('li');
function removeColor() {
  for (let index = 0; index < clickListItem.length; index += 1) {
    clickListItem[index].classList.remove('colorGray')
  }
}

//Requisito 9 duplo clik para dar Check

function chekItenList (event){
  const li = event;
  if (li.target.className !== 'completed') {
    li.target.className = 'completed';
  } else {
    li.target.className = '';
  }
}
setList2.addEventListener('dblclick', chekItenList);

//Requisito 10 botão clear

const sectionButtons = document.createElement('section');

const buttonResetList = document.createElement('button');

function CreateresetButton (){
  createMain.appendChild(sectionButtons);
  buttonResetList.className = "clearAll"
  buttonResetList.id = "apaga-tudo"
  buttonResetList.innerHTML = "Apagar Lista"
  sectionButtons.appendChild(buttonResetList);
}
CreateresetButton();

const butonDelet = document.getElementById('apaga-tudo');
const ListOlId = document.getElementById('lista-tarefas')

function clearAllList() {
  ListOlId.innerHTML = "";
}
butonDelet.addEventListener('click', clearAllList);

// Requisito 11 botão remover Finalizaddos

function createButonRemoveFinished (){
  const removeFineshd = document.createElement('button');
  removeFineshd.className = 'clearComplet'
  removeFineshd.id = "remover-finalizados"
  removeFineshd.innerHTML = "Limpa completos"
  sectionButtons.appendChild(removeFineshd);
}
createButonRemoveFinished();

const buttonFinished = document.getElementById('remover-finalizados');

function deleteFineshadTask (){
  const completedTask = document.getElementsByClassName('completed');
  for (let index = completedTask.length - 1; index >= 0; index-=1) {
    completedTask[index].remove();
  }
}
buttonFinished.addEventListener('click', deleteFineshadTask);

// referencia código https://cursos.alura.com.br/forum/topico-excluir-todos-os-elementos-com-uma-classe-159597


