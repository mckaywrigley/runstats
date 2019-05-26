const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// mongoose.set("useCreateIndex", true);

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, required: true, default: Date.now }
});

const User = mongoose.model("users", UserSchema);
module.exports = User;
