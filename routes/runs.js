const express = require("express");

const router = express.Router();

const Run = require("../models/Runs");

router.post("/", (req, res) => {
  console.log(req.body);
  const run = new Run(req.body);
  const { distance, date } = req.body;
  if (!distance || !date) {
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
        return res
          .status(500)
          .json({ message: `Could not save run to database: ${err}` });
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

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Run.findByIdAndUpdate({ _id: id }, { $set: req.body })
    .then(run => {
      if (run) {
        return res.status(200).json(run);
      } else {
        return res
          .status(404)
          .json({ message: "Run with that ID could not be found." });
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Run.findOneAndDelete({ _id: id })
    .then(run => {
      if (run) {
        return res.status(200).json(run);
      } else {
        return res
          .status(404)
          .json({ message: "Run with that ID could not be found." });
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

module.exports = router;
