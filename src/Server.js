import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

const corsOptions = {
    origin: 'http://localhost:3030',
    credentials: true,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send({data: "server"});
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});