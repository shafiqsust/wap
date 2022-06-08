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

//1. Get request -> give the form html
app.get('/add', (req, res,next) =>{
    console.log("Total hits: ", ++counter);
    res.sendFile(path.join(__dirname, "../","html","form.html"))
    
});

//2. post request -> stores all in this file where you started the server
app.post('/add', (req, res,next) =>{
    console.log("Total hits: ", ++counter);
    storedData = req.body;
    //console.log("in post od add", storedData);
    res.redirect('/view')
    //res.sendFile(path.join(__dirname, "./","views","view.html"))
    
});

//3. Form Post redirect -> view page-> whatever user has entered
app.get('/view', (req, res,next) =>{
    console.log("Total hits: ", ++counter);
    //console.log("Here in post:"+ storedData.textfield);
   res.send("<div>User Input:"+ storedData.textfield+ "</div>"
   + "<div>Message:"+ storedData.txtArea + "</div>"
   + "<div>Degree:"+ storedData.degree+ "</div>"
   + "<div>Courses:"+ storedData.course + "</div>"
   + "<div>Select Box:"+ storedData.sellist+ "</div>")
   //res.send("<label>Message:"+ storedData.txtArea+ "</label>")
    
});

// app.post("/postData", function (req, res, next) {
//     console.log(++counter);
//     console.log('In the post', req.body.name, req.body.skill);
//     res.redirect("back")
// });




//4. Error html
//5. 404 Not found page 
app.use((req, res, next) => {
    console.log("Total hits: ", ++counter);
    //console.log('Error Handler 2');
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

//6. Stats -> Hits of each page
//console.log("Total hits: ", ++counter);