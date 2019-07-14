"use strict";

// Первое задание


 let a = prompt('Чему равна переменная a?', '');
 if(a === '1'){
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

// Вроде сокращенной
/*let access;
let item = prompt('Чему равна переменная item?', '' );
access = (item != true) ? true: false;*/



// Третье задание
 a = prompt('Чему равна переменная a?', '');
if (a > 0 && a < 4){
    console.log('Верно');
} else {
    console.log('Неверно');
} 



//Четвертое задание

 a = prompt( 'Укажите значение а', '');
let message1 = ( a > 3 && a < 12 ) ? 'Верно': 'Переход на воод b'
alert(message1);
let b = prompt( 'Введите b', '');
let message2 = ( b>= 7 && b<15  ) ? 'Верно': 'Неверно'
alert(message2);
// НЕ СМОГ СКАЗАТЬ, ЧТО В СЛУЧАЕ 'ВЕРНО' В СТРОКЕ 43-Й,
// НЕ ВЫВОДИТЬ ЧАСТЬ С 45-ОЙ СТРОКИ



// ПЯТОЕ ЗАДАНИЕ

 let month = prompt(' Чтобы узнать время года введите текущий месяц от 1 до 12', '');

 //зима

 if( month >= 1 && month <= 2 ){
     alert('Текущие время года - зима');
 } else if(month == 12){
    alert('Текущие время года - зима');
 }

//весна

 if( month >= 3 && month <= 5 ){
    alert('Текущие время года - весна');
}

//лето

if( month >= 6 && month <= 8 ){
    alert('Текущие время года - лето');
}

//осень

if( month >= 9 && month <= 11 ){
    alert('Текущие время года - осень');

}
 
 
 








