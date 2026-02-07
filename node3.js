// simple server create 


const http = require("http");

const port = 3000;

const server = http.createServer((req,resp)=>{

    

    resp.write("hi sajid");
    resp.write("<h1> yo sajid aliiii h1 tag chlta hai   </h1>");

    resp.end("response end wala line execute zaruri hai ");
    // this line is very muchnecessary 

})

server.listen(port)