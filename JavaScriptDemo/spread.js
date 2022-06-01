let array1 =  [{a:1, b:2}, {c:3, d:4}]; 

let clonedArray = [...array1];

//array1[0].b = 30; // will update both array's b to 30
//var newArr = array1;
//newArr.b = 30;
clonedArray[0].b = 30;

console.log("array1: ", array1, " \nClonedArray: ", clonedArray);

//copy using loop
let a =  [20, 30, 40]; 
let b =  [{a:1, b:2}, {c:3, d:4}]; 

let copiedarr = [];
for (let elem in b){
    console.log(elem, b[elem]);
    copiedarr.push({...b[elem]});  //deep copy
}



console.log("\nCopied arr: ",copiedarr);
copiedarr[0].b = 90;
console.log("\nAfter change Copied arr: ",copiedarr, "\n Original b: ", b);