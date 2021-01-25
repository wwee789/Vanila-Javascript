const NUMBER = document.querySelectorAll(".number"),
    RESULT = document.querySelector(".result"),
    EQUAL = document.querySelector(".equal"),
    OPERATOR = document.querySelectorAll(".operator"),
    RESET = document.querySelector(".reset");

let inputNumber = "",
    nextNumber = "",
    currentValue = 0,
    resultValue = 0,
    operator = "";


function reset(){
    currentValue =0 ;
    inputNumber = "" ;
    nextNumber = "";
    RESULT.innerText = "0";
    resultValue = 0;
    operator="";
};

function handleOperator(event){
    const operatorBtn = event.target;
    const operatorValue = operatorBtn.value;
    console.log(operator, operatorValue)
    inputNumber = "";
    nextNumber = "";
    

    switch(operator){
        case "":
            operator = operatorValue;
        case "+":
            resultValue = currentValue + resultValue ;
            operator = operatorValue;
            RESULT.innerText = `${resultValue}`;
            console.log(resultValue, currentValue);
            break;
        case "-":
                resultValue = resultValue - currentValue;
                operator = operatorValue;
                RESULT.innerText = `${resultValue}`;
                console.log(resultValue, currentValue);
                break;
        case "*":
                resultValue = resultValue * currentValue;
                operator = operatorValue;
                RESULT.innerText = `${resultValue}`;
                console.log(resultValue, currentValue);
                break;
        case "/":
                resultValue = resultValue / currentValue;
                operator = operatorValue;
                RESULT.innerText = `${resultValue}`;
                console.log(resultValue, currentValue);
                break;
    }
    console.log(operatorValue, operator)
};




function numberClick(event){
            const numberBtn=event.target;
            const numberValue = numberBtn.value;
            nextNumber = `${numberValue}`;
            inputNumber = `${inputNumber}${nextNumber}`;
            RESULT.innerText = inputNumber;
            currentValue = parseInt(inputNumber);
            console.log(currentValue)
};

NUMBER.forEach(function (numberBtn) {
    numberBtn.addEventListener("click", numberClick);
});
OPERATOR.forEach(function (operatorBtn) {
    operatorBtn.addEventListener("click", handleOperator);
});

RESET.addEventListener("click",reset);
EQUAL.addEventListener("click", handleOperator);