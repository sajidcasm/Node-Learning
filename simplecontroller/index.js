import express from "express";
const app = express();

import handleUsers from "./controllers/userController.js";

// Add this line to point Express to your singular "view" folder:
app.set('views', './view'); 

app.set('view engine','ejs');

app.get('/users', handleUsers);

app.listen(3200);