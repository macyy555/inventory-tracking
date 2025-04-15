import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import pg from "pg";

dotenv.config();

const db_url = 'http://'+process.env.VITE_DB_HOST+":"+process.env.VITE_DB_PORT;
const client_origin = 'http://'+process.env.VITE_CLIENT_HOST+":"+process.env.VITE_CLIENT_PORT;

const db = new pg.Client({
  user: process.env.VITE_DB_USER,
  host: process.env.VITE_DB_HOST,
  database: process.env.VITE_DB_NAME,
  password: process.env.VITE_DB_PASS,
  port: process.env.VITE_DB_PORT,
});
db.connect();

const app = express();
const port = process.env.VITE_DB_EXP_PORT;
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
    origin: client_origin,
    credentials: true,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send({data: "server"});
});

app.listen(port, () => {
  console.log(`Server running on http://${process.env.VITE_DB_HOST}:${port}`);
});