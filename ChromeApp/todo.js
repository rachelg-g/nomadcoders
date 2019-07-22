const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
    // console.log(event.target);
    // console.dir(event.target);
    // console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    // toDo를 깨끗하게 만들기 / filter 기억하기
    const cleanToDos = toDos.filter(function(toDo) { 
        // console.log(toDo.id, li.id);
        return toDo.id !== parseInt(li.id); // parseInt => string을 num로 바꿔줌
    });
    // console.log(cleanToDos)
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // JSON.stringify() => object를 string으로 바꿔줌
}

function paintToDo(text) {
    // console.log(text)
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos(); // push 한 후에 호출해야함 안그럼 빈 값이 저장됨
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        // console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        // console.log(parsedToDos);
        parsedToDos.forEach(function(toDo) { // forEach 기억하기
            // console.log(toDo.text);
            paintToDo(toDo.text);
        });
    }
}
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();