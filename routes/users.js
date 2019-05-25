const express = require("express");

const router = express.Router();

const User = require("../models/Users");

router.get("/", (req, res) => {
  User.find()
    .then(users => {
      if (users) {
        return res.status(200).json(users);
      } else {
        return res.status(404).json({ message: "Users could not be found." });
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

module.exports = router;
