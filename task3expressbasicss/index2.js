//  404 page using express 



import express from "express";
import path from "path";



const app = express();

app.get("/",(req,resp)=>{

    const  abspath = path.resolve('view/home.html');

    resp.sendFile(abspath);


});

app.use((req,resp)=>{

    const  abspath = path.resolve('view/404.html')
    resp.status(404).sendFile(abspath);
})

app.listen(3000);