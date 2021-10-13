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
    const display=document.getElementById('display');
    array=display.innerText.split(/(?=[\+\-\*\/])|(?<=[\+\-\*\/])/g)
    if (array[1]==='+'){
        op=add;
    }
    
    
    else if(array[1]==='-'){
        op=subtract;
    }
    else if(array[1]==='*'){
        op=multiply;
    }
    else if (array[1]==='/'){
        op=divide;
    }
    else{alert(array)}
    num1=parseFloat(array[0]);
    num2=parseFloat(array[2]);
    display.innerText=operate(op,num1,num2)
    
};
const equalsBtn=document.getElementById('equalsBtn');
equalsBtn.addEventListener('click',function(){equals()
    
});