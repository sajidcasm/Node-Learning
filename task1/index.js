// simple server create 


const http = require("http");

const colors = require ("colors")

const port = 3000;

const server = http.createServer((req,resp)=>{

    resp.setHeader("Content-Type","text/html");
    // will help if h1 h2 tags given

    

    resp.write("hi sajid");
    resp.write("<h1> yo sajid aliiii h1 tag chlta hai   </h1>");

    resp.end();
    // this line is very muchnecessary 

})

server.listen(port);

console.log(colors.red("hey sajid"))
console.log(colors.green("hey sajid"))
console.log(colors.yellow("hey sajid"));
console.log(colors.blue("hey sajid"));
console.log(colors.rainbow("hey sajid"));