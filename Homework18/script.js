"use strict";

// Первое задание

let a = '1';
if(a !== '1'){
    console.log('Неверно');
} else {
    console.log('Верно');
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

let b = 1 ;
a = 11;
console.log(a, b);

(a > 3 && a < 12 || b >= 7 && b < 15) ? 
console.log('Верно') : console.log('Неверно');


// ПЯТОЕ ЗАДАНИЕ

 let month = prompt(' Чтобы узнать время года введите текущий месяц от 1 до 12', '');

 //зима

 if( month >= 1 && month <= 2 ){
     alert('Текущие время года - зима, ');
 } else if(month == 12){
    alert('Текущие время года - зима', '');
 }

//весна

 if( month >= 3 && month <= 5 ){
    alert('Текущие время года - весна', '');
}

//лето

if( month >= 6 && month <= 8 ){
    alert('Текущие время года - лето', '');
}

//осень

if( month >= 9 && month <= 11 ){
    alert('Текущие время года - осень', '');

}
//Ошибка


if (month > 12 || month < 1){
    alert ('Будьте внимательны при вводе числа!', '');
}
 
// Запуск цикла снова после ошибки

month = prompt(' Повторный ввод текущего месяца от 1 до 12', '');

if( month >= 1 && month <= 2 ){
    alert('Текущие время года - зима, ');
} else if(month == 12){
   alert('Текущие время года - зима', '');
}

//весна

if( month >= 3 && month <= 5 ){
   alert('Текущие время года - весна', '');
}

//лето

if( month >= 6 && month <= 8 ){
   alert('Текущие время года - лето', '');
}

//осень

if( month >= 9 && month <= 11 ){
   alert('Текущие время года - осень', '');

}
 








