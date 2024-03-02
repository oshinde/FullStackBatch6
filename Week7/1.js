//for(init, condition, operation)

//while(condition)

// var i = 1; 

// while(i < 7){
//     console.log("never do this")
//     i++;
// }

//1. Write a JS code to print numbers from 1 to 10
// var i = 1; 
// while(i<= 10){
//     console.log(i)
//     i++
// }

//2. Write a JS code to calculate the sum of digits in a number  (1234) = 10

// function sumOfDigits(num){
//     var sum = 0;
//     while(num != 0){
//         sum = sum + num%10
//         num = Math.floor(num / 10) 
//     }
//     console.log(sum)
// }

// sumOfDigits(1234)
// sumOfDigits(7862)
// sumOfDigits(11)
// sumOfDigits(9999)

// qrite a function to print even values till a given number 88 (0 till 88) , 200(0 till 200)
function printEven(num){
    var i = 0
    while(i <= num){
        console.log(i)
        i = i + 2
    } 
}


//printEven(222)

// Take 2 numbers and write functions to add, multiply, subtract
function add(num1, num2){
    return (num1+num2);
}

function sub(num1,num2){
    return num1-num2;
}

//num3 + output of num1 + num2

var num3 = 10;
//console.log(sub(10,20))



// data structure Array:- const cars = ["Tesla", "Byd","Tesla"]

//Set holds unique values

// const a = new Set(["a","b","c","A","z"])

// console.log(a)

// // add, delete, has, forEach, values; size

// a.add("y")

// console.log(a)

// a.delete("y")

// console.log(a)

// console.log(a.has("t"))

// a.forEach(
//     function(value){
//         console.log(value, "this is the value")
//     }
// )

// console.log(a.values())
// console.log(a.size)

//Map is used for sotring data in key value pair 

// create map, add new elements, get , delete, has, forEach, entires

const map1 = new Map([["a1", 500], ["a2",600]])

console.log(map1)

map1.set("a3",700)
console.log(map1)

console.log(map1.get("a4"))

map1.delete("a3")

console.log(map1)

console.log(map1.has("a1"))

map1.forEach(function(value, key){
    console.log("The  value  for Key ", key, "is ", value )
})

console.log(map1.entries())