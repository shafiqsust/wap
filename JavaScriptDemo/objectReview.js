let obj = {a:1};
obj["a"] = 3;

//console.log(obj)

//remove properties from object
delete obj.a;
//copy/clone object
let obj1 = obj;
let newObject = {a:1, b:"string", c: [1,2], d: {a:1, b:2}}

let clonedObject = [];

for( let key in newObject){
    clonedObject[key] =  newObject[key];
}

//console.log(newObject, "cloned= ", clonedObject);

//Find if a particular "value" in the object -> "string"

let findElement = function(obj){
    console.log(obj);

for( let key in obj){  

    if("string"== obj[key]){
    //console.log("Found at key:"+ key)
    return true;
    }
    
        //console.log("Not Found")
        //return false;   
}
}
//console.log(findElement(newObject))

//compare object and array

var a = [{'name':'bob', 'age':22}, {'name':'alice', 'age':12}, {'name':'mike', 'age':13}];
var b = [{'name':'bob', 'age':62}, {'name':'kevin', 'age':32}, {'name':'alice', 'age':32}];

for (var i = 0, len = a.length; i < len; i++) { 
    for (var j = 0, len2 = b.length; j < len2; j++) { 
        if (a[i].name === b[j].name) {
            b.splice(j, 1);
            len2=b.length;
        }
    }
}

console.log(a, b);

// sum of ages 
let employeeobj = [{name:"a", age: 20},{name:"b", age: 14},{name:"c", age: 40}];

let sumofage = employeeobj.reduce( function(accumulator, element, index, array){
     return accumulator+ element.age;
}, 0);

console.log("sumofage:" , sumofage);

// return array of names
let namearr = employeeobj.reduce( function(accumulator, element, index, array){
     accumulator.push(element.name);
    return accumulator

}, []);

console.log("Array of names:" , namearr);