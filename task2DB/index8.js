// post with updated sequence in db 

//  post gres me ye comand :


// create table users (

// id serial primary key,
// name varchar (100) not null,
// email varchar (100) unique not null



// )

import express from "express";
import pg from "pg";

const app = express();

app.use(express.json());

const { Client } = pg;

const con = new Client({
  user: "postgres",
  host: "localhost",
  database: "demopost",
  port: 5432,
  password: "sajidali",
});



try {
  await con.connect();
  console.log("Connected to database");
  console.log("hello sajid");

} catch (err) {
  console.error("Error:", err);
}


app.post('/post-auto', (req, res)=>{

    const {email, name} = req.body;

    const insert_query = 'insert into users (name, email) values ($1, $2)';
    con.query(insert_query, [name, email], (error, result)=>{

        if(error){
            res.send(error);
        }else{
            res.send("posted !")
        }

    })

})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


// min max 
