var x1 = 10;
//console.log(x1);
let text = "Hello";
//let result = text.substring(1, 4);
//console.log(text.substring(1, -2));

//for (let i=0; i<10;i++)
//console.log(i+2)

//for (let i=0; i<10; i+2) //infinite loop
//console.log(i)

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements: 
fruits.splice(2, 0, "Lemon", "Kiwi");

let myArray = ["apple", "juice", null];
//console.log(myArray.splice(100, 0, "banana"));

let f = function sum(x, y){
    if(x == "undefined" || y=="undefined"){
    console.log("Undefined");
    return;
    }
    return x+y;

}
//console.log(f("",20));
//console.log(sum(10,20))

function add(a, b){
    return a+b;
}
add();
//console.log(add);

let a = ["apple", "banana", "pear"];

let result = a.forEach(element => {
    element.length;
});

//console.log(result);
let nar = [];

for (i=0; i< a.length; i++){
    nar[i] = a[i].length;
}

console.log(nar);

let fn = function(){
    let narr = [];
    for (i=0; i< a.length; i++){
        
        if(a[i].length >= 5 ){
            narr[i] = a[i];
        
        }
    }
    return narr;
}

console.log(fn(a));

let find = function(a){
    for (i=0; i< a.length; i++){
        if(a[i].length >= 5)
        return a[i];
    }
}

let findIndex = function(a){
    for (i=0; i< a.length; i++){
        if(a[i].length >= 5)
        return i;
    }
}

console.log(find(a), findIndex(a));

console.log("-------Reverse Find-----------");
let findLast = function(a){
    for (i=a.length; i--;){
        if(a[i].length >= 5)
        return a[i];
    }
}

let findastIndex = function(a){
    for (i=a.length; i--;){
        if(a[i].length >= 5)
        return i;
    }
}

console.log(findLast(a), findastIndex(a));