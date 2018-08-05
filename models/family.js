const mongoose = require('mongoose');

var Family = mongoose.model('family', {
    name:{
        type: String
    },
    age:{
        type: Number
    }
});

module.exports = {Family};

/*
    In this program the Family is Constructor which has two property name and age so this is called
    model and we create the database named family after that we export this Family module for reusability
*/