let array = [4,5,9];

let result =  array.reduce( function (prev,elem, index, array){

    return elem > prev ?  elem : prev;

}, 0);
console.log("Max Number=" , result)


let arry = [{name:"peter",salary:100},{name:"alice",salary:200},{name:"sara",salary:400}];

let totalSal = arry.reduce(function(accumulator, elem){
    return accumulator + elem.salary;}, 0); //0 is initial value, 15 is sum

    console.log("Total Sal=" , totalSal);

 let maxSal = arry.reduce(function(accumulator, elem)
 {
    return accumulator > elem.salary ? accumulator : elem.salary;

}, 0); //0 is initial value, 15 is sum

    console.log("Max Sal=" , maxSal)

    const things = {
        'a': 97,
        'b': 98,
        'c': 99
        };
    let resArr = [];
    for (const key in things) {
        resArr.push(key);
        //console.log(key + ', ' + things[key]);
    }
    console.log(resArr);

        