const db = require('../../dbconnection');

const Reminder = {
    // endpoint to mark Checkin
    addReminder: function(Reminder, callback) {
        const dt = new Date();

        return db.query("INSERT INTO reminder (remind_time) VALUES(?)", [Reminder.remind_time, dt], callback);
    },

    deleteReminder: function(id, callback) {
        return db.query("DELETE FROM reminder WHERE reminder_id = ?", [id], callback);
    },

    updateReminder: function(id, Reminder, callback) {
        return db.query("UPDATE reminder SET remind_time= ?, WHERE reminder_id= ?", [Reminder.remind_time, dt], callback);
    }

};

module.exports = Reminder;