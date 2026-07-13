//  404 page using express 

// middle wares study !


console.log("sajid")

import express from "express";
import path from "path";
const app = express();

function checkroute (req,res,next){

    console.log(req.url);
    if(req.url==="/users"){
        res.send("u can not visitit user route as per this check ")
    }
    else{
        next();

    }
    

}

app.get("/",checkroute, (req,resp)=>{

    resp.send("home page ");
});

app.get("/users", checkroute,  (req,res)=>{
    res.send("users end point");
});

app.get("/products", (req,res)=>{
    res.send("products page ");
})

app.listen(3000);
// dcsc