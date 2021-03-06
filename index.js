require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");

const app = express();

mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(res => console.log(`Connected to MongoDB.`));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const authRoutes = require("./routes/auth");
const runRoutes = require("./routes/runs");
const userRoutes = require("./routes/users");
const stripeRoutes = require("./routes/stripe");
const twilioRoutes = require("./routes/twilio");

app.use("/api/auth", authRoutes);
app.use("/api/runs", runRoutes);
app.use("/api/users", userRoutes);
app.use("/api/stripe", stripeRoutes);
app.use("/api/twilio", twilioRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}.`);
});
