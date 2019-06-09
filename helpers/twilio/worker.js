const Reminder = require("../../db/models/Reminders");

const notificationWorkerFactory = function() {
  return {
    run: function() {
      Reminder.sendNotifications();
    }
  };
};

module.exports = notificationWorkerFactory();