const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();

const createToken = require("../helpers/auth/generateToken");

const User = require("../models/Users");

router.post("/register", (req, res) => {
  user = new User(req.body);
  const { username, password, email } = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  if (!username || !password || !email) {
    return res
      .status(400)
      .json({ message: "Please provide a username, password, and email." });
  }

  user
    .save()
    .then(saved => {
      return res.status(201).json(saved);
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  let { username, password, email } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Please provide a username and password." });
  }

  User.findOne({ username })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = createToken.generateToken(user);
        return res.status(200).json({
          user,
          token
        });
      } else {
        return res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(err => {
      return res.status(500).json(err.message);
    });
});

module.exports = router;
