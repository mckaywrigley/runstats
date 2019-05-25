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

module.exports = router;
