/*for(var i = 0 ; i < 11 ; i ++){
    console.log(7*i)
}*/

// variables in JS, datatypes in js, operators in js, arrays, for loop in js

// loops are used for running a program multiple number of time
// for :- 1st initialization, 2nd condition, 3rd incerement/decrement

// for(var i = 0; i <= 10; i++ ){
//     console.log(i * 5)
// }

// for(var I = 10; I > 0; I--){
//     console.log(I*5)
// }


// Print values from 1 till 50 in the console using for loop
// for(var i = 1; i <= 50; i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz")
//     }
//     else if(i%3==0){
//         console.log("Fizz")
//     }
//     else if(i%5==0){
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }

// print even odd form 1 till 50

// for(var i = 1; i <=50; i++){
//     if(i % 2==0){
//         console.log('even', i)
//     } else{
//         console.log('odd', i)
//     }
// }

// prime number
// for(var i = 1; i <= 100000; i++){
//     var isPrime = true
//     for(var j = 2; j < i/2; j++ ){
//         if(i%j==0){
//             isPrime = false;
//             break
//         }
//     }
//     if(isPrime){
//         console.log(i)
//     }
// }

// Find if the number is Armstrong or not
//371 = 3^3 + 7^3 + 1^3 = 27 + 343 + 1 = 371

//371 // 371%10 == 1
    // 37%10 == 7
    //3%10 == 3
// i =97  , j (2 till 48)

console.log('for ended')

/*
*
**
***
****
*****
******
*/

for(var i = 1; i <= 7 ; i++){
    var char = '*';
    for(var j = 1; j < i; j++){
        char = char + '*'
    }
    console.log(char)
    char=''
}