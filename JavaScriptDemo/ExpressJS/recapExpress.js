var express = require("express")
var app = express()
const port=80;
app.listen(port, (erroe) => {
    if(erroe){
        console.log("Error! Server can't Run");
    }else{
        console.log("Server running at port" + port);
    }

})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))