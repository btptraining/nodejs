const express = require('express')
const app = express();
const fs = require('fs');
const { type } = require('os');

app.get("/",function(req,res){
    res.send("Loaded successfuly");
});
app.use(express.static(__dirname));
app.get("/about",function(req,res){
    res.sendFile(__dirname+"/about.html")
});

app.get("/loadparams",function(req,res){
    console.log(req.params);
    res.send("Param Example");
});

app.get("/loadparams/:id/:name",function(req,res){
    console.log(req.params);
    res.send("Param Example");
});

app.get("*",function(req,res){
    res.send("Page Not Found");
});

app.listen('5005',function(){
    console.log('Server Started');
});


app.get("/contact",function(req,res){
    res.sendFile(__dirname+"/contact.html")
});