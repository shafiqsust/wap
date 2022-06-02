let  array= ["apple", "banana","pear"];

let li = "";
for(let element of array){

    li += "<li>" + element + "</li>\n"
}

console.log("<ul>\n"+ li + "</ul>");
