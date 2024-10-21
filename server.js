var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended : true
}));

var insertData = require('./insertData.js');
var getData = require ('./getData.js');

app.use('/',insertData);
app.use('/getData',getData);


app.listen(3080);