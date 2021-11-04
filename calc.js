//declarations
const display=document.getElementById('display');
const display2=document.getElementById('display2');
let equalsPressed=false;
let num1=undefined;
let num2=undefined;
let displayInitialized=false;
let operationPerformed=false;
display.innerText='0'

//functions
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
    if (displayInitialized===false){
        x=value.toString();
        display.innerText=x;
    }
    else{
        x+=value.toString();
        display.innerText=parseFloat(x).toLocaleString()

    }
    //displayInitialized===false ? display.innerText=value : x+=value, display.innerText=x.toLocaleString();
    displayInitialized=true;
}; 
function clear(){
    displayInitialized=false;
    operationPerformed=true;
};
function trueClear(){
    display.innerText='0';
    display2.innerText='';
    num1=undefined;
    num2=undefined;
    operator=undefined;
    equalsPressed=false;
    displayInitialized=false;
    operationPerformed=false;
}
function migrateDisplay(operator){
    display2.textContent=display.textContent+operator;
}
function equals(){
    if(displayInitialized===true){
        x=display.innerText.replace(',','');
        num2=parseFloat(x);
        migrateDisplay('');
        num1=operate(operator,num1,num2);
        display.innerText=num1.toLocaleString();
        //holds together the fabric of spacetime
        if(num1===Infinity){
            alert('You have destroyed the fabric of space-time');
            trueClear();
            }
        num1=undefined;
        num2=undefined;
        displayInitialized=false;
    }
};
function opEquals(){
    if(displayInitialized===true){
        x=display.innerText.replace(',','');
        num2=parseFloat(x);
    migrateDisplay('');
    num1=operate(operator,num1,num2);
    display.innerText=num1.toLocaleString();
    num2=undefined;
    displayInitialized=false;
    //holds together the fabric of spacetime
    if(num1===Infinity){
        alert('You have destroyed the fabric of space-time');
        trueClear();
        }
}
}


//buttons
const equalsBtn=document.getElementById('equalsBtn');
equalsBtn.addEventListener('click',function(){
    if(isNaN(num1)===false && isNaN(num2)===true){
    equals();
    }
});

const addBtn=document.getElementById('plusBtn');
addBtn.addEventListener('click',function(){
    if (num1===undefined){
        x=display.innerText.replace(',','');
        num1=parseFloat(x);
        operator=add;
        migrateDisplay('+');
        clear();
    }
    else if (isNaN(num1)===false && isNaN(num2)===true){
            opEquals();
            operator=add;
            migrateDisplay('+');
            clear();
    }
}
)

const subBtn=document.getElementById('minusBtn');
subBtn.addEventListener('click',function(){
    if (num1===undefined){
        x=display.innerText.replace(',','');
        num1=parseFloat(x);
        operator=subtract;
        migrateDisplay('-');
        clear();
    }
    else if (isNaN(num1)===false && isNaN(num2)===true ){
        opEquals();
        operator=subtract;
        migrateDisplay('-');
        clear();
    
    }
}
)

const divBtn=document.getElementById('divideBtn');
divBtn.addEventListener('click',function(){
    if (num1===undefined){
        x=display.innerText.replace(',','');
        num1=parseFloat(x);
        operator=divide;
        migrateDisplay('/');
        clear();
    }
    
    else if (isNaN(num1)===false && isNaN(num2)===true){
        opEquals();
        operator=divide;
        migrateDisplay('/');
        clear();
    }
    
}
)

const mulBtn=document.getElementById('timesBtn');
mulBtn.addEventListener('click',function(){
    if (num1===undefined){
        x=display.innerText.replace(',','');
        num1=parseFloat(x);
        operator=multiply;
        migrateDisplay('x');
        clear();
    }
    
    else if (isNaN(num1)===false && isNaN(num2)===true){
        opEquals();
        operator=multiply;
        migrateDisplay('x');
        clear();
    }
}  
)

const clrBtn=document.getElementById('clearBtn');
clrBtn.addEventListener('click',function(){
    trueClear();
})

