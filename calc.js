const display=document.getElementById('display');
function add(x,y){
    return x+y;
};

function subtract(x,y){
    return x-y;
};

function multiply(x,y){
    return x*y;
};

function divide(x,y){
    return x/y;
};
function operate(operator,num1,num2){
return operator(num1,num2);
};


function updateDisplay(value){
    const display=document.getElementById('display');
    display.innerText+=value;

}; 
function clear(){

};

function equals(){
    array=display.innerText.split(/(?=[\+\-\*\/])|(?<=[\+\-\*\/])/g)
    if (array[0==='-']){
        array[0].concat(array[1])
    }
    if (array[1]==='+'){
        operator=add;
    }
    
    
    else if(array[1]==='-'){
        operator=subtract;
    }
    else if(array[1]==='*'){
        operator=multiply;
    }
    else if (array[1]==='/'){
        operator=divide;
    }
    else{alert(array)}
    num1=parseFloat(array[0]);
    num2=parseFloat(array[2]);
    display.innerText=operate(operator,num1,num2)
    
};
const equalsBtn=document.getElementById('equalsBtn');
equalsBtn.addEventListener('click',function(){equals()
    });
const addBtn=document.getElementById('plusBtn');
addBtn.addEventListener('click',function(){
    if (
        display.innerText.includes('\+')===true ||
        display.innerText.includes('\-')===true ||
        display.innerText.includes('\*')===true ||
        display.innerText.includes('\/')===true){
    equals()
    }
    updateDisplay("+")}
)

const subBtn=document.getElementById('minusBtn');
subBtn.addEventListener('click',function(){
    if (
        display.innerText.includes('\+')===true ||
        display.innerText.includes('\-')===true ||
        display.innerText.includes('\*')===true ||
        display.innerText.includes('\/')===true){
    equals()
    }
    updateDisplay("-")}
)

const divBtn=document.getElementById('divideBtn');
divBtn.addEventListener('click',function(){
    if (
        display.innerText.includes('\+')===true ||
        display.innerText.includes('\-')===true ||
        display.innerText.includes('\*')===true ||
        display.innerText.includes('\/')===true){
    equals()
    }
    updateDisplay("/")}
)

const mulBtn=document.getElementById('timesBtn');
mulBtn.addEventListener('click',function(){
    if (
        display.innerText.includes('\+')===true ||
        display.innerText.includes('\-')===true ||
        display.innerText.includes('\*')===true ||
        display.innerText.includes('\/')===true){
    equals()
    }
    updateDisplay("*")}
)