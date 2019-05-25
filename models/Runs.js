const mongoose = require("mongoose");

const Schema = mongoose.Schema;

mongoose.set("useCreateIndex", true);

const RunSchema = new Schema({
  distance: { type: Number, required: true },
  //   Saves time as an inter in milliseconds
  time: { type: Number, required: true },
  location: { type: String },
  description: { type: String }
});

const Run = mongoose.model("runs", RunSchema);
module.exports = Run;
