//  404 page using express

// middle wares study !

// simple age check query !

console.log("sajid");

import express from "express";
import path from "path";
const app = express();

function ageCheck(req, res, next) {
  const age = req.query.age;

  if (!age || age <18) {
    res.send("you are less than age 18 , you can not access the page !");
  } else {
    next();
  }
}

function ipCheck(req, res, next) {
  const ipAdd= req.socket.remoteAddress;
  console.log(ipAdd);
  next();

 
}
app.use(ipCheck);
app.use(ageCheck);

app.get("/", (req, resp) => {
  resp.send("home page ");
});

app.get("/users",  (req, res) => {
  res.send("users end point");
});

app.get("/products", (req, res) => {
  res.send("products page ");
});

app.listen(3000);
