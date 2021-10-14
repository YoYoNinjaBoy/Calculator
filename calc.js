const display=document.getElementById('display');
const display2=document.getElementById('display2')
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
    display.innerText+=value;

}; 
function clear(){
    display.innerText='';
};
function trueClear(){
    display.innerText='';
    display2.innerText='';
}
function migrateDisplay(operator){
display2.textContent+=display.textContent+operator;
}

const equalsBtn=document.getElementById('equalsBtn');
equalsBtn.addEventListener('click',function(){
    equals();
});
const addBtn=document.getElementById('plusBtn');
addBtn.addEventListener('click',function(){
    if (isNaN(num1)===false && isNaN(num2)===true){
        equals();
        num1=parseFloat(display.innerText);
        migrateDisplay('+');
        clear();
    }
    
    else if((isNaN(num1)===false && isNaN(num2)===false)){
        equals();
        num1=parseFloat(display.innerText);
        migrateDisplay('+');
        clear();
    }
    else{
        num1=parseFloat(display.innerText);
        migrateDisplay('+');
        clear();
    }
    operator=add;
}
)

const subBtn=document.getElementById('minusBtn');
subBtn.addEventListener('click',function(){
    if (isNaN(num1)===false && isNaN(num2)===true){
        equals();
        num1=parseFloat(display.innerText);
        migrateDisplay('-');
        clear();
    }
    
    else if((isNaN(num1)===false && isNaN(num2)===false)){
        equals();
        num1=parseFloat(display.innerText);
        migrateDisplay('-');
        clear();
    }
    else{
        num1=parseFloat(display.innerText);
        migrateDisplay('-');
        clear();
    }
    operator=subtract;
}
)
const divBtn=document.getElementById('divideBtn');
divBtn.addEventListener('click',function(){
    if (isNaN(num1)===false && isNaN(num2)===true){
        equals();
        num1=parseFloat(display.innerText);
        migrateDisplay('/');
        clear();
    }
    
    else if((isNaN(num1)===false && isNaN(num2)===false)){
        equals();
        num1=parseFloat(display.innerText);
        migrateDisplay('/');
        clear();
    }
    else{
        num1=parseFloat(display.innerText);
        migrateDisplay('/');
        clear();
    }
    operator=divide;
}
)

const mulBtn=document.getElementById('timesBtn');
mulBtn.addEventListener('click',function(){
    if (isNaN(num1)===false && isNaN(num2)===true){
        equals();
        num1=parseFloat(display.innerText);
        migrateDisplay('x');
        clear();
    }
    
    else if((isNaN(num1)===false && isNaN(num2)===false)){
        equals();
        num1=parseFloat(display.innerText);
        migrateDisplay('x');
        clear();
    }
    else{
        num1=parseFloat(display.innerText);
        migrateDisplay('x');
        clear();
    }
    operator=multiply;
}
)

const clrBtn=document.getElementById('clearBtn');
clrBtn.addEventListener('click',function(){
    trueClear();
})
function equals(){
    num2=parseFloat(display.innerText);
    migrateDisplay('=');
    clear();
    num1=operate(operator,num1,num2);
    display.innerText=num1;
};