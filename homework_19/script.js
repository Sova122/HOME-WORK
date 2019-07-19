"use strict";
// Первое задание

function isNumberInRange(a  = 22)  {
    if (a > 0 && a < 10) console.log(true);
    else console.log(false);  
} 

isNumberInRange();

// Второе задание

function isEven(с=1) {
    if( с%2 === 0 ){
        return true;
    }else
    return false;
}

console.log(isEven());

// Третье задание


let value = +prompt('value?', '');
switch(value){
    case 0:
        alert('0');
        break;

    case 1:
        alert('1');
        break;

    case 2:
    case 3:
        alert('2,3');
        break;
}

// Четвертое задание



function min(a, b){
    return( a < b ? a : b );
}
console.log(min(3,5));
console.log(min(5,-1));

    



