const db = require('../../dbconnection');

const Badge = { 
    // endpoint to mark Badge
    addBadge: function(Badge, callback) {
        const dt = new Date();

        return db.query("INSERT INTO badge (badge_name, school, image, active, created) VALUES(?,?,?,?,?,?)", [Badge.badge_name, Badge.school, Badge.image, Badge.active, Badge.created, dt], callback);
    },

    deleteBadge: function(id, callback) {
        return db.query("UPDATE badge SET active= 0, WHERE badge_id = ?", [id], callback);
    },

    updateBadge: function(id, Badge, callback) {
        return db.query("UPDATE badge SET badge_name= ?, school= ?, image= ?, created= ?, WHERE attendance_id= ?", [Badge.badge_name, Badge.school, Badge.image, Badge.active, Badge.created, dt], callback);
    }

};

module.exports = Badge;