const express = require("express");
const app = express();
const https = require("https");


app.get("/",function(req,res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=0e1d121bd7344985fd816a717c929f52";
    
    https.get(url,function(response){

        response.on("data",function(data){
            const weatherData = JSON.parse(data)
            console.log(weatherData)
        })
        
    })

    res.send("this is homepage")
});

app.get("/london",function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=0e1d121bd7344985fd816a717c929f52";

    https.get(url,function(respone){
        respone.on("data",function(data){
            const London = JSON.parse(data);
            console.log(London.name,London.timezone)
            res.send("The temperature of london right now is: "+London.main.temp)
        })
    });

    //res.send("this is london weather")
})

app.listen(3000,function(){
    console.log("server started at port: 3000");
});