// Array Exercises
//Find Unique Numbers in the Array 
var myArray = ['a', 1, 'a', 2, '1', 5, 5 ,2];
var unique = myArray.filter((v, i, a) => a.indexOf(v) === i);

console.log(unique); // unique is ['a', 1, 2, '1']

//Find array of Even/Numbers divisible by 4
var arr = [2, 4,5,7,8,14,45,76];
var evens = arr.filter(number => number % 4 == 0);
console.log('Even Numbers: ' + evens);

//Find array of Odd/Numbers divisible by 4
var odds = arr.filter(number => number % 4 == 1);
console.log('Odd Numbers: ' + odds);

//Caluculate Sum of all Odd/Even/Numbers divisible by 4

let sum = evens.reduce(function(accumulator, elem){
    return accumulator+elem;
}, 0);

console.log('Sum of even Numbers: ' + sum);
