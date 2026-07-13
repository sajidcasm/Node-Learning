const express = require("express");
const db = require("../database.js");

const modell = require("../Models/model.js");

const router = express.Router();

router.get("/", (req, res) => {
  modell
    .findAll()
    .then((data) => {
      console.log(data);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/hardcode-add", (req, res) => {
  const data = {
    title: "luking for a react dev",
    technologies: " react,js, nextjs, nodejs ",
    budget: "$3000",
    description: "lorem ipsum data is there xyz xyz xyz !!!",
    contact_email: "ss@gmail.com",
  };

  let { title, technologies, budget, description, contact_email } = data;

  modell.create({
    title,
    technologies,
    budget,
    description,
    contact_email,
  }).then((data)=>{
    console.log('data');
    // res.redirect('/gigs');
    res.send('hardcoded data added by just calling get request ! ');

  }).catch((error)=>{
    console.log('error', error);

  })
});

module.exports = router;
