const taskForm = document.querySelector(".js-taskForm"),
    taskInput = taskForm.querySelector("input"),
    pendingList = document.querySelector(".js-pending"),
    finishedList = document.querySelector(".js-finished");

const pendings = "pending",
    finisheds = "finished";

let tasks = [];
let newtasks = [];


//아래로 가는거 눌렀을 때
function finishTasks(event) {
    const btn = event.target;
    const li = btn.parentNode;
    finishedList.appendChild(li);
    btn.innerText = "O"
    const newTasks = tasks.filter(function(task){
        return task.id == parseInt(li.id);
    });
    const cleanTasks = tasks.filter(function(task){
        return task.id !== parseInt(li.id);
    });
    tasks = cleanTasks;
    abc = newTasks[0];
    newtasks.push(abc)
    saveTasks();
};

function deleteTasks(event){
    const btn = event.target;
    const li = btn.parentNode;
    if(li.parentNode == pendingList){
    pendingList.removeChild(li);
    }else if(li.parentNode == finishedList){
        finishedList.removeChild(li);
    }
    const cleanTasks = tasks.filter(function(task){
        return task.id !== parseInt(li.id)
    });
    const CleanTasks2 = newtasks.filter(function(task){
        return task.id !== parseInt(li.id)
    });
    tasks = cleanTasks;
    newtasks = CleanTasks2;
    saveTasks();
};


function saveTasks() {
    localStorage.setItem(pendings, JSON.stringify(tasks));
    localStorage.setItem(finisheds, JSON.stringify(newtasks));
};

function paintTask(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const newId = tasks.length + 1; 
    const goBtn = document.createElement("button");

    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteTasks);
    goBtn.innerText = "▼";
    goBtn.addEventListener("click", finishTasks);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(goBtn);
    li.id = newId;
    pendingList.appendChild(li);
    const taskObj = {
        text : text,
        id : newId
    };
    tasks.push(taskObj);
    saveTasks();
};

function refresh(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const newId = newtasks.length + 1; 
    const goBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteTasks);
    goBtn.innerText = "O";
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(goBtn);
    li.id = newId;
    finishedList.appendChild(li);
    const taskObj = {
        text : text,
        id : newId
    };
    newtasks.push(taskObj);
    saveTasks();
};

function handleSubmit(event){
    event.preventDefault();
    const currentValue = taskInput.value;
    paintTask(currentValue);
    taskInput.value = "";
}

function loadTask() {
    const loadedpending = localStorage.getItem(pendings);
    const loadedfinished = localStorage.getItem(finisheds);
    if(loadedpending !== null){
        const parsedTasks = JSON.parse(loadedpending);
        parsedTasks.forEach(function(tasks){
            paintTask(tasks.text);
        });
    };
    if(loadedfinished !==null){
        const parsedTasks2 = JSON.parse(loadedfinished);
        parsedTasks2.forEach(function(tasks){
            refresh(tasks.text);
        });
    };
}

function init(){
    loadTask();
    taskForm.addEventListener("submit", handleSubmit);
}

init();