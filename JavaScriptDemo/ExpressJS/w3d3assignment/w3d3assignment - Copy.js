const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();

const port = 4000

app.use(cookieParser())

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


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {

    res.redirect('/cookie')
});

// Display login form
app.get('/login', (req, res, next) => {
    //login string is referencing login.ejs file
    res.render('login');
});

// Log out: clear all user credentials from the cookie
app.get('/logout', (req, res, next) => {
    res.clearCookie('username'); //remove username from the cookie
    res.redirect('/login');
});

//Varify user credentials
app.post('/process_login', (req, res, next) => {
    //request.body will take data from the form
    const { username, password } = req.body;
    const userdetails = {
        username: 'shafiq',
        password: '123456'
    }
    if (username === userdetails.username && password === userdetails.password) {
        
        //saving data to cookies
        res.cookie('username', username);
        res.cookie('password', password);

        res.redirect('/cookie');
    } else {
        res.redirect('/login?msg=fail')
    }

    // response.json({ username, password });
});

app.get('/cookie', function(req, res) {

    if(req.cookies.username=="shafiq" && req.cookies.password=="123456"){

        res.render('form', { username: req.cookies.username})
    }
    else{
        res.redirect('/login')
    }

    
});

//Read cookieis
//Set cookies

app.post('/cookie', function(req, res) {

    const myCookie = req.body;

    if(myCookie.textfield){
        res.cookie("myName", myCookie.textfield)
    }
    if(myCookie.degree){
        res.cookie("myDegree", myCookie.degree)
    }
    if(myCookie.course){
        res.cookie("myCourses", myCookie.course)
    }
    if(myCookie.sellist){
        res.cookie("myOption", myCookie.sellist)
    }
    if(myCookie.textfield){
        res.cookie("myMessage", myCookie.txtArea)
    }
   

    //console.log(req.cookies);

    res.redirect('/view')
    
});

app.get('/view', (req, res,next) =>{

    console.log("cookies: ", req.cookies);
    res.render('view', {name: req.cookies.myName, 
        degree: req.cookies.myDegree,
        courses: req.cookies.myCourses,
        seloption: req.cookies.myOption,
        message: req.cookies.myMessage })
})