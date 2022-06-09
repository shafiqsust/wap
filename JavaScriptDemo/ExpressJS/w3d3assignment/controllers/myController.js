var path = require("path")

const index = ((req, res) => {

    res.redirect('/cookie')
})

const getLogin = ((req, res) => {
    //login string is referencing login.html file
    let errMsg = ''
    //console.log("request msg: ", req.query.msg)
    if(req.query.msg){
        errMsg = "! You have entered invalid username/password "
    }
    res.render('login', {msg: errMsg});
})

const getLogout = ((req, res, next) => {
    res.clearCookie('username'); //remove username from the cookie
    res.redirect('/login');
})

const authUser = ((req, res, next) => {
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
})

const getCookies = ((req, res, next) => {
    if(req.cookies.username=="shafiq" && req.cookies.password=="123456"){

        res.render('form', { username: req.cookies.username})
    }
    else{
        res.redirect('/login')
    }
})

const saveCookies = ((req, res, next) => {
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
})

const viewCookies = ((req, res, next) => {
    res.render('view', {name: req.cookies.myName, 
        degree: req.cookies.myDegree,
        courses: req.cookies.myCourses,
        seloption: req.cookies.myOption,
        message: req.cookies.myMessage })
})

//5. 404 Not found page 
const error404 = ((req, res, next) => {   
    //console.log('Error Handler 2');
    res.status(404).sendFile(path.join(__dirname, "../", 'views', '404.html'));
});


module.exports = {
    index,
    getLogin,
    getLogout,
    authUser,
    saveCookies,
    getCookies,
    viewCookies,
    error404
}