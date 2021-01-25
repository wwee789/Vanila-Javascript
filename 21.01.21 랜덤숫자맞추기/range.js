const setRange = document.querySelector(".js-setrange"),
    rangeForm = document.querySelector(".js-range"),
    getNumber = document.querySelector(".getNumber"),
    guess = document.querySelector(".guess"),
    btn = document.querySelector(".play"),
    winLose = document.querySelector(".winlose");

let rangeInput = rangeForm.querySelector("input"),
    rangeOutput = document.querySelector("output");
    
rangeOutput.innerHTML = rangeInput.value

function refresh() {
    const setting = localStorage.getItem("range");
    rangeInput.value = setting;
    rangeOutput.innerHTML = setting;
};

function setValue(){
    localStorage.setItem("range", rangeInput.value);
};

function handleChange(){
    rangeOutput.innerHTML = rangeInput.value;
    setValue();
};

function handleClick(){
    const min = 0;
    const max = rangeOutput.value;
    let random = Math.floor(Math.random() * (max -min+1))+min;
    guess.innerText = `You chose : ${getNumber.value}, the machine chose : ${random}`;
    if(getNumber.value == random){
        winLose.innerText = "You Win!!!!!!!!!";
    }else {
        winLose.innerText = "You Lose!!!!!!!!";
    }
};


function init() {
    rangeInput.addEventListener("input", handleChange);
    btn.addEventListener("click", handleClick);
};

refresh();
init();