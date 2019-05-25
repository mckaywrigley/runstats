require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");

const app = express();

mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
  .then(res => console.log(`Connected to MongoDB.`));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is runnign on port: ${port}.`);
});
