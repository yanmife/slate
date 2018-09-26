const db = require('../../dbconnection');

const Report = {
    // endpoint to mark Checkin
    addReport: function(Report, callback) {
        const dt = new Date();

        return db.query("INSERT INTO report (class, student, attendance, checkout,studentbadge, date) VALUES(?,?,?,?,?,?)", [Report.class, Report.student, Report.attendance, Report.checkout, Report.date, Report.studentbadge, dt], callback);
    },

    deleteReport: function(id, callback) {
        return db.query("UPDATE report SET active= 0, WHERE report_id = ?", [id], callback);
    },

    updateReport: function(id, Report, callback) {
        return db.query("UPDATE report SET class= ?, student= ?, attendance= ?, checkout= ?, date= ?, studentbadge= ?, WHERE report_id= ?", [Report.class, Report.student, Report.attendance, Report.checkout, Report.date, Report.studentbadge, dt], callback);
    }

};

module.exports = Report;