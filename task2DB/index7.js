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



app.get('/minmax', (req,res)=>{
  const query = 'SELECT MIN(id) AS min_value , MAX(id) as max_value from demotable2';
  con.query(query,(err,result)=>{
    if(err){
      res.send(err);
    }
    else{
      

      const {min_value, max_value} = result.rows[0];
      res.send({
        "min": min_value,
        "max" : max_value
      });
      console.log(result)
    }
  })
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


// min max 
