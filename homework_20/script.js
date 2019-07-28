"use strict"

// Первое задание

function fib( n ) {
    let a = 1;
    let b = 1;

    for(let i = 3; n >= i; i++){
      let c = a + b;
      a = b;
      b = c;
    }
      return b;

  } 

console.log( fib( 8 ) ); 

// Второе задание


let i = 1000;

let z = 0;

while ( i >= 50 ) {
    i /= 2;
    z ++;
}

console.log( i );
console.log( z );




