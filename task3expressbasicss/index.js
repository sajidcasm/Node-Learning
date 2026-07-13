console.log("hello sajid !");


import express from "express";
import path from "path";



const app = express();

app.get("/",(req,resp)=>{

    const  abspath = path.resolve('view/home.html');

    resp.sendFile(abspath);


});

app.listen(3000);