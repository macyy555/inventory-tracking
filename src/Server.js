import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

const corsOptions = {
    origin: 'http://localhost:3030',
    credentials: true,
};


// region @git-ignore
console.log(`[someMethod value]`, value)
// the comment and console.log statement will be excluded from the diff
// endregion

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send({data: "server"});
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});