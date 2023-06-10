
const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extends:true}));

app.get("/calc", function(req,res){
    res.send("this is a calculator");
});

app.get("/calclol/html", function(req,res){
    res.sendFile(__dirname + "/calc.html")
    console.log(__dirname)
})

app.get("/calclol/html/hello", function(req,res){
    res.send("hello this is /calc/html/hello ")
})

app.post("/calclol/html", function(req,res){
    let email = req.body.username;
    let password = req.body.password;

    if((email == "saadsohailbajwa@gmail.com") && (password == "asdf")){
        res.send("login successful")
    }else{
        res.send("the email or password your entered is wrong")
    }
})

app.get("/bmi",function(req,res){
    res.sendFile(__dirname+"/bmi.html")
})

app.post("/bmi",function(req,res){
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);

    let bmi = weight/(height*height);

    res.send("Your weight is:"+(weight+weight)+" Your BMI is "+ bmi);
})

app.listen(port, function(){
    console.log(`calc server started on the port ${port}`)
})