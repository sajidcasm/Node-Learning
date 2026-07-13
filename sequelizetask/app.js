console.log("test hello from appjs ");

const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");



const PORT = process.env.PORT || 5000;

const Sequelize = require ('sequelize');

const db = new Sequelize('sequelize_db', 'postgres', 'sajidali123', {
    // db , username, password 
    host:'localhost',
    dialect: 'postgres',
    operatorAliases : false,

    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
})

const app = express();

db.authenticate().then(()=>console.log("Database connected ")).catch(err=>console.log(error));


app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`);
})
// asjcbADJcbADJK Cha