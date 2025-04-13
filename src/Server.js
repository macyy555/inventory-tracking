import express from "express";
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.DB_PORT;
const client_origin = 'http://'+process.env.CLIENT_HOST+":"+process.env.CLIENT_PORT;

const corsOptions = {
    origin: client_origin,
    credentials: true,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send({data: "server"});
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});