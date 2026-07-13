require("dotenv").config();
console.log("test hello from appjs ");

const express = require("express");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const database = require('./database.js')

const PORT = process.env.ENV_PORT || 5000;

const app = express();
//  express handlebars 

app.engine('handlebars',engine({defaultLayout:'main'}));
app.set('view engine','handlebars');


database.authenticate().then(()=>console.log("Database connected ")).catch(error=>console.log(error));
app.get("/", (req,res)=>{
    res.send("hello home page ")
})

app.use("/gigs", require('./routes/gigs.js'))


app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`);
})
// asjcbADJcbADJK Cha