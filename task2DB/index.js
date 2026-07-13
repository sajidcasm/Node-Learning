
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

// simple post data

try {
  await con.connect();
  console.log("Connected to database");
  console.log("hello sajid");

//   const res = await con.query("SELECT * FROM demotable");
//   console.log("Response:", res.rows);
} catch (err) {
  console.error("Error:", err);

}

app.post('/post-data', (req, res) => {
  // Handle POST request for creating a new user

  const {name, id} = req.body;
  const insert_query  = `INSERT INTO demotable2 (name, id) VALUES ($1, $2)`;
//    name corresponds to $1 and id corresponds to $2 in the query

// con.query();
//  first one is going to be query variable and then [ name, id] is going to be the array of values that we want to insert into the query then cb function 

con.query(insert_query, [name, id], (error, result) => {

    if(error){

        res.send(error)

        // res.send(500).json({message: "Error inserting data"});

    }else{
        // res.status(200).json({message: "Data inserted successfully"});
        res.send("Data inserted successfully");
        console.log("Data inserted successfully");
    }

})

});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
// ss