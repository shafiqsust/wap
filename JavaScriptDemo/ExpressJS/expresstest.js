const express = require('express');
const app = express();
app.listen(3000, () => {
console.log('Your Server is running on 3000');
})

app.use(express.json());
//app.use(express.urlencoded())
app.use(express.urlencoded({ extended: false }));

let counter=0;


app.use(function(err, req,res, next){
    console.log('Error Handler', err.Error);
    next(err)
})

app.get('/', (req, res, next) => {
    console.log( ++counter);
    console.log('In the middleware!');
    res.send('<h1>The Welcome Page</h1>');
});
    
app.get('/add', (req,res, next) =>{
    console.log( ++counter);
    res.send('<from action="/product" action="post"><input type="text" name="searchkey"> <input type="submit" value="Submit"></form>')
})

app.post('/product', (req,res, next) =>{
    console.log( ++counter);
    console.log("In the post");
})

app.get('/admin', (req,res, next) =>{
    console.log( counter++);
    console.log("Admin Login");
    res.send("Admin Page")
})

app.post('/admin/add', (req,res, next) =>{
    console.log( counter++);
    console.log("Admin Add");
    res.send("Admin Add")
})

app.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'add-product.html'));
    }); 

app.use(function(req, resr,next){
    console.log("Without Path");
    next();
})

app.use(function(err, req,res, next){
    console.log('Error Handler 2');
    //next(err)
})

app.use((req, res, next) =>{
res.sendFile(path.join(__dirname, 'views', '403.html'))
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
    