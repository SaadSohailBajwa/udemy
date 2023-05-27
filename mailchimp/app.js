const express = require("express");
const app = express();
const port = 3000;
const request = require("request");
const bodyParser = require("body-parser");









app.listen(port,function(){
    console.log("server started at port: "+ port);
});