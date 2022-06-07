var nodetest = require("./objArrayFile")


let arr = [2, 4,5,7,8,14,45,76];
let myArray = ['a', 1, 'a', 2, '1', 5, 5 ,2];
    myArray = [1,3,5,4,2,3,5]
let typearr = [50,"apple",{a:1}];
let string = "We are preparing for WAP Final exam"



console.log("Evens: ", nodetest.findEven(arr))
console.log("Odds: ",nodetest.findOdd (arr));
console.log("Sum : ", nodetest.sumOfNums(nodetest.findEven(arr)));
console.log("Unique Numbers: ", nodetest.findUnique(myArray));
console.log("Type of elements: ", nodetest.typeofElems(typearr));
console.log("Destructure Array : ", nodetest.destuctureArr(typearr));

console.log("Index of first odd number using array method:", nodetest.findOddIndexUsingMethod(arr));
console.log("Index of first odd number without array method:", nodetest.findOddIndex(arr))
console.log("Convert string to array: ", nodetest.strToArr(string)) 
//const stringToarr = sttoAF(string);
console.log("Convert array to string : ", nodetest.arrtoStr(nodetest.strToArr(string))) 

/**
 * Object Arrays
 */

 let obj = {a:1, b:[1,2], c:"string", d:{x:1,y:2}};
 let objarr = [{a:1,b:2},{a:2,b:4}];
 let persons = [{name:'Ram',age:20}, {name:'Lakshman',age:15}];

 console.log("Convert object to array: ", nodetest.convertObjectToArray(obj));
 console.log("\nMinified Object Array: ", nodetest.minifyObject(objarr));
 console.log("Oldest person age", nodetest.findOldestPerson(persons));
 console.log("Youngest person name:", nodetest.findYounger(persons));
 console.log("Youngest person between 15 & 17:", nodetest.findYoungerInRange(persons));

