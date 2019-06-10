const express = require("express");
const router = express.Router();
const moment = require("moment");

const Reminder = require("../models/Reminders");

router.post("/", (req, res) => {
  const { buddyPhoneNumber } = req.body;

  if (!buddyPhoneNumber) {
    return res.status(400).json({
      message: "Please enter a valid US phone number. Ex: 5553567825"
    });
  }

  const reminder = new Reminder({
    reminderName: req.body.reminderName,
    userPhoneNumber: req.body.userPhoneNumber,
    buddyPhoneNumber: req.body.buddyPhoneNumber,
    notification: 0,
    timeZone: req.body.timeZone,
    time: moment(req.body.time, "MM-DD-YYYY hh:mma"),
    user_id: req.body.user_id,
    message: req.body.message
  });
  reminder
    .save()
    .then(reminder => res.status(201).json(reminder))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
