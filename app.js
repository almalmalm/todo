// User enters text in input field
const userInput = document.getElementById('user-input');

// When user click on 'Add TODO' button, the text adds to todo list
const addButton = document.getElementById('add-button');

addButton.onclick = addParagraph;


function addParagraph (event) {
    let para = document.createElement('p');
    const wrapper = document.getElementById('list');
    para.innerHTML = userInput.value;
    document.body.appendChild(para);
}
