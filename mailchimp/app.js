const express = require("express");
const app = express();
const port = 3000;
const request = require("request");
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.sendFile(__dirname+"/sign-up.html")
})

app.post('/',function(req,res){
    let fullName = req.body.inputName
    let email = req.body.inputEmail
    let password = req.body.inputPassword
    console.log(fullName+" "+email+" "+password)
})




app.listen(port,function(){
    console.log("server started at port: "+ port);
});


// 6108406fc695b652dd0eb1534ce37cfd-us21