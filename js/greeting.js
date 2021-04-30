const form = document.querySelector (".js-form"),
        input = form.querySelector ("input");
        greetings = document.querySelector (".js_greetings");

const USER_STORAGE = "Hello",
        SHOWING_CN = "show";

function saveName (text) {
    localStorage.setItem (USER_STORAGE, text);
}

function handleSubmit (event) {
    event.preventDefault ()
    const currentValue = input.value;
    paintGreeting (currentValue);
    saveName (currentValue);
}

function askForName () {
    form.classList.add (SHOWING_CN);
    form.addEventListener ('submit', handleSubmit)
}

function paintGreeting (text) {
    greetings.innerText = `Hello, ${text}!`;
    greetings.classList.add (SHOWING_CN);
    form.classList.remove (SHOWING_CN);
}

function loadName () {
    const localUser = localStorage.getItem (USER_STORAGE);
    if (localUser === null) {
        askForName ();
    } else {
        paintGreeting (localUser)
    }
}

function init () {
    loadName ();
}

init ();