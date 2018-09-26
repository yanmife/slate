const db = require('../../dbconnection');

const StudentBadge = {
    // endpoint to mark Checkin
    addStudentBadge: function(StudentBadge, callback) {
        const dt = new Date();

        return db.query("INSERT INTO student_badges (points, student, badge) VALUES(?,?,?)", [StudentBadge.point, StudentBadge.student, StudentBadge.badge, dt], callback);
    },

    deleteStudentBadge: function(id, callback) {
        return db.query("DELETE FROM student_badges WHERE student_badges_id = ?", [id], callback);
    },

    updateStudentBadge: function(id, StudentBadge, callback) {
        return db.query("UPDATE student_badges SET points= ?, student= ?, badge= ?, WHERE student_badges_id = ?", [StudentBadge.points, StudentBadge.student, StudentBadge.badge, dt], callback);
    }

};

module.exports = StudentBadge;