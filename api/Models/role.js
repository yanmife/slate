const db = require('../../dbconnection');

const Role = {

    getAllroles: function (callback) {
        db.query("SELECT * FROM roles", callback);
    },
    
    addRole: function(Role, callback) {
        const dt = new Date();

        return db.query("INSERT INTO roles (role) VALUES(?)", [Role.role, dt], callback);
    },

    deleteRole: function(id, callback) {
        return db.query("DELETE FROM roles WHERE roles_id = ?", [id], callback);
    },

    updateRole: function(id, Role, callback) {
        return db.query("UPDATE roles SET role= ?, WHERE roles_id= ?", [Role.role, dt], callback);
    }

};

module.exports = Role;