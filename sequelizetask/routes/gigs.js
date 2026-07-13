const express = require('express');
const db = require('../database.js');

const modell = require('../Models/model.js');

const router = express.Router();


router.get('/', (req,res)=>{

    modell.findAll().then((data)=>{
        console.log(data);
        res.sendStatus(200);
    }).catch((error)=>{
        console.log(error);
    });
    
})


router.get('/nigs', (req,res)=>{

    res.send("yo route of get gigs/nigs..............  ")
})

module.exports = router;