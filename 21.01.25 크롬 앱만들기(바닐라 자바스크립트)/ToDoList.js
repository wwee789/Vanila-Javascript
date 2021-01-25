const taskForm = document.querySelector(".js-taskForm"),
    taskInput = taskForm.querySelector("input"),
    pendingList = document.querySelector(".js-pending"),
    finishedList = document.querySelector(".js-finished");

const pendings = "pending",
    finisheds = "finished";

let tasks = [],
    newtasks = [];

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
}


function finishTasks(event){
    const btn = event.target;
    const li = btn.parentNode;
    finishedList.appendChild(li);
    btn.innerText = "O";
    const newTasks = tasks.filter(function(task){
        return task.id == parseInt(li.id);
    });
    const cleanTasks = tasks.filter(function(task){
        return task.id !== parseInt(li.id);
    });
    tasks = cleanTasks;
    pushTasks = newTasks[0];
    newtasks.push(pushTasks);
    saveTasks();


};

function deleteTasks(event) {
    const btn = event.target;
    const li = btn.parentNode;
    if(li.parentNode == pendingList){
        pendingList.removeChild(li)
    }else if(li.parentNode == finishedList){
        finishedList.removeChild(li);
    }
    const cleanTasks = tasks.filter(function(task){
        return task.id !== parseInt(li.id);
    });
    const cleanTasks2 = newtasks.filter(function(task){
        return task.id !== parseInt(li.id);
    })
    tasks = cleanTasks;
    newtasks = cleanTasks2;
    saveTasks();
};

function loadTask() {
    const loadedpending = localStorage.getItem(pendings);
    const loadedfinished = localStorage.getItem(finisheds);

    if(loadedpending !== null){
        const parsedpending = JSON.parse(loadedpending);
        parsedpending.forEach(function(tasks){
            paintTask(tasks.text);
        });
    };
    if(loadedfinished !== null){
        const parsedfinished = JSON.parse(loadedfinished);
        parsedfinished.forEach(function(tasks){
            refresh(tasks.text);
        })
    }
};

function saveTasks() {
    localStorage.setItem(pendings, JSON.stringify(tasks));
    localStorage.setItem(finisheds, JSON.stringify(newtasks));
};

function paintTask(text) {
    const li = document.createElement("li"),
        span = document.createElement("span"),
        delBtn = document.createElement("button"),
        newId = tasks.length +1 ,
        goBtn = document.createElement("button");

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

function handleSubmit(event){
    event.preventDefault();
    const currentValue = taskInput.value;
    paintTask(currentValue);
    taskInput.value=""
};


function init() {
    taskForm.addEventListener("submit", handleSubmit);
    loadTask();
};


init();