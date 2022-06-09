
/**
 * Array Exercises
 */
//1.Find array of Even Numbers divisible by 4
//var arr = [2, 4,5,7,8,14,45,76];
let evenF = function findEven(array){
    //var evens = arr.filter(number => number % 4 == 0);
    //console.log('Even Numbers: ' + evens);

    let evenNumbers =[]
    for(let i=0; i < array.length; i++){

        if(array[i] % 2 == 0 && array[i] % 4 == 0){

            evenNumbers.push(array[i])
        }
    }

    //console.log("Even Numbers divisible by 4:", evenNumbers);
    return evenNumbers;
}

//even()

//Find array of Odd Numbers divisible by 4

let oddF = function findOdds(array){
    //var evens = arr.filter(number => number % 4 == 0);
    //console.log('Even Numbers: ' + evens);

    let OddNumbers =[]
    for(let i=0; i < array.length; i++){

        if(array[i] % 2 == 1 && array[i] % 4 == 1){

            OddNumbers.push(array[i])
        }
    }

    //console.log("Odd Numbers :", OddNumbers);

    return OddNumbers;

}

//2.Caluculate Sum of all Odd/Even/Numbers divisible by 4
let sumOfOddOrEvenNums = function sum(numarr){
    let sum = 0;
    for(let i=0; i < numarr.length; i++){
        sum += numarr[i];
    }
    return sum;
}

//console.log("Evens: ",evenF(arr));
//console.log("Odds: ",oddF(arr));
//console.log("Sum= ",sumOfOddOrEvenNums(oddF(arr)));

//3. Find Unique Numbers in the Array
let unqF = function findUnique(array1){
    let uniqueArray=[];
    for(let i=0; i<array1.length; i++){
        if(uniqueArray.indexOf(array1[i])== -1){
            uniqueArray.push(array1[i]);
        }    
        else{
            uniqueArray.splice(uniqueArray.indexOf(array1[i]), 1);
        }
    }
    return uniqueArray;
}
//var myArray = ['a', 1, 'a', 2, '1', 5, 5 ,2];
//let myArray = [1,3,5,4,2,3,5]
//console.log("Unique Numbers: ",unqF(myArray));


//4. Transform Array to print the type of elements in the Array

//let typearr = [50,"apple",{a:1}];

let typeF = function objectType(typearr){
   
    let resultofTypes = [];

    for(let i=0; i<typearr.length; i++){
        //resultofTypes.push(typeof(typearr[i]));
        resultofTypes[i] = typeof(typearr[i]);
    }

    return resultofTypes;
}

//console.log("Type of elements: ",typeF());

//5. Destructure Array

let daF = function  destructureArray(arrx){
    let r = [];
    
    for(let i=0; i<arrx.length; i++){
        r[typeof(arrx[i])+""+i] = arrx[i];
    }
    
    // for(const [key, value] of arrx) {
    //     r[key] =  value;
    // }

    return r;
}

//console.log("Destructure Array : ",daF(typearr));

//6. Find Index of first odd number - (using array method and also not using array methods)
// Using array method
// function (return element > 0).
let findOddIndexUsingMethod = function findFirtsOddIndexUsingMethod(array){
var found = array.findIndex((element)=> {
    return element % 2 == 1;
});

return found;
}

//console.log("Index of first odd number using array method:", findOddIndexUsingMethod(arr));

//without array method
let findOddIndex = function findFirtsOddIndex(array){
    for (let i = 0; i < array.length; i++)
        {
            if (array[i] % 2 == 1)
                return i;
        }
        return -1;
}
//console.log("Index of first odd number without array method:", findOddIndex(arr))


//7. Convert string to array and array to string. don’t use split() and toString()
//let string = "We are preparing for WAP Final exam"

//// using iterative
let sttoAF =  function stringToArray(str) {
    let arr = [''];
    let j = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == " ") {
            j++;
            arr.push('');
        } else {
            arr[j] += str.charAt(i);
        }
    }
    return arr;
}

//console.log("Convert string to array: ", sttoAF(string)) 

//Convert array to String

let arrtoStr = function arratToString(arr){
    let newstring = "";

    for (let i = 0; i < arr.length; i++) {
        newstring += arr[i] + " ";
    }
    return newstring;
}

//const stringToarr = sttoAF(string);
//console.log("Convert array to string : ", arrtoStr(stringToarr)) 

/**
 * Object Arrays
 */

//let obj = {a:1, b:[1,2], c:"string", d:{x:1,y:2}};

//1. Convert Object to array
let coa = function convertObjectToArray(myobj){
 let objentries =  Object.entries(myobj);

 //console.log("objentries= ",objentries);

 let objArr = [];

 for(let [key,value] of objentries){
    let x;
    if(Array.isArray(value)){
        value = value.reduce( (accumulator, element)=>
        {
            
            return accumulator +=element;
        }   ,'');

        x= key+"" +value;
        objArr.push(x);
    }
    else if(typeof(value)=='object'){
        
        value = convertObjectToArray(value)        
       //console.log(key, "objarr= ", value)       
        for(let y of value){       
        objArr.push(key+""+y);
        }
       
    }else{
        x= key+"" +value;
        objArr.push(x);
    }      
 }
 return objArr;
}
//console.log("Convert object to array: ", coa(obj));

//console.log(typeof({x:1,y:2}));


//2. Minify Object
// Get objects that has properties of name, ‘a’ 
//[{a:1,b:2},{a:2,b:4}]=> [{a:1},{a:2}]

//let objarr = [{a:1,b:2},{a:2,b:4}];

let minifyObject = function minifyObject(objarr){
    let resultArr = [];
    
    for(let elem of objarr){

        let x = new Object();

        for(let k in elem){

            if(k=='a'){
                x.a = elem[k];
                resultArr.push(x)

            }
            //console.log("\inner loop k : ", k ," and v: ",  elem[k]);
        }
             

        //console.log("\nOuter loop: ", elem);
        
    }


    return resultArr;
}

//console.log("Minified Object Array: ", minifyObject(objarr));

function mySort(x, y)
    {
    return ((x.age < y.age) ? -1 : ((x.age > y.age) ? 1 : 0));
    }

//3. Get the Oldest person age 
//let persons = [{name:'Ram',age:20}, {name:'Lakshman',age:15}];

let fo = function findOldestPerson(persons){
    
    let sortArr =  persons.sort(mySort);
    let oldest_person_age  = sortArr[sortArr.length-1].age;

    //console.log("min=", youngest_person_name);
    return oldest_person_age;
   

}

//console.log("Oldest person age", fo(persons));

//4. Get the Youngest person name

let fy = function findYounger(persons){

let sortArr =  persons.sort(mySort);
let youngest_person_name  = sortArr[0].name;

//console.log("min=", youngest_person_name);
return youngest_person_name;
}

//console.log("Youngest person name:", fy(persons));

//5. Find the person whose age is between 16 and 17 years.

let fyoung = function findYounger(persons){
    // var agb = persons.filter(person => person.age > 15);
    // var agb = agb.filter(person => person.age < 18);

    // let resultArr = [];
    // let n = new Object()
    // for(let k in persons){
    //     if(persons[k].age > 15 && persons[k].age < 18){
    //         n.name = persons[k].name;
    //         n.age = persons[k].age;
    //     }
    // }

    let resultArr = [];
    
    for(let elem of persons){

        if(elem.age >= 15 && elem.age < 18){        
            //console.log("elem", elem);
            resultArr.push(elem)           
        }
    }
    
    return resultArr;
}

//console.log("Youngest person between 16 & 17:", fyoung(persons));

module.exports = {findEven: evenF, findOdd: oddF, sumOfNums:sumOfOddOrEvenNums,
    findUnique:unqF, typeofElems:typeF, destuctureArr:daF,
    findOddIndexUsingMethod:findOddIndexUsingMethod, findOddIndex:findOddIndex,
    strToArr:sttoAF, arrtoStr:arrtoStr,
    convertObjectToArray:coa, minifyObject:minifyObject,
    findOldestPerson:fo, findYounger: fy, findYoungerInRange:fyoung };