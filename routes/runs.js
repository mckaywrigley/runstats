const express = require("express");
const moment = require("moment");

const router = express.Router();

const Run = require("../models/Runs");

router.post("/", (req, res) => {
  const run = new Run(req.body);
  const { distance, duration, date } = req.body;
  if (!distance || !duration || !date) {
    return res
      .status(400)
      .json({ message: "Please provide a distance, duration, and date." });
  } else {
    run
      .save()
      .then(run => {
        return res.status(200).json(run);
      })
      .catch(err => {
        return res.status(500).json(err);
      });
  }
});

router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  Run.find({ user: id })
    .then(runs => {
      if (runs) {
        return res.status(200).json(runs);
      } else {
        return res.status(404).json({
          message: "Runs for user with specified ID could not be found."
        });
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Run.findOne({ _id: id })
    .then(run => {
      if (run) {
        return res.status(200).json(run);
      } else {
        return res.status(404).json({
          message: "Run with specified ID could not be found."
        });
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

router.put("/", (req, res) => {});

router.delete("/", (req, res) => {});

module.exports = router;
