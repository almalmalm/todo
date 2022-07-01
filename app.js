// User enters text in input field

const userInput = document.getElementById('user-input');

// When user click on 'Add TODO' button, the text adds to todo list
const addBtn = document.getElementById('add-button');

addBtn.addEventListener('click', addItemList);

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("add-button").click();
    }
  });

const list = document.getElementById('list');

function addItemList () {
    
    const newDiv = document.createElement('div');
    const doneButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    const text = userInput.value;
    const textDiv = document.createElement('div');
    textDiv.innerHTML = text;
    textDiv.setAttribute('id', 'text');
    newDiv.setAttribute('id','list-item');
    doneButton.innerText = 'Done';
    doneButton.setAttribute('id', 'done-button');
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('id', 'delete-button')
    const divList = document.getElementById('list');
    divList.appendChild(newDiv);
    console.log(text + ' <- text is');
    newDiv.appendChild(textDiv);
    newDiv.appendChild(doneButton);
    newDiv.appendChild(deleteButton);
    console.log('Added list item');
    userInput.value = null;

    const deleteBtn = document.getElementById('delete-button');
    deleteBtn.addEventListener('click', deleteItemList);


    function deleteItemList () {
        console.log('delete');
        divList.removeChild(newDiv);
    }

    const doneBtn = document.getElementById('done-button');
    doneBtn.addEventListener('click', doneItemList);

    function doneItemList () {
        console.log('done');
        const item = document.querySelector('#text');
        item.classList.add('strike');
    }
    
    const deleteButtons = document.querySelectorAll('#delete-button');
    const doneButtons = document.querySelectorAll('#done-buttons');

    // list.addEventListener('click', btnClick);

    // function btnClick (e) {
    //     if(e.getElementById == '#text'){
    //         e.target.classList.add('strike');
    //     }
    // }
}
