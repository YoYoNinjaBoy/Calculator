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

function operate(num1,operator,num2){
    return operator(num1,num2);
};


function updateDisplay(value){
    const display=document.getElementById('display');
    display.innerText+=value;
    console.log(value);
    return value;

}; 
function clear(){

};

function equals(){
    const display=document.getElementById('display');
    display.innerText=operate()
}