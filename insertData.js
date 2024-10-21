var express = require('express');
var app = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/aadhil');
var student = require('./models/student.js');

app.post('/',function(req,res){
    var info = req.body;
    if(!info.roll || !info.name || !info.course || !info.place){
        res.send("Data not correct");
    }else{
        var instance = new student({
            roll : info.roll,
            name : info.name,
            course : info.course,
            place : info.place
        });

        instance.save(function(err,response){
            if(err)
                res.send("Database error");
            else
                res.send("Success");
        });
    }
});

module.exports = app;