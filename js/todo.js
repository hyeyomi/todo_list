const toDoForm = document.getElementById("todo-form");
const toDoInput =document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const todoBtns = document.querySelector("#todo-btn");
const todoContainer = document.querySelector("#todo-container");

let toDos = []; // 업데이트
let isClick = false;

const TODOS_KEY  ="todo";

function saveTODo() {
    localStorage.setItem("todo", JSON.stringify(toDos));
}

function deleteToDO(event){
    const li = event.target.parentElement; // 타겟은 눌러지는 버튼,버튼의 부모인 li를 지우는 것
    li.remove(); 
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    saveTODo();
    }

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText =newToDo.text;  
    const button = document.createElement("button");
    button.innerText ='❌';
    button.addEventListener("click", deleteToDO);
    li.appendChild(span); // li의 자식으로 들어감
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newToDo, 
        id:Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveTODo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function handleTodoBtn(event){
    if(!isClick){
    todoContainer.classList.remove("hidden");
    isClick = true;
 }
    else{
        todoContainer.classList.add("hidden");
        isClick = false;
    }
}

todoBtns.addEventListener("click", handleTodoBtn);

