const express = require('express');
const bodyParser = require('body-parser');
const { Family } = require('../models/family');
const { mongoose } = require('../db/mongoose');
const { ObjectId } = require('mongodb');
var app = express();
app.use(bodyParser.json());

app.post('/family', (req,res)=>{
    
    var family = new Family({
        name: req.body.name,
        age: req.body.age
    });

    family.save().then((doc)=>{
        res.send(doc)        
    }, (err)=>{
        family.status(404).send(err);
    });
});

app.get('/family',(req, res)=>{
    Family.find().then((data)=>{
        res.send({data})
    }, (err)=>{
            res.status(400).send(err);
    });
});

app.get('/family/:id', (req, res)=>{
    var id = req.params.id;
console.log(id);

    if (!ObjectId.isValid(id)) {
        return res.status(404).send();
    }
    Family.findById(id).then((data)=>{
        if (!data) {
            return res.status(404).send();
        }
        res.send({data});
    }).catch((err)=>{
        res.status(400).send();
    });
});

app.listen(3000, ()=>{
    console.log('Listing Port 3000');    
})

/* 
    This is main file server.js we imported third party software express and body-parser and we also
    import the database connectivity file mongoose.js and model file family.js
    after that we use the bodyparser.json() for response and url parsing, then we create a post request
    to the server which url is localhost://portnumber/andurl
*/