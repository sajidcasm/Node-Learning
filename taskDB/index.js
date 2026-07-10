console.log("hello sajid");

import pg from "pg";

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

  const res = await con.query("SELECT * FROM demotable");
  console.log("Response:", res.rows);
} catch (err) {
  console.error("Error:", err);
} finally {
  await con.end();
}