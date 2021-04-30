const toDoForm = document.querySelector (".js-toDoForm"),
        toDoInput = toDoForm.querySelector ("input"),
        toDoList = document.querySelector (".js-toDoList");

const TODOS_LS = "toDos";


let toDos = [];

function removeToDo (event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild (li);
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !==parseInt(li.id);
    }); 
    toDos = cleanToDos;
    saveToDo ();
}

function saveToDo () {
    localStorage.setItem (TODOS_LS, JSON.stringify (toDos));
}

function paintToDo (text) {
    const li = document.createElement ("li");
    const btn = document.createElement ("button");
    const span = document.createElement ("span");
    const newIds = toDos.length + 1;
    btn.innerText = "🌸";
    btn.addEventListener ("click", removeToDo)
    span.innerText = text;
    li.appendChild (btn);
    li.appendChild (span);
    toDoList.appendChild (li);
    li.id = newIds;
    const toDoObj = {
        text: text,
        id: newIds
    } 
    toDos.push (toDoObj);
    saveToDo ();
}

function handleSubmit (event) {
    event.preventDefault ();
    const currentValue = toDoInput.value;
    paintToDo (currentValue);
    toDoInput.value = "";
}

function loadToDos () {
    const loadedToDos = localStorage.getItem (TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach (function (toDos){
            paintToDo (toDos.text);
        })
    }
}

function init () {
    loadToDos ();
    toDoForm.addEventListener ("submit", handleSubmit)
}

init ();