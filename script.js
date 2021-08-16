let botao = document.querySelector("#criar-tarefa");

botao.addEventListener("click", event => {

  event.preventDefault();

  const textoInput = document.querySelector("#texto-tarefa").value;

  if (textoInput === "") {
    return alert("Digite sua tarefa por favor")
  }

  limparInput();
  criarLi(textoInput);


});

// Atribui uma string vazia no input
function limparInput() {

  document.querySelector("#texto-tarefa").value = "";
}

// Capitura ol, cria li e adiciona a li criada como filha da ol
function criarLi(textoInput) {
  const ol = document.querySelector("#lista-tarefas");
  const li = document.createElement("li")

  li.innerText = textoInput;

  ol.appendChild(li);


  li.addEventListener("click", liSelecionada);
  li.addEventListener("dblclick", riscarLi);
}

//Alterar a cor ao clicar em um item da lista 
function liSelecionada(event) {

  let tagTask = document.querySelector(".liSelecionada");

  if (tagTask) {
    tagTask.classList.remove("liSelecionada");
  }

  event.target.classList.add("liSelecionada");

}

function riscarLi(event) {

  if (event.target.classList.contains("completed")) {

    event.target.classList.remove("completed");
  } else {

    event.target.classList.add("completed");
  }

}
