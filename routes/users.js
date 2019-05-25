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

router.get("/:id", (req, res) => {
  const { id } = req.params;
  User.findOne({ _id: id })
    .then(user => {
      if (user) {
        return res.status(200).json(user);
      } else {
        return res
          .status(404)
          .json({ message: "User with that ID could not be found." });
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

router.put('/:id', (res, res) => {
    const { id } = req.params;
    User.findOneAndUpdate({_id: id})
    .then(user => {
        if (user) {
          return res.status(200).json(user);
        } else {
          return res
            .status(404)
            .json({ message: "User with that ID could not be found." });
        }
      })
      .catch(err => {
        return res.status(500).json(err);
      });
})

router.delete('/:id', (res, res) => {})

module.exports = router;
