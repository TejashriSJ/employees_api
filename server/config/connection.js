import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createPool(process.env.DATABASE_URL);

connection.getConnection((err) => {
  if (err) {
    console.error("Error in connecting to database");
  } else {
    console.log("Connected to database");
  }
});

export default connection;
