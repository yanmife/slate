const db = require('../../dbconnection');
const fs = require('fs');
const md5 = require('md5');
const jwt = require('jsonwebtoken');



const User = {
    
    getAllUsers: function (callback) {
        db.query("SELECT * FROM users", callback);
    },

    login: function(User, callback) {
        db.query("SELECT * FROM users WHERE email = ? AND password = ?", [User.email, md5(User.password)], function(err, result, fields){
            if (result.length == 0) {
                return callback('Incorrect User Credentials');
            } else{
                return callback(null, result);
            }
        });
    },

    addUser: function(User, callback) {
        const dt = new Date();

        db.query("SELECT* FROM users WHERE email = ?", [User.email], function(err, result, fields){
            if(result.length == 0) {
        return db.query("INSERT INTO users (username, email, password, image, class, role) VALUES(?,?,?,?,?,?)", [User.username, User.email, User.password, User.image, User.class, User.role, dt], function(result, blabla) {
            console.log(result)
        }. callback);
        }else {
        return callback('User Email Already Used');
            }
        });
    },

    deleteUser: function(id, callback) {
        return db.query("UPDATE users SET active= 0, WHERE user_id = ?", [id], callback);
    },

    updateUser: function(id, User, callback) {
        return db.query("UPDATE users SET username= ?, email= ?, password= ?, image= ?, date= ?, class= ?, role= ?,  WHERE user_id= ?", [User.username, User.email, User.password, User.image, User.class, User.role, dt], callback);
    }

};

module.exports = User;