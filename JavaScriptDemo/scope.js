  //--------Example 3

function f() {
   var a = 1, b = 20, c;
   console.log(a + " " + b + " " + c);
   function g() {
   var b = 300, c = 4000;
   console.log(a + " " + b + " " + c);
   a = a + b + c;
   console.log(a + " " + b + " " + c);
   }
   console.log(a + " " + b + " " + c);
   g();
   console.log(a + " " + b + " " + c);
  }
  f();

   //--------Example 4

   var x = 10; 
   function main() 
   { 
      console .log ("x1 is:" + x); 
      
      x = 20 ; 
      console .log ("x2 is:" + x); 
      if (x > 0 ) 
      { var x = 30 ; 
         console .log ("x3 is:" + x); 
      } 
      console .log ("x4 is:" + x); 
      var x = 40 ; 
      var f = function ( x ) { 
         console .log ("x5 is:" + x); 
      }; 
      f (50); 
      console .log ("x6 is:" + x); 
   } 
   main(); 
   console .log ("x7 is:" + x);


   let x = {a:1};
   function a(){
      let x = {a:3};
   }
  a();
  console.log(x);

  
  let x=1;
  function a(){
     console.log(x);
     x= 2;
     console.log(x);
     var x = 4;
  }
  a();

  function a(a,b){
     console.log(arguments);
     for(let i=0; i<arguments.length;i++){
        console.log(arguments[i]);
     }
  }

   a(1,2,3,4,5,6);
   