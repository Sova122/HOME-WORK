"use strict";

// Первое задание

let a = '1';

if (a === '1') {
    console.log('Верно');
} else {
    console.log('Неверно');
}

a = 1;

if (a === '1') {
    console.log('Верно');
} else {
    console.log('Неверно');
}


     
 
 // Второе задание

 let item = prompt('Чему равна переменная item?', '' );
 if(item != true){
    console.log('Верно');
} else {
    console.log('Неверно');
} 


let access;
item = prompt('Чему равна переменная item?', '' );
access = (item != true) ? true: false;



// Третье задание

 a = prompt('Чему равна переменная a?', '');
if (a > 0 && a < 4){
    console.log('Верно');
} else {
    console.log('Неверно');
} 



//Четвертое задание


a = 1;
let b = 11 ;

(a > 3 && a < 12 || b >= 7 && b < 15) ? 
console.log('Верно') : console.log('Неверно');


// Пятое задание

 let month = prompt(' Чтобы узнать время года введите текущий месяц от 1 до 12', '');

 if( month >= 1 && month <= 2 ){
     alert('Текущие время года - зима, ');
} else if(month == 12){
    alert('Текущие время года - зима', '');
} else if( month >= 3 && month <= 5 ){
    alert('Текущие время года - весна', '');
} else if( month >= 6 && month <= 8 ){
    alert('Текущие время года - лето', '');
} else if( month >= 9 && month <= 11 ){
    alert('Текущие время года - осень', '');
} else{
    alert ('Будьте внимательны при вводе числа!', '');
}

// Шестое задание



let c = 0;

while ( c < 100 ) {
    if (c % 2 == 0 && c != 0) {
        console.log(c);
    }
    c++;
}


for ( let i = 0; i < 100; i++ ) {
    if (i % 2 == 0 && i != 0) {
        console.log(i);
    }
    i++;
}


 

