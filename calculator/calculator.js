const buttonNumbers = document.getElementsByName("data-number");
const buttonOpera = document.getElementsByName("data-opera");
const buttonEqual = document.getElementsByName("data-equal");
const buttonDelete = document.getElementsByName("data-delete");
let result = document.getElementById('result');

buttonNumbers.forEach(function(button){
    button.addEventListener('click',function(){
        addNumber(button.innerText);
    })
});

buttonOpera.forEach(function(button){
    button.addEventListener('click', function(){
        electOperation(button.innerText);
        })
})

buttonEqual.addEventListener('click', function(){
    calculate();
    updateDisplay();
})

buttonDelete.addEventListener('click', function(){
    clear();
    updateDisplay();
})


//console.log();
