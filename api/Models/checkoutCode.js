const db = require('../../dbconnection');

const CheckOut = {
    // endpoint to mark Checkin
    addCheckOut: function(CheckOut, callback) {
        const dt = new Date();

        return db.query("INSERT INTO checkout_code (validity, code, parent, school, created) VALUES(?,?,?,?,?)", [CheckOut.validity, CheckOut.code, CheckOut.parent, CheckOut.school, CheckOut.created, dt], callback);
    },

    deleteCheckOut: function(id, callback) {
        return db.query("DELETE FROM checkout_code WHERE checkout_code_id = ?", [id], callback);
    },

    updateCheckOut: function(id, CheckOut, callback) {
        return db.query("UPDATE checkout_code SET validity= ?, code= ?, parent= ?, school= ?, created= ?, WHERE checkout_code_id= ?", [CheckOut.validity, CheckOut.code, CheckOut.parent, CheckOut.school, CheckOut.created, dt], callback);
    }

};

module.exports = CheckOut;