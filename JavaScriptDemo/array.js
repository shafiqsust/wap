let objArray = [{a:1, b:1}, {a:2, b:2}];


let fn = function(a){
   
    let len = a.length;
    let sum =0;
    for(let i=0; i< len; i++){
        sum += a[i].b;
    }

    //console.log(len)
    return sum;
}


console.log(fn(objArray));