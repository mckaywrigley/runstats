const mongoose = require("mongoose");
const moment = require("moment");
const keys = require("../../config/keys");
const Twilio = require("twilio");

const ReminderSchema = new mongoose.Schema({
  reminderName: String,
  userPhoneNumber: String,
  buddyPhoneNumber: String,
  notification: { type: Number, default: 0 },
  timeZone: String,
  time: { type: Date, index: true },
  user_id: Number,
  message: String
});

ReminderSchema.methods.requiresNotification = function(date) {
  const momentTime = moment(this.time);
  const timeZone = moment(this.time).tz(this.timeZone);
  return (
    Math.round(
      moment
        .duration(
          moment(this.time)
            .tz(this.timeZone)
            .utc()
            .diff(moment(date).utc())
        )
        .asMinutes()
    ) === this.notification
  );
};

ReminderSchema.statics.sendNotifications = function(callback) {
  // now
  const searchDate = new Date();
  Reminder.find().then(function(reminders) {
    reminders = reminders.filter(function(reminder) {
      return reminder.requiresNotification(searchDate);
    });

    console.log(reminders.length);
    // if (reminders.length > 0) {
    sendNotifications(reminders);
    // }
  });

  /**
   * Send messages to all appoinment owners via Twilio
   * @param {array} reminders List of appointments.
   */
  function sendNotifications(reminders) {
    const client = new Twilio(keys.twilioAccountSid, keys.twilioAuthToken);
    reminders.forEach(function(reminder) {
      // Create options to send the message
      const options = {
        to: reminder.phoneNumber,
        from: keys.twilioNumber,
        /* eslint-disable max-len */
        body: reminder.message
        /* eslint-enable max-len */
      };

      // Send the message!
      client.messages.create(options, function(err, response) {
        if (err) {
          // Just log it for now
          console.error(err);
        } else {
          // Log the last few digits of a phone number
          let masked = reminder.phoneNumber.substr(
            0,
            reminder.phoneNumber.length - 5
          );
          masked += "*****";
          console.log(`Message sent to ${masked}`);
        }
      });
    });

    // Don't wait on success/failure, just indicate all messages have been
    // queued for delivery
    if (callback) {
      callback.call();
    }
  }
};

const Reminder = mongoose.model("reminder", ReminderSchema);
module.exports = Reminder;
