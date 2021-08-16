const lista = document.getElementById('lista-tarefas');
const inputTarefa = document.getElementById('texto-tarefa');
const botaoCriar = document.getElementById('criar-tarefa');
const botaoApagar = document.getElementById('apaga-tudo');
const botaoFinalizados = document.getElementById('remover-finalizados');
const botaoSalvar = document.getElementById('salvar-tarefas');

function adicionarEventos(elemento, evento, funcao) {
  if (elemento.length > 0) {
    for (let index = 0; index < elemento.length; index += 1) {
      elemento[index].addEventListener(evento, funcao);
    }
  } else {
    elemento.addEventListener(evento, funcao);
  }
}

function fundoCinza(evento) {
  if (document.querySelector('.selected')) {
    document.querySelector('.selected').classList.remove('selected');
  }
  evento.target.classList.add('selected');
}

function linhaRiscada(evento) {
  const alvo = evento.target;
  if (alvo.className.includes('completed')) {
    alvo.classList.remove('completed');
  } else {
    alvo.classList.add('completed');
  }
}

function criarElementosLista() {
  const elemento = document.createElement('li');
  elemento.innerText = inputTarefa.value;
  adicionarEventos(elemento, 'click', fundoCinza);
  adicionarEventos(elemento, 'dblclick', linhaRiscada);
  lista.appendChild(elemento);
  inputTarefa.value = '';
}

function apagarElementosLista() {
  const itens = lista.children;
  for (let index = 0; index < itens.length; index += 0) {
    lista.removeChild(itens[0]);
  }
}

function apagarElementosFinalizados() {
  const itens = document.getElementsByClassName('completed');
  for (let index = 0; index < itens.length; index += 0) {
    lista.removeChild(itens[0]);
  }
}

function salvarItens() {
  if (localStorage.length !== 0) {
    localStorage.clear();
  }
  const listaAtual = document.getElementsByTagName('li');
  for (let index = 0; index < listaAtual.length; index += 1) {
    let valor = listaAtual[index].innerText;
    valor += ';; ';
    valor += listaAtual[index].className;
    localStorage.setItem(index, valor);
  }
}

function recarregarElementosSalvos() {
  const tamanhoStorage = localStorage.length;
  for (let index = 0; index < tamanhoStorage; index += 1) {
    const valor = localStorage.getItem(index).split(';; ');
    const elemento = document.createElement('li');
    elemento.innerText = valor[0];
    elemento.className = valor[1];
    adicionarEventos(elemento, 'click', fundoCinza);
    adicionarEventos(elemento, 'dblclick', linhaRiscada);
    lista.appendChild(elemento);
  }
}

function carregarPagina() {
  adicionarEventos(botaoCriar, 'click', criarElementosLista);
  adicionarEventos(botaoApagar, 'click', apagarElementosLista);
  adicionarEventos(botaoFinalizados, 'click', apagarElementosFinalizados);
  adicionarEventos(botaoSalvar, 'click', salvarItens);

  recarregarElementosSalvos();
}

window.onload = carregarPagina;
