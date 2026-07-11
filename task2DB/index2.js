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

  //   const res = await con.query("SELECT * FROM demotable");
  //   console.log("Response:", res.rows);
} catch (err) {
  console.error("Error:", err);
}

app.get("min-max", () => {});

app.post("/postList", async (req, res) => {
  const dataList = req.body;

  //     [
  //   { "name": "Alice", "id": 1 },
  //   { "name": "Bob", "id": 2 },
  //   { "name": "Charlie", "id": 3 },
  //   { "name": "David", "id": 4 },
  //   { "name": "Emma", "id": 5 }
  // ]

  try {
    for (const item of dataList) {
      const { name, id } = item;

      await con.query(`INSERT INTO demotable2 (name, id) VALUES ($1, $2)`, [
        name,
        id,
      ]);
    }
    res.send("Data inserted successfully");
    console.log("Data inserted successfully");
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
