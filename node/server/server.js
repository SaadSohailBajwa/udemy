//jshint esversion:6

const express = require("express");

const app = express();

app.get("/",function(request,response){
    response.send("<h1>hello</h1>")
})

app.get("/about" , (req,res)=>{
    res.send("The owner of this page is Saad who is learning how to code")
})

app.listen(3000, ()=>{
    console.log("server started at port 3000")
});
