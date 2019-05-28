const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RunSchema = new Schema({
  // References user
  user: { type: Schema.Types.ObjectId, ref: "users" },
  distance: { type: Number, required: true },
  //   Saves time as an inter in milliseconds
  secondDuration: { type: Number, required: true },
  stringDuration: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String },
  description: { type: String }
});

const Run = mongoose.model("runs", RunSchema);
module.exports = Run;
