"use script"

// Первое задание

function searchArrayWord(word, array ){
    for (var i=0; i<array.length; i++){
        if(array[i] === word) 
            return true;
    }    
        return false;
     
}
let arr1 =  ['собака', 'жираф', 'кот'];
console.log(searchArrayWord('кот', arr1));


// Второе задание

let arr2 = [1, 2, 3, 7, 6, 9];
function sumArray(array){
let sum = 0;
for(let i = 0; i < array.length; i++){
    sum = sum + array[i];
    }
console.log(sum / array.length);
}
sumArray([1, 2, 3, 7, 6, 9]);


// Третье задание Перевернуть элементы массива задом наперед. Не используя reverse.
/*
let arr3 = [1, 3, 5, 6, 7, 9];

function reverseArray(array){

    for(let i = 0; i < array.length; i++){

        let rev = arr3[array.length-1];

        arr3[i] = rev;
        
        }
    console.log(arr3);
    }
    reverseArray(arr3);
*/

let arr3 = [1, 3, 5, 6, 7, 9];

for (let i = 0, j = arr3.length -1; i < j; i++, j--) {
    let temp = arr3[i];
    arr3[i] = arr3[j];
    arr3[j] = temp;
    }

    console.log(arr3);


// Четвертое задание

let obj1 = {
    html:'HTML',
    css: 'CSS',
    js: 'ECMA'
  };
  
  console.log(Object.keys(obj1));
 
// Пятое задание 

let obj2 = {
    'Name': 'Ludmila',
    'Phone': 777,
    'Address': 's.Rublivka, Polt.region',
    'Tota  order': 830,
    'Total order weight': 2700,
    'Purchased goods': {
        'article-cap': {'price': 100, 'weight': 200},
        'article-spoon': {'price':30, 'weight': 100},
        'article-teapot': {'price':550, 'weight': 2000},
        'article-сup': {'price':150, 'weight': 400}
    } 
}
  