// import fs from "fs";
// import http from "http";

// const server = http.createServer((req, resp) => {
//   fs.readFile("html/form1.html", "utf-8", (err, data) => {
//     if (err) {
//       resp.writeHead(404, { "Content-Type": "text/html" });
//       return resp.end("404 Not Found");
//     }

//     if (req.url === "/") {
//       resp.writeHead(200, { "Content-Type": "text/html" });
//       resp.write(data);
//       resp.end();
//     }
//   });
// });

// server.listen(3000);

import http from "http";
import fs from "fs";
import queryString from "querystring";

const server = http.createServer((req, resp) => {

    if (req.url === "/") {

        fs.readFile("./html/form1.html", "utf-8", (err, data) => {

            if (err) {
                resp.writeHead(404);
                return resp.end("File not found");
            }

            resp.writeHead(200, {
                "Content-Type": "text/html"
            });

            resp.end(data);

        });

    }

    else if (req.url === "/submit" && req.method === "POST") {

        let dataBody = [];

        req.on("data", (chunk) => {

            console.log(chunk);

            dataBody.push(chunk);

        });

        req.on("end", () => {

            // console.log(dataBody);
            let rawData = Buffer.concat(dataBody).toString();
            let readableData = queryString.parse(rawData);
            console.log(readableData);

            resp.writeHead(200);

            resp.end("Form Submitted");

        });

    }

});

server.listen(3000, () => {

    console.log("Server Running");

});