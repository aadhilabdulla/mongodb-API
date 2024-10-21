var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
    roll : Number,
    name : String,
    course : String,
    place : String
});

var student = mongoose.model('student',studentSchema);
module.exports = student;