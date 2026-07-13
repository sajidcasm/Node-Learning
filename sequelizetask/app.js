require("dotenv").config();
console.log("test hello from appjs ");

const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

const database = require('./database.js')

const PORT = process.env.PORT || 5000;

const app = express();

database.authenticate().then(()=>console.log("Database connected ")).catch(error=>console.log(error));
app.get("/", (req,res)=>{
    res.send("hello home page ")
})

app.use("/gigs", require('./routes/gigs.js'))


app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`);
})
// asjcbADJcbADJK Cha