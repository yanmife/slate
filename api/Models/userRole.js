const db = require('../../dbconnection');

const UserRole = {
    
    getAllUserRoles: function (callback) {
        db.query("SELECT * FROM user_role", callback);
    },

    addUserRole: function(UserRole, callback) {
        const dt = new Date();

        return db.query("INSERT INTO user_role (user, role) VALUES(?,?)", [UserRole.user, UserRole.role, dt], callback);
    },

    deleteUserRole: function(id, callback) {
        return db.query("UPDATE user_role SET isActive= 0 WHERE user_role_id = ?", [id], callback);
    },

    updateUserRole: function(id, UserRole, callback) {
        return db.query("UPDATE user_role SET user= ?, role= ?, isActive= ?, WHERE user_role_id= ?", [UserRole.user, UserRole.role, dt], callback);
    }

};

module.exports = UserRole;