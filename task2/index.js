// simple server create 


import http from "http"
import colors from "colors"



import { userData } from "./userData.js";

const port = 3000;
const server = http.createServer((req,resp)=>{

    resp.setHeader("Content-Type","text/html");
    // will help if h1 h2 tags given

    

    resp.write(JSON.stringify(userData));
    // humesha json format me bhejte h data 
    

    resp.end();
    // this line is very muchnecessary 

})

server.listen(port);

console.log(colors.red("hey sajid"))
console.log(colors.green("hey sajid"))
console.log(colors.yellow("hey sajid"));
console.log(colors.blue("hey sajid"));
console.log(colors.rainbow("hey sajid"));