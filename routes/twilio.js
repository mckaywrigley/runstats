const express = require("express");
const momentTimeZone = require("moment-timezone");
const moment = require("moment");
const Reminder = require("../db/models/Reminders");
const router = express.Router();
const phone = require("phone-regex");

const getTimeZones = function() {
  return momentTimeZone.tz.names();
};

router.get("/", function(req, res, next) {
  Reminder.find()
    .then(reminders => {
      if (reminders) {
        return res.status(200).json(reminders);
      } else {
        return res
          .status(404)
          .json({ message: "Reminders could not be found." });
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

router.get("/:id", function(req, res, next) {
  const id = req.params.id;
  Reminder.findOne({ _id: id })
    .then(reminder => {
      if (reminder) {
        return res.status(200).json(reminder);
      } else {
        return res
          .status(404)
          .json({ message: "Reminder with that ID could not be found." });
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

router.get("/user/:id", (req, res) => {
  const id = req.params.id;
  Reminder.find({ user_id: id })
    .then(reminders => {
      if (reminders) {
        return res.status(200).json(reminders);
      } else {
        return res
          .status(404)
          .json({ message: "Reminders for that user could not be found." });
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

router.get("/plant/:id", (req, res) => {
  const id = req.params.id;
  Reminder.find({ plant_id: id })
    .then(reminders => {
      if (reminders) {
        return res.status(200).json(reminders);
      } else {
        return res
          .status(404)
          .json({ message: "Reminders for that plant could not be found." });
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

router.post("/", function(req, res, next) {
  const plantName = req.body.plantName;
  const phoneNumber = "+1" + req.body.phoneNumber;
  const notification = req.body.notification;
  const timeZone = req.body.timeZone;
  const time = req.body.time;
  const user_id = req.body.user_id;
  const plant_id = req.body.plant_id;

  // validate phone number
  if (!phone({ exact: true }).test(phoneNumber)) {
    return res.status(400).json({
      message: "Please enter a valid US phone number. Ex: 5553567825"
    });
  } else {
    const reminder = new Reminder({
      plantName: plantName,
      phoneNumber: phoneNumber,
      notification: notification,
      timeZone: timeZone,
      time: moment(time, "MM-DD-YYYY hh:mma"),
      user_id: user_id,
      plant_id: plant_id
    });
    reminder
      .save()
      .then(reminder => res.status(201).json(reminder))
      .catch(err => res.status(500).json(err));
  }
});

router.put("/:id", function(req, res, next) {
  const id = req.params.id;
  const plantName = req.body.plantName;
  const phoneNumber = req.body.phoneNumber;
  const notification = req.body.notification;
  const timeZone = req.body.timeZone;
  const time = moment(req.body.time, "MM-DD-YYYY hh:mma");

  Reminder.findOne({ _id: id })
    .then(function(plant) {
      plant.plantName = plantName;
      plant.phoneNumber = phoneNumber;
      plant.notification = notification;
      plant.timeZone = timeZone;
      plant.time = time;

      Reminder.save()
        .then(reminder => {
          return res.status(200).json(reminder);
        })
        .catch(err => {
          return res
            .status(404)
            .json({ message: "Could not find reminder with that ID." });
        });
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

// POST: /plants/:id/delete
router.delete("/:id", function(req, res, next) {
  const id = req.params.id;

  Reminder.remove({ _id: id })
    .then(reminder => {
      if (reminder) {
        return res.status(200).json({ message: "Reminder deleted." });
      } else {
        return res
          .status(404)
          .json({ message: "Could not find reminder with that ID." });
      }
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

module.exports = router;