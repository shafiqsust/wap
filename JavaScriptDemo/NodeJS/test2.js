function a(){
    console.log("a");
}
function b(){
    console.log("b");
}
module.exports = {a:a, c:b}

let myFunc = {}
myFunc.a = function(){
    console.log("a");
}
myFunc.b = function(){
    console.log("b");
}

myFunc.myVar = 10

module.exports = myFunc;

var  x = 10

var array  =[1,2,3]

module.exports = array;