function insertHeader() {
    let getBody = document.querySelector('body');
    let titulo = document.createElement('header');
    titulo.innerText = 'Minha Lista de Tarefas';
    titulo.innerHTML;
    getBody.appendChild(titulo);
}
insertHeader();

function insertP() {
    let getBody = document.querySelector('body');
    let paragrafo = document.createElement('p');
    paragrafo.id = ('funcionamento');
    paragrafo.innerText = ('Clique duas vezes em um item para marcá-lo como completo');
    paragrafo.innerHTML;
    getBody.appendChild(paragrafo);
}
insertP();

function insertInput() {
    let getBody = document.querySelector('body');
    let divPaiAddTaref = document.createElement('div');
    divPaiAddTaref.id = ('divPaiAddTarefa');
    divPaiAddTaref.className = ('estDivpaiAddTarefa ');
    getBody.appendChild(divPaiAddTaref);

    let body = document.querySelector('body');
    let input = document.createElement('input');
    input.id = ('texto-tarefa');
    input.className = ('estInput');
    input.innerHTML;
    divPaiAddTaref.appendChild(input);

}
insertInput();

function btnCrTarefa() {
    let getDvPai = document.getElementById('divPaiAddTarefa');
    let btnCriaTarefa = document.createElement('button');
    btnCriaTarefa.id = ('criar-tarefa');
    btnCriaTarefa.className = ('estBtnAdd');
    btnCriaTarefa.innerText = ('Adicionar');
    btnCriaTarefa.innerHTML;
    getDvPai.appendChild(btnCriaTarefa);

}
btnCrTarefa();

function addOl() {
    let getBody = document.querySelector('body');
    let ol = document.createElement('ol');
    ol.id = ('lista-tarefas');
    ol.innerHTML;
    getBody.appendChild(ol);

    // Captura texto da ul e adiciona a lista //
    let tagInput = document.getElementById('texto-tarefa');
    let botao = document.getElementById('criar-tarefa');


    botao.addEventListener('click', function(event) {

        ol = ol + "<li>" + tagInput.value + "</li>";
        document.getElementById("lista-tarefas").innerHTML = ol;
        tagInput.value = '';
    });
}
addOl();