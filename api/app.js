const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));


app.get("/user",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/user",function(req,res){
    const query = req.body.userCity;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query+"&units=metric&appid=0e1d121bd7344985fd816a717c929f52"
    console.log(query)
    https.get(url,function(response){
        response.on("data",function(data){
            const weatherUser = JSON.parse(data);
            const idee = weatherUser.weather[0].icon;
            const icon = "https://openweathermap.org/img/wn/"+ idee +"@2x.png";
            res.write('<head><meta charset="utf-8"></head>');
            res.write("<img src="+"'"+ icon +"'"+">");
            res.write("<h1>the weather in "+query+" is: "+weatherUser.weather[0].description + " while the temperature is: "+ Math.round(weatherUser.main.temp)+"</h1>");
            res.send();
        })
    })
})

app.get("/",function(req,res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=0e1d121bd7344985fd816a717c929f52";
    
    https.get(url,function(response){

        response.on("data",function(data){
            const weatherData = JSON.parse(data)
            console.log(weatherData)
        });
        
    });

    res.send("this is homepage")
});

app.get("/london",function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=0e1d121bd7344985fd816a717c929f52";
    
    
    https.get(url,function(respone){
        respone.on("data",function(data){
            const London = JSON.parse(data);
            console.log(London.name,London.timezone);
            const code = London.weather[0].icon
            
            let img = "https://openweathermap.org/img/wn/" + code +"@2x.png";

            res.write('<head><meta charset="utf-8"></head>');
            res.write("<img src="+'"'+img+'"'+">");
            res.write("<h1>The weather of london is:" + London.main.temp +"</h1>" );
            res.send();
        })
    });

    

    //res.send("this is london weather ")
})




app.listen(3000,function(){
    console.log("server started at port: 3000");
});