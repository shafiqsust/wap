var fs = require("fs")
//var test2 = require("./test2.js")
var test2 = require("./test2")
//console.log("Here", fs);

console.log("Test2", test2);

console.log("Test2 a", test2.a());

// var startTime = Date.now();
// fs.readFile("./test.txt", function(e,o){
//     console.log(o.toString(),Date.now() - startTime);
// })

// console.log("\n--------------------\n");

// setTimeout(() => { console.log('timeout'); }, 0);
// setImmediate(() => { console.log('immediate'); });
// process.nextTick(()=> console.log('nexttick'));

// console.log("Here after fs.read()");
// for(let i=0; i < 5; i++){
//     console.log(i);
// }