const express = require('express');
const app = express();
const port = 3000

var path = require("path")


app.listen(port, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ port)
    else 
        console.log("Error occurred, server can't start", error);
    }
);


//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let counter=0;
let storedData;
let pgcount = []; //new Object();
let add=0;
let view =0;
let er=0;
let st=0;
let nf =0; 
//1. Get request -> give the form html
app.get('/add', (req, res,next) =>{
    console.log("Total hits: ", ++counter);
   ++add;
    res.sendFile(path.join(__dirname, "../","html","form.html"))
    
});

//2. post request -> stores all in this file where you started the server
app.post('/add', (req, res,next) =>{
    console.log("Total hits: ", ++counter);
    ++add;
    storedData = req.body;
    console.log("in post od add", storedData);
    res.redirect('/view')
    //res.sendFile(path.join(__dirname, "./","views","view.html"))
    
});

//3. Form Post redirect -> view page-> whatever user has entered
app.get('/view', (req, res,next) =>{
    console.log("Total hits: ", ++counter);
    ++view;
    console.log("Here in post:"+ storedData.textfield);
        
    if (! req.body.textfield) {
        //res.redirect('/error')
    }

    let  coursesArr = storedData.course;

    let chtml ='';
    //chtml = coursesArr.join(', ');
    // coursesArr.forEach(element => {
    // //console.log(element);
    //  chtml += element + ", "
    // });
   res.send("<div>User Input:"+ storedData.textfield+ "</div>"
   + "<div>Degree:"+ storedData.degree+ "</div>"
   + "<div>Courses:"+ coursesArr + "</div>"
   + "<div>Select Box:"+ storedData.sellist+ "</div>"   
   + "<div>Message:"+ storedData.txtArea + "</div>")
   //res.send("<label>Message:"+ storedData.txtArea+ "</label>")
    
});

// app.post("/postData", function (req, res, next) {
//     console.log(++counter);
//     console.log('In the post', req.body.name, req.body.skill);
//     res.redirect("back")
// });

//6. Stats -> Hits of each page
app.get('/pagestat', (req, res,next) =>{    
    console.log("Total hits: ", ++counter);    
    ++st;

   //console.log("Add Page hit: ", add);
   res.send("<h1>Total hits: "+ counter + "</h1>"+
   "<ul>"
   + "<li> Add Page: "+ add+"</li>"
   + "<li> View Page: "+ view+"</li>"
   + "<li> 404 Page: "+ nf+"</li>"
   + "<li> Error Page: "+ er+"</li>"
   + "<li> Status Page: "+ st+"</li>"
   + "</ul>") 

    
});

app.post('/', (req, res,next) =>{
    console.log("Total hits: ", ++counter);    
    //++nf;
    res.redirect('/error')   
    //next()
    
});

// 4. Error html
app.get('/error', (req, res,next) =>{
    console.log("Total hits: ", ++counter);
    ++er;
    res.sendFile(path.join(__dirname,"views","error.html"))
    
});


//5. 404 Not found page 
app.use((req, res, next) => {
    console.log("Total hits: ", ++counter);
    ++nf;
    //console.log('Error Handler 2');
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

