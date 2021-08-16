const btnCriarTarefa = document.getElementById('criar-tarefa');
function criarTarefa() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const novaTarefa = document.createElement('li');
  const input = document.getElementById('texto-tarefa').value;
  listaTarefas.appendChild(novaTarefa).innerText = input;
  document.getElementById('texto-tarefa').value = '';
}
btnCriarTarefa.addEventListener('click', criarTarefa);
// Cria uma tarefa baseada no input

// Altera a cor de fundo ao clicar sobre uma tarefa e restringe a apenas uma seleção
function trocaCor() {
  const lista = document.querySelectorAll('li');
  for (let i = 0; i < lista.length; i += 1) {
    lista[i].style.backgroundColor = '';
  }
  this.style.backgroundColor = 'rgb(128, 128, 128)';
}

// Risca a tarefa após dois cliques
function tarefaConcluida() {
  if (this.className !== 'completed') {
    this.className = 'completed';
  } else this.classList.remove('completed');
}

// Atualiza a lista de tarefas após adicionar
function atualizaLista() {
  const lista = document.querySelectorAll('li');
  for (let i = 0; i < lista.length; i += 1) {
    lista[i].addEventListener('click', trocaCor);
    lista[i].addEventListener('dblclick', tarefaConcluida);
  }
}
btnCriarTarefa.addEventListener('click', atualizaLista);
