// User enters text in input field
const userInput = document.getElementById('user-input');

// When user click on 'Add TODO' button, the text adds to todo list
const addButton = document.getElementById('add-button');

addButton.onclick = createListItem;
// возвращает null, понять почему
const doneButton = document.getElementById('done-button');
const deleteButton = document.getElementById('delete-button');

deleteButton.onclick = deleteListItem;

function createListItem (event) {
    const newDiv = document.createElement('div');
    const doneButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    newDiv.innerHTML = userInput.value;
    newDiv.setAttribute('id','list-item');
    doneButton.innerText = 'Done';
    doneButton.setAttribute('id', 'done-button');
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('id', 'delete-button')
    const divList = document.getElementById('list');
    divList.appendChild(newDiv);
    divList.appendChild(doneButton);
    divList.appendChild(deleteButton);
}

function deleteListItem (event) {
    const realDiv = document.getElementById('list-item');
    realDiv.remove();
    alert('removeEvent');
}
