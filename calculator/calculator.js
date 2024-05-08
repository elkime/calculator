const buttonNumbers = document.getElementsByName("data-number");
const buttonOpera = document.getElementsByName("data-opera");
const buttonEqual = document.getElementsByName("data-equal")[0];
const buttonDelete = document.getElementsByName("data-delete")[0];
console.log(buttonDelete)
let result = document.getElementById('result');
let currentOperation = '';  
let previousOperation = ''; 
let operation = undefined;

buttonNumbers.forEach(function(button){
    button.addEventListener('click',function(){
        addNumber(button.innerText);
        
    })
});

buttonOpera.forEach(function(button){
    button.addEventListener('click', function(){
        selectOperation(button.innerText);
    })
});

buttonEqual.addEventListener('click', function(){
    calculate();
    updateDisplay();
});

buttonDelete.addEventListener('click', function(){
    clear();
    updateDisplay();  
});

function selectOperation(op){ 
    if(currentOperation === '')return;
    if(currentOperation !== ''){
        calculate()
    }
    operation = op.toString();
    previousOperation = currentOperation;
    currentOperation = '';
}

function calculate(){
    let calculo;
    const before = parseFloat(previousOperation);
    const actual = parseFloat(currentOperation);
    if(isNaN(before) || isNaN(actual)) return;
    switch(operation){
        case '+':
            calculo = before + actual;
            break;
        case '-':
            calculo = before - actual;
            break;
        case 'X':
            calculo = before * actual;
            break;
        case '/':
            calculo = before / actual;
            break;
        default:
            return;

    }
    currentOperation = calculo; 
    operation = undefined;
    previousOperation = ''; 

}

function addNumber(number){
    currentOperation = currentOperation.toString() + number.toString();
    updateDisplay();
}

function clear(){
    currentOperation = '';  
    previousOperation = ''; 
    operation = undefined;

}

function updateDisplay(){
    result.value = currentOperation;
}

clear();



