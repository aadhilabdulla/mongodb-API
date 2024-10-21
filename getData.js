var express = require('express');
var app = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/aadhil');
var student = require('./models/student.js');

app.get('/',function(req,res){
    student.find(function(err,response){
        res.send(response);
    });
});

module.exports = app;