const userInput = document.querySelector('#addToDo');
const addBtn = document.querySelector('#addBtn');
const nameButton = document.querySelector('#nameButton');
let toDoList = document.querySelector('#toDoList');
let vorname = prompt("Wie heißt du?");
const firstLetter = vorname.slice(0,1);
firstCapitalLetter = firstLetter.toUpperCase();  // capital letter
const listName = document.querySelector('h1'); 


function setName() {
  vorname = firstCapitalLetter+(vorname.slice(1).toLowerCase());
  listName.textContent = vorname +', das ist deine stark ausbaufähige To-do-Liste.';
}

document.addEventListener('DOMContentLoaded', setName);


function updateName() { 
  vorname = prompt("Wie heißt du?"); 
  listName.textContent = vorname +', das ist deine stark ausbaufähige To-do-Liste.';
}

nameButton.addEventListener('click', updateName); 


function addToDo() {
    var newEntry = document.createElement('li');
    newEntry.textContent = document.querySelector("#addToDo").value;
    toDoList.appendChild(newEntry);
  } 

  addBtn.addEventListener('click', addToDo); 