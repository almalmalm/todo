// User enters text in input field

const userInput = document.getElementById('user-input');

// When user click on 'Add TODO' button, the text adds to todo list
const addBtn = document.getElementById('add-button');

addBtn.addEventListener('click', addItemList);

function addItemList () {
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
    newDiv.appendChild(doneButton);
    newDiv.appendChild(deleteButton);
    console.log('Added list item');
}

const deleteBtn = document.getElementById('delete-button');

deleteBtn.addEventListener('click', deleteItemList);

function deleteItemList () {
    console.log('delete');
}

// function createListItem (event) {
//     const newDiv = document.createElement('div');
//     const doneButton = document.createElement('button');
//     const deleteButton = document.createElement('button');
//     newDiv.innerHTML = userInput.value;
//     newDiv.setAttribute('id','list-item');
//     doneButton.innerText = 'Done';
//     doneButton.setAttribute('id', 'done-button');
//     deleteButton.innerText = 'Delete';
//     deleteButton.setAttribute('id', 'delete-button')
//     const divList = document.getElementById('list');
//     divList.appendChild(newDiv);
//     newDiv.appendChild(doneButton);
//     newDiv.appendChild(deleteButton);
// }
