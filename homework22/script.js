
"use script";

// Первое задание

let arr1 = [2, -5, 1, -2, 0, -3, 2, -14];

let newArr1 = arr1.filter(function(number) {
   return number >= 0;
})

let i = newArr1.map(function(number){
    return Math.sqrt(number);
})

console.log(i);


// Второе задание


let arr2 = [4, 3, 5, 5, 0, 4, 8, 6];

let a = arr2.reduce(function(accum, currentValue){
      
      let b = accum + currentValue;

      if ( b == b++ ){
         console.log(a);
      }
  
});
    
    