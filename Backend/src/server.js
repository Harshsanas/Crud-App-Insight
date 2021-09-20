const express = require("express");

const app = express();

app.use(express.json()); // usefull while posting and updating;

const connect = require("./config/db");

const formController = require("./controller/form.controller")

app.use("/form", formController)
const start = async () => {
  await connect();
  app.listen(3033, () => {
    console.log("listening on port 3033");
  });
};

start();