const header = document.getElementsByTagName('header');
const newSelector = (qttOfSelector, element, selector, selectorName) => {
  for (let index = 0; index < qttOfSelector; index += 1) {
    if (typeof (element.length) === 'undefined') {
      element.setAttribute(selector, selectorName);
    } else {
      element[index].setAttribute(selector, selectorName);
    }
  }
};
const createNewElement = (element, elementContent, location, qttofElements) => {
  for (let index = 0; index < qttofElements; index += 1) {
    const newElement = document.createElement(element);
    newElement.innerHTML = elementContent;
    if (typeof (location.length) === 'undefined') {
      location.appendChild(newElement);
      // newSelector(qttofElements, location.appendChild(newElement), selector, selectorName);
    } else {
      location[index].appendChild(newElement);
      // newSelector(qttofElements, location[index].appendChild(newElement), selector, selectorName);
    }
  }
};

// #REQ 1
createNewElement('h1', 'Minha Lista de Tarefas', header, 1);

// #REQ 2
createNewElement('p', 'Clique duas vezes em um item para marcá-lo como completo', header, 1);
const pHeader = document.querySelector('header p');
newSelector(1, pHeader, 'id', 'funcionamento');

