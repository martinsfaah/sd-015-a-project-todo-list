const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ol")
const listElements = list.children;

button.addEventListener("click", addFromInputToList);

function addFromInputToList(event) {
    let item = input.value;
    let listItem = document.createElement("li");
    listItem.innerHTML = item;
    list.appendChild(listItem)
    list.addEventListener("click", colorChanger)
    input.value = "";
}


function colorChanger(event) {
    let actualListElement = event.target

    for(index = 0; index < listElements.length; index += 1) {
        listElements[index].style.backgroundColor = "white"
    }
    
    if (actualListElement.style.backgroundColor === 'rgb(128,128,128)') {
        actualListElement.removeAttribute("style")
    } else {
        actualListElement.style.backgroundColor = 'rgb(128,128,128)'
    }
    
}

for (index = 0; index < listElements.length; index += 1) {
    listElements[index].addEventListener("click", selectedClass)
}

function selectedClass(event) {

}