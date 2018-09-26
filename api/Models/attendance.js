const db = require('../../dbconnection');

const Attendance = {
    // endpoint to mark attendance
    addAttendance: function(Attendance, callback) {
        const dt = new Date();

        return db.query("INSERT INTO attendance (class, student, absent, present, date, time) VALUES(?,?,?,?,?,?)", [Attendance.class, Attendance.student, Attendance.absent, Attendance.present, Attendance.date, Attendance.time, dt], callback);
    },

    deleteAttendance: function(id, callback) {
        return db.query("DELETE FROM attendance WHERE attendance_id = ?", [id], callback);
    },

    updateAttendance: function(id, Attendance, callback) {
        return db.query("UPDATE attendance SET class= ?, student= ?, absent= ?, present= ?, date= ?, time= ?, WHERE attendance_id= ?", [Attendance.class, Attendance.student, Attendance.absent, Attendance.present, Attendance.date, Attendance.time, dt], callback);
    }

};

module.exports = Attendance;