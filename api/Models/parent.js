const db = require('../../dbconnection');

const Parents = {
    
    addParents: function(Parents, callback) {
        const dt = new Date();

        return db.query("INSERT INTO parents (studentx, usersId, created, schoolz) VALUES(?,?,?,?)", [Parents.studentx, Parents.usersId, Parents.created, Parents.image, Parents.schoolz, dt], callback);
    },

    deleteParents: function(id, callback) {
        return db.query("UPDATE parents SET active= 0, WHERE parent_id = ?", [id], callback);
    },

    updateParents: function(id, Parents, callback) {
        return db.query("UPDATE parents SET studentx= ?, usersId= ?, created= ?, schoolz= ?, WHERE check_in_id= ?", [Parents.studentx, Parents.usersId, Parents.created, Parents.schoolz, dt], callback);
    }

};

module.exports = Parents;