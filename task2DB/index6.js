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



app.delete('/delete/:id', (req,res)=>{

    const id = req.params.id;
    const delete_query = 'delete from  demotable2 where id = $1';
    con.query(delete_query, [id], (err, result)=>{
        if(err){

            res.send(err);

        }else{

            res.send("deleted successfully ")

        }

    })


})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


//  how to fetch data by id 
//w orks fine bs konsa kya run krna h wo dhyan krhna hoga proper !
