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


app.get('/fetchbyid/:id', (req,res)=>{
    const id = req.params.id ;

    const fetch_query = 'SELECT * FROM demotable2 WHERE  id = $1'
    //  yaha id === columns name hai 

    con.query(fetch_query, [id], (err, result)=>{
        //  this id in sq bracmket it params wala ok, $1 se pick hoga ye esa!

        if(err){
            res.send(err);
            console.log(err);

        }else{

            res.send(result.rows);

        }

    })

})



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


//  how to fetch data by id 
//w orks fine bs konsa kya run krna h wo dhyan krhna hoga proper !
