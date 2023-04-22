const input = document.querySelector('input');
const equalsBtn = document.querySelector('#equals');
equalsBtn.addEventListener('click', calculate);
function display(value){
    input.value += value;
}
function Clear(){
    input.value = '';
}
function Delete(){
    input.value = input.value.slice(0, -1);
}
function calculate(){
    const expression = input.value;
    const result = eval(expression);
    input.value = result;
}

