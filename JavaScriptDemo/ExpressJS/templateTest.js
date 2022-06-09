const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const port = 3000

var path = require("path")
var ejs = require("ejs")


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

// app.set('view engine', 'ejs');
// response.render('index.ejs');
// app.set('views', path.join(__dirname, 'templates'));

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);


app.get('/list', function(req, res) {

    let arr = [1,2,3]

    res.render('index', { title: 'EjS Template', list: arr })
});

//Read cookieis
//Set cookies

app.get('/cookie', function(req, res) {

    let arr = [1,2,3]

    res.render('index', { title: 'EjS Template', list: arr })
});


