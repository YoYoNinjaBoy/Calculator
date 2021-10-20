const display=document.getElementById('display');
const display2=document.getElementById('display2');
let equalsPressed=false;
let num1=undefined;
let num2=undefined;
display.innerText=0


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
    if (display.innerText==='0'){
        display.innerText=value;
    }
    else{
    display.innerText+=value;
    }
}; 
function clear(){
    display.innerText='';
};
function trueClear(){
    display.innerText='0';
    display2.innerText='';
    num1=undefined;
    num2=undefined;
    operator=undefined;
    equalsPressed=false;
}
function migrateDisplay(operator){
display2.textContent=display.textContent+operator;
}

const equalsBtn=document.getElementById('equalsBtn');
equalsBtn.addEventListener('click',function(){
    if(equalsPressed===true){

    }
    else if(display.innerText===''){
        
    }
    else{
    equals();
    equalsPressed=true;
    }
});

const addBtn=document.getElementById('plusBtn');
addBtn.addEventListener('click',function(){
    if (num1===undefined){
        num1=parseFloat(display.innerText)
        operator=add;
        migrateDisplay('+');
        clear();
    }
    else if(equalsPressed===true){
        equalsPressed=false;
        operator=add;
        migrateDisplay('+');
        clear();
    }
    else if (isNaN(num1)===false && isNaN(num2)===true){
        operator=add;
        display2.innerText=display2.innerText.replace(/[-x/]/g,'+');
    }
    else{
        equals();
        migrateDisplay('+');
        clear();
        operator=add;
    }
}
)

const subBtn=document.getElementById('minusBtn');
subBtn.addEventListener('click',function(){
    if (num1===undefined){
        num1=parseFloat(display.innerText)
        operator=subtract;
        migrateDisplay('-');
        clear();
    }
    else if(equalsPressed===true){
        equalsPressed=false;
        operator=subtract;
        migrateDisplay('-');
        clear();
    }
    else if (isNaN(num1)===false && isNaN(num2)===true){
        operator=subtract;
        display2.innerText=display2.innerText.replace(/[+x/]/g,'-');
    }
    else{
        equals();
        migrateDisplay('-');
        clear();
        operator=subtract;
    }
}
)

const divBtn=document.getElementById('divideBtn');
divBtn.addEventListener('click',function(){
    if (num1===undefined){
        num1=parseFloat(display.innerText)
        operator=divide;
        migrateDisplay('/');
        clear();
    }
    else if(equalsPressed===true){
        equalsPressed=false;
        operator=divide;
        migrateDisplay('/');
        clear();
    }
    else if (isNaN(num1)===false && isNaN(num2)===true){
        operator=divide;
        display2.innerText=display2.innerText.replace(/[+x-]/g,'/');
    }
    else{
        equals();
        migrateDisplay('/');
        clear();
        operator=divide;
    }
}
)

const mulBtn=document.getElementById('timesBtn');
mulBtn.addEventListener('click',function(){
    if (num1===undefined){
        num1=parseFloat(display.innerText)
        operator=multiply;
        migrateDisplay('x');
        clear();
    }
    else if(equalsPressed===true){
        equalsPressed=false;
        operator=multiply;
        migrateDisplay('x');
        clear();
    }
    else if (isNaN(num1)===false && isNaN(num2)===true){
        operator=multiply;
        display2.innerText=display2.innerText.replace(/[+/-]/g,'x');
    }
    else{
        equals();
        migrateDisplay('x');
        clear();
        operator=multiply;
    }
}
)

const clrBtn=document.getElementById('clearBtn');
clrBtn.addEventListener('click',function(){
    trueClear();
})
function equals(){
    num2=parseFloat(display.innerText);
    migrateDisplay('');
    display.innerText=operate(operator,num1,num2);
    num1=parseFloat(display.innerText);
    num2=undefined;
};