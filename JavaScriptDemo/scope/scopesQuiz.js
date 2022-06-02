//Sample Comments

// function main() {//var x;
//     console.log("x1 is:" + x);//undefined? x is declared but not yet assigned, 
//     //there is local varaible with same name.
//     x = 20;
//     console.log("x2 is:" + x);//20? assign local variable
//     if (x > 0) {
//         var x = 30;//
//         console.log("x3 is:" + x);//30?local variable is reassigned.
//     }
//     console.log("x4 is:" + x);//30 (209) var is function scope, so you can read it out of block
//     var x = 40;
//     var f = function (x) {
//         console.log("x5 is:" + x);//50 x is parameter, x is called with 50(217)
//     };
//     f(50);
//     console.log("x6 is:" + x);//40 (213)local variable is assigned 40, 
// }
// main();
// console.log("x7 is:" + x);//10 (213, 209) local declaration of x inside the function.



// 1. 
// let grapes = "green"; 

// function fruits(){ 
//     return function(message){ 
//         return grapes; 
//     }
// }

// console.log(fruits()()); // "green" - outer grapes variable still persists in inner functions


// 2. 
// let x = 10;

// function globalVar(){ 

//     return function(){ 

//        return x; 

//     } 

// } 

// x = 20; 

// let fn = globalVar(); 

// console.log(fn ()); // 20 - x is changed at line 50 and then function called happen in line 54

 

// 3. 
// function sport(message){ 

//     message = "Hi"; 

//     return function(message){ 

//         return message; 

//     } 

// } 

// let sportFn = sport("Hello"); 

// console.log(sportFn ()); // undefined, because inner method parameter not provided



 

// // 4. 
// function test(x){ 

//     x = 10; 

//     x++; 

//     return function(){ 

//         return x++; 

//     } 

// } 

// console.log(test(2)()) // 11 - x is reassigned 10, then increment thre x++ which returns 11, ++x would return 12
 
 

// // 5.
// function car(){ 

//     let color = "white"; 

//     function seat(){ 

//         let color = "brown"; 
//         console.log(color) [inner method is never called]

//     } 

//     console.log(color)//white, color variable still assigned to white

// } 

// car("black") 


// 6. 
// function department(){ 

//     let numberOfDepartments = 5; 
//     console.log(numberOfDepartments); // 5, obviously
//     function software(){ 

//         let language = "javascript"; 
//         console.log(language) // [inner method is never called]

//     } 

//     console.log(language) // undefined, there's no variable was defined in outer scope

// } 

// department() 



 

// // 7. 
// function department(language){ 

//     let numberOfDepartments = 5; 
//     console.log(numberOfDepartments) // 5, obviously
//     function software(){ 

//         let language = "javascript"; 
//         console.log(language); // [inner method is never called]

//     } 

//     console.log(language) // java, this values passed to this function

// } 

// department("java"); 



 
