import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

global.XMLHttpRequest = require("xhr2");

const port = process.env.SERVER_PORT;

const app = express();

app.use(cors({}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("hello");
  res.status(200).end();
});

app.listen(port);
console.log(`app listening at ${port}`);
