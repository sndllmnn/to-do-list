const userInput = document.querySelector('#addToDo');
const addBtn = document.querySelector('#addBtn');
const nameButton = document.querySelector('#nameButton');
let toDoList = document.querySelector('#toDoList');
let vorname = prompt("Wie heißt du?");


function setName() {
  const listName = document.querySelector('h1'); //funktioniert nicht global, wieso?
  listName.textContent = vorname +', das ist deine stark ausbaufähige To-do-Liste.';
}

function updateName() { //funktioniert nicht
  const listName = document.querySelector('h1'); 
  listName.textContent = vorname +', das ist deine stark ausbaufähige To-do-Liste.';
}

document.addEventListener('DOMContentLoaded', setName);
nameButton.addEventListener('click', updateName); //funktioniert nicht


function addToDo() {
    var newEntry = document.createElement('li');
    newEntry.textContent = document.querySelector("#addToDo").value;
    document.body.appendChild(newEntry);
  } 

  addBtn.onclick = function() {addToDo()}; //funktioniert nicht
  addBtn.addEventListener('click', addToDo); //funktioniert nicht