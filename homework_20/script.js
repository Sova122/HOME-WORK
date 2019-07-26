"use strict"

// Первое задание

function fib( n ) {
    if( n < 2 ) {
        return n;
    }   return ( fib( n-1 ) + fib( n-2 ) );
  
  } 

console.log( fib( 3 ) ); 
console.log( fib( 4 ) );
console.log( fib( 5 ) ); 

// Второе задание


let i = 1000;

let z = 0;

while ( i >= 50 ) {
    i /= 2;
    z ++;
}

console.log( i );
console.log( z );




