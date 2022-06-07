// Var , let & const

//1. Var Scope
var x = "hey hi"; // Global scope
var hi = "hi"   
function newFunction() {
     hi = "hello";  // function/local scope
}

//console.log(hi);

// 2. undefined
function newFunction1() {
    var h = "hello";
}

//console.log(h); // ReferenceError: h is not defined

//3. redefine
//var variables can be re-declared and updated
var greeter = "hey hi";
var greeter = "say Hello instead";  // redefining (declaration + assignment)
greeter = "say Hello again"; // reassign

//console.log(greeter);

//4.Hoisting of var  -> very important
//Hoisting is a JavaScript mechanism where 
//variables and function declarations are moved to the top
//of their scope before code execution.

//console.log (y); //undefined reason explained below 
var y = "say hello"

/*
 //it is interpreted as this:

    var y; // as declaration moved to top
    console.log(y); // y is undefined as yet not assigned
    y = "say hello"
 */
    //So var variables are hoisted to the top of their scope and 
    //initialized with a value of undefined.

///5. let   -----> is block scoped
/**
 A block is a chunk of code bounded by {}. 
 Anything within curly braces is a block.

 *** A block lives in curly braces.*** 
 So a variable declared in a block with let is only available
 for use within that block.
 */

 
 let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
        var hi = "it is redeined" // see line 5 
    }
   //console.log(hello) // hello is not defined
/*
We see that using hello outside its block (the curly braces where it was defined) 
returns an error. 
This is because let variables are block scoped .
*/
// But 
console.log(hi) // it is refined at line 58 BUT change var to let at line 58 & see

//6. let can be updated but not re-declared.

let g = "it let g";
    g = "g updated";  // Oaky
//let g = "say Hello instead"; // error: Identifier 'greeting' has already been declared

// Rule 7
//However, if the same variable is defined in different scopes, 
//there will be no error:
let greeting = "say greeting2";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); // "say Hello instead"
    }
console.log(greeting); // "say greeting2"
//This is because both instances are treated as different variables
// since they have different scopes.

// Rule 8
//Hoisting of let
//Just like  var, let declarations are hoisted to the top. 
//Unlike var which is initialized as undefined, 
//the let keyword is not initialized. 
//So if you try to use a let variable before declaration, 
//you'll get a Reference Error means "not defined"


// Rule 9 const
/**
const declarations are block scoped & maintained constant values
Like let declarations, const declarations can only be accessed within the block they were declared.
 */

// Rule 10
//const cannot be updated or re-declared BUT for var & let see line 22 & 74
const const_var = "say Hi";
// value update not allowed but for let allowed see line 74
const_var = "say Hello instead";// error: Assignment to constant variable. 

// re-declation not allowed (also not allowd for let see line 75)
const const_redec = "say Hi";
const const_redec = "say Hello instead";// error: Identifier 'greeting' has already been declared

// So every const declaration, 
//must be initialized at the time of declaration.

//Rule 11

 const greeting = {
        message: "say Hi",
        times: 4
    }
while we cannot do this: reassignment

    greeting = {
        words: "Hello",
        number: "five"
    } // error:  Assignment to constant variable.
we can do this:

    greeting.message = "say Hello instead";
 

// Rule 12Hoisting of const
//Just like let, const declarations are hoisted to the top 
//but are not initialized.

/**
 the differences, here they are:

1. var declarations are globally scoped or function scoped while let and const are block scoped.
2. var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
3. They are all hoisted to the top of their scope. But while var variables are initialized with "undefined", let and const variables are not initialized.
4. While var and let can be declared without being initialized, const must be initialized during declaration.
 */