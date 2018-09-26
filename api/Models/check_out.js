const db = require('../../dbconnection');

const CheckOut = {
    // endpoint to checkout
    addCheckOut: function(CheckOut, callback) {
        const dt = new Date();

        return db.query("INSERT INTO check_out (student, time, class, created) VALUES(?,?,?,?)", [CheckOut.student, CheckOut.time, CheckOut.class, CheckOut.created,dt], callback);
    },

    deleteCheckOut: function(id, callback) {
        return db.query("DELETE FROM check_out WHERE check_out_id = ?", [id], callback);
    },

    updateCheckOut: function(id, Attendance, callback) {
        return db.query("UPDATE attendance SET class= ?, student= ?, time= ?, created= ?, WHERE check_out_id= ?", [CheckOut.student, CheckOut.time, CheckOut.class, CheckOut.created,dt], callback);
    }

};

module.exports = CheckOut;