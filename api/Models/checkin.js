const db = require('../../dbconnection');

const Checkin = {
    // endpoint to mark Checkin
    addCheckin: function(Checkin, callback) {
        const dt = new Date();

        return db.query("INSERT INTO check_in (class, student, created, attendance, check_in_time) VALUES(?,?,?,?,?)", [Checkin.class, Checkin.student, Checkin.created, Checkin.attendance, Checkin.check_in_time, dt], callback);
    },

    deleteCheckin: function(id, callback) {
        return db.query("DELETE FROM check_in WHERE check_in_id = ?", [id], callback);
    },

    updateCheckin: function(id, Checkin, callback) {
        return db.query("UPDATE check_in SET class= ?, student= ?, attendance= ?, created= ?, check_in_time= ?, WHERE check_in_id= ?", [Checkin.class, Checkin.student, Checkin.created, Checkin.attendance, Checkin.check_in_time, dt], callback);
    }

};

module.exports = Checkin;