const userInput = document.querySelector('input');
const addBtn = document.querySelector('.add');
const list = document.querySelector('.list')

addBtn.addEventListener('click', addTask);
let doneButtons = document.querySelectorAll('.done');
let delButtons = document.querySelectorAll('.delete');
userInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
     addTask();
  }
});

function addTask () {
  if(userInput.value !== '') {
    createTask();
    userInput.value = null;
  }
}

function doneTask (event) {
  doneButtons = document.querySelectorAll('.done');
  let parent = event.target.parentNode;
  let childs = parent.childNodes;
  childs[0].classList.toggle('strike');
}

function deleteTask(event) {
  delButtons = document.querySelectorAll('.delete');
  let parent = event.target.parentNode;
  parent.remove();
}

function createTask () {
  let div = document.createElement('div');
  let p = document.createElement('p');
  let btnDel = document.createElement('button');
  let btnDone = document.createElement('button');

  createDiv(div);
  createParagraph(div, p);
  createDoneBtn(div, btnDone);
  createDeleteBtn(div, btnDel);

  let doneButtons = document.querySelectorAll('.done');
  doneButtons.forEach((btn)=> {
    btn.addEventListener('click', doneTask);
  });

  let delButtons = document.querySelectorAll('.delete');
  delButtons.forEach((btn)=> {
    btn.addEventListener('click', deleteTask);
  });
}

function createDiv (div) {
  list.appendChild(div);
  div.classList.add('item');
}

function createParagraph (div, p) {
  div.appendChild(p);
  p.classList.add('text');
  p.innerText = userInput.value;
}

function createDoneBtn (div, btnDone) {
  div.appendChild(btnDone);
  btnDone.classList.add('done');
  btnDone.innerText = 'Done';
}

function createDeleteBtn (div, btnDel) {
  div.appendChild(btnDel);
  btnDel.classList.add('delete');
  btnDel.innerText = 'Delete';
}