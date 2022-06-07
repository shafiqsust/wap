// Array Exercises

//1.Find array of Even Numbers divisible by 4
var arr = [2, 4,5,7,8,14,45,76];
var evens = arr.filter(number => number % 4 == 0);
console.log('Even Numbers: ' + evens);

//1.Find array of Odd Numbers divisible by 4
var odds = arr.filter(number => number % 4 == 1);
console.log('Odd Numbers: ' + odds);

//2.Caluculate Sum of all Odd/Even/Numbers divisible by 4

let sum = evens.reduce((accumulator, elem)=>{
    return accumulator+elem;
}, 0);

console.log('Sum of even Numbers: ' + sum);

//3.Find Unique Numbers in the Array 
var myArray = ['a', 1, 'a', 2, '1', 5, 5 ,2];
var unique = myArray.filter((v, i, a) => a.indexOf(v) === i);

console.log(unique); // unique is ['a', 1, 2, '1']


//4.Transform Array to print the type of elements in 
//the ArraygetTypes([50,”apple”,{a:1}]) => [“number”,”string”,”object”]

let typearr = [50,"apple",{a:1}];
let resultofTypes = [];
// for(let i=0; i<typearr.length; i++){
//     //resultofTypes.push(typeof(typearr[i]));
//     resultofTypes[i] = typeof(typearr[i]);
// }
resultofTypes = typearr.map(a => typeof a);

console.log(resultofTypes);

//5. Destructure Array
/**
 From the given array, build an object that has array elements as
properties. The name of the property is
<typeof the element>+index
destructureArray([50,”apple”,{a:1}])=>
{number0:50,string1:”apple”,object2:{a:1}}
 */
function  destructureArray(arrx){
    let r = [];
    
    for(let i=0; i<arrx.length; i++){
        r[typeof(arrx[i])+""+i] = arrx[i];
    }
    
    // for(const [key, value] of arrx) {
    //     r[key] =  value;
    // }

    return r;
}

let desArr = destructureArray(typearr);
console.log(desArr);

//6. Find Index of first odd number - (using array method and also not using array methods)
// Using array method
// function (return element > 0).
var found = arr.findIndex((element)=> {
    return element % 2 == 1;
});
console.log("Index of first odd number:", found);

//without array method
function findFirtsOddIndex(array){
    for (let i = 0; i < array.length; i++)
        {
            if (array[i] % 2 == 1)
                return i;
        }
        return -1;
}
console.log("Index of first odd number:", findFirtsOddIndex(arr))

//7. Convert string to array and array to string. don’t use split() and toString()
let string = "We are preparing for WAP midterm exam"
//console.log(Array.from(string)); //'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'

// using reduce
//let strCharArr;
let [...strCharArr]=string; // destructure
let strToarr = strCharArr.reduce((accumulator, element)=>
{
    if(element==" ") accumulator.push(""); 
    else accumulator[accumulator.length-1] +=element; 
    return accumulator;
}   ,[""]);

console.log(strToarr);

// using iterative
function stringToArray(str) {
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

const stringToarr = stringToArray(string)
console.log(stringToarr) 

//Convert array to String
let newstring = "";
function arratToString(arr){
    for (let i = 0; i < arr.length; i++) {
        newstring += arr[i] + " ";
    }
    return newstring;
}
newstring = arratToString(stringToarr);
console.log(newstring) 


//Object Manupulation
/*
Object Arrays
1. Convert Object to Array
Each element in the array is the concentation of key+value in the
object.
convertObjectToArray({a:1,b:[1,2],c:”string”,d:{x:1,y:2}}
=> [a1,b12,cstring,dx1,dy2]
*/

let obj = {a:1, b:[1,2], c:"string", d:{x:1,y:2}};

function convertObjectToArray(myobj){
 let objentries =  Object.entries(myobj);
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
console.log(convertObjectToArray(obj));

//console.log(typeof({x:1,y:2}));

//Get the Oldest person age 
let persons = [{name:'Ram',age:20}, {name:'Lakshman',age:15}];
var max = Math.max(...persons.map(person => person.age));
var maxValues = persons.filter(person => person.age == max);

console.log(maxValues);

//Get the Youngest person name

var min = Math.min(...persons.map(person => person.age));
var minValues = persons.filter(person => person.age == min);


console.log(minValues);

//Find the person whose age is between 16 and 17 years.
var agb = persons.filter(person => person.age > 15);
var agb = agb.filter(person => person.age < 18);
console.log(agb);


$(function(){
    let ul = document.createElement("ul");
    let li = "";
    for(let item of array){
        li += "<li>"+item+"</li>";
    }
    //ul.innerHTML = li;// DOM
    $(ul).html(li)

    //$('#list').html(ul); 
    $('#list').append(ul) // JQuery



    createTable(arrObj);

    $('#sort-by-age').click(()=>{
        arrObj.sort((a,b)=>a.Age-b.Age);
        createTable(arrObj);
    });
    
    $('#sort-by-name').click(()=>{
        arrObj.sort((a,b)=>{
            if(a.Name < b.Name) return -1;
            if(a.Name > b.Name) return 1;
            return 0;
        });
        createTable(arrObj);
    });
    createSelect(objectArray);
});

function createSelect(arrObj){
    let select = "<select name='fruits'>";
    for(opt of arrObj){
        select += "<option value='"+ opt.code + "'>"+opt.name+"</option>";
    }
    select += "</select>";
    $('#select').html(select);
}

function createTable(arrObj){
    let table = "<table><tr>";
    for(let key in arrObj[0]){
        table += "<th>"+key+"</th>";
    }
    table += "</tr>";
    
    for(let item of arrObj){
        table += "<tr>";
        for(let val in item){
            table += "<td>"+item[val]+"</td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    $('#tbl').html(table);

    //run through each row
    $('.table-list tr').each(function () {

        //processing this row
        //how to progress through each cell(table td) 
            $(this).find('td').each(function () {                        

                const tdtxts = $(this).text();
                //console.log("td val: ",tdtxts)
                $(newUl).append("<li>" + tdtxts +"</li>")
                //console.log(" ul - ",$(newUl).html())
            });
        });
}
</script>
</head>
<body>
<h3>Table example:</h3>
<input type="button" id="sort-by-age" value="Sort by Age" />
<input type="button" id="sort-by-name" value="Sort by Name" />
<div id="tbl"></div>
<h3>List example:</h3>

<div id="list"></div>

<h3>Select example:</h3>
<div id="select"></div>
</body>
</html>