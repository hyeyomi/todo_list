const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const todoBtn = document.querySelector("#todo-btn");
 
//문자열 오타를 막기위해 대문자 변수 지정해서 사용
const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY ="username";

 function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
 }

function paintGreeting(username){
    const date = new Date();
    if(date.getHours() < 11){
    greeting.innerText = `Good morning, ${username}!`;}
    else if(date.getHours() > 12 || date.getHours < 19){
    greeting.innerText = `Good afternoon, ${username}!` }
    else if(date.getHours() >= 19 || date.getHours <= 24){
    greeting.innerText = `Good evening, ${username}!`;
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoBtn.classList.remove(HIDDEN_CLASSNAME);
}

 const savedUsername = localStorage.getItem(USERNAME_KEY);

 if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
 }
 else{
    paintGreeting(savedUsername);
 }




