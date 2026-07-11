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



app.put('/update-name-by-id',(req,res)=>{
    // emma has 5 id 

    // const id =  req.params.id;
    const id =  req.body.id;
    // params wala id 
    const name  = req.body.name;
    // ye name request body me aya ok and 

    const update_query = 'UPDATE demotable2 SET name = $1 where id = $2';
    //  here name is column name and id is col id 

    con.query(update_query, [name, id ], (error, result)=>{
        if(error){

            res.send(error)

        }else{

            res.send('updated')

        }
    })

})






app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


//  how to fetch data by id 
//w orks fine bs konsa kya run krna h wo dhyan krhna hoga proper !
