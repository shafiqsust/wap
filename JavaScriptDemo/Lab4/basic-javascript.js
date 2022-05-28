/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      if(typeof found == 'object' && typeof expected == 'object'){
          if(JSON.stringify(expected) == JSON.stringify(found)){
              return "TEST SUCCEEDED";
          }
      }
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  
  /* 1. max returns the maximum of 2 arguments */
  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    };
  }
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  
  /* 2. max3 takes 3 numbers as arguments and returns the largest */
  function maxOfThree(a, b, c) {
    return max(max(a, b), c);
  
  }
  
  console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));
  
  // 3. checking the input character is vowel or not
  function isVowel(c){
      let argletter = c.toLowerCase();
      return (argletter==='a' || argletter==='e' || argletter==='i' || argletter==='o' || argletter==='u')
  }
  console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a')));
  console.log("Expected output of isVowel('b') is false  " + myFunctionTest(false, isVowel('b')));
  
  // 4. sum() and multiply function
  function sum(arry){
      return arry.reduce((prev, element, index, array)=>{
          prev += element;
          return prev;
      }, 0);
      
  }
  console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1,2,3,4])));
  
  function multiply(a){
      return a.reduce((prev, element, index, array)=>{
          prev *= element;
          return prev;
      }, 1);
  }
  console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1,2,3,4])));
  
  // 5. reverse a string
  function reverse(str){
      let chars = str.split('');
      let len = str.length;
      let i = 0;
      while(i<(len/2)){
          let temp = chars[i];
          chars[i] = chars[len-i-1];
          chars[len-i-1] = temp;
          i++;
      }
      return chars.join('');
  }
  console.log("Expected output of reverse(\"jag testar\") is \"ratset gaj\"  " + myFunctionTest("ratset gaj", reverse("jag testar")));
  
  // 6. find longest word from an array of string
  function findLongestWord(arr){
      return arr.reduce((prev, element, idx, array)=>{
          if(prev < element.length) prev = element.length;
          return prev;
      }, 0);
  }
  console.log("Expected output of findLongestWord(['web', 'appli', 'programing']) length of the longest is 10  " + myFunctionTest(10, findLongestWord(['web', 'appli', 'programing'])));
  
  // 7. find longer words than a given integer
  function filterLongWords(arr, len){
      return arr.filter((element, idx, array)=>{
          return (element.length > len);
      });
  }
  console.log("Expected output of filterLongWords(['web', 'appli', 'programing'], 5) is ['programing']  " + myFunctionTest(['programing'], filterLongWords(['web', 'appli', 'programing'], 5)));
  
  // 8. map/reduce/filter code update
  const a = [1,3,5,3,3];
  function mapMultiply(a){
      return a.map(function(elem, i, array) {
          return elem * 10;
      });
  }
  console.log("Expected output of mapMultiply([1,3,5,3,3]) is [10,30,50,30,30]  " + myFunctionTest([10,30,50,30,30], mapMultiply([1,3,5,3,3])));
  
  function filterElem(a, inputnum){
      return a.filter(function(elem, i, array){
          return elem === inputnum;
      });
  }
  console.log("Expected output of filterElem([1,3,5,3,3], 3)  all elements equal to 3 is [3,3,3]  " + myFunctionTest([3,3,3], filterElem([1,3,5,3,3], 3)));
  
  function reduceElem(a){
      return a.reduce(function(prevValue, elem, i, array){
          return prevValue * elem;
      }, 1);
  }
  console.log("Expected output of reduceElem([1,3,5,3,3]) is 135  " + myFunctionTest(135, reduceElem([1,3,5,3,3])));