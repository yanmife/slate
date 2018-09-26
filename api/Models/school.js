const db = require('../../dbconnection');
const fs = require('fs');
const md5 = require('md5');


const School = {
    getAllSchools: function (callback) {
        db.query("SELECT * FROM schools", callback);
    },

    login: function(School, callback) {
        db.query("SELECT * FROM schools WHERE email = ? AND password = ?", [School.email, md5(School.password)], function(err, result, fields){
            if (result.length == 0) {
                return callback('Incorrect Login Credentials');
            } else{
                return callback(null, result);
            }
        });
    },

    addSchool: function(School, callback) {
        const dt = new Date();

        db.query("SELECT* FROM schools WHERE email = ?", [User.email], function(err, result, fields){
            if(result.length == 0) {
            return db.query("INSERT INTO schools (name, email, address, phone_number, paid, created, password, active, image) VALUES(?,?,?,?,?,?,?,?)", [School.name, School.email, School.address, School.paid, School.phone_number, School.active, School.image, md5(School.password), dt], function(result, blabla) {
            console.log(result)
            }. callback);
            }else {
                return callback('Email Already Used');
            }
        });
    },

    //enpoint to fetch all classes in a school
    getSchoolclass: function(id, callback) {
        db.query("SELECT class_id as classId, class_name as className, class_teacher as classTeacher, COUNT(class.student) FROM class INNER JOIN students ON students.class = class.class_id WHERE class.school_id = ? AND class.active = 1", [id], callback);
    },

    // endpoint to Get a list of the events in a school
    getSchoolEvent: function(id, callback) {
        db.query("SELECT * FROM events WHERE events.school = ? AND event.active=1", [id], callback);
    },

    // endpoint to Get a list of the badges in the school
    getSchoolBadge: function(id, callback) {
        db.query("SELECT * FROM badge WHERE badge.school = ? AND badge.active = 1", [id], callback);
    },

    // endpoint to Get a list of class teachers in a school
    // getSchoolTeacher: function(id, callback) {
    //     db.query("SELECT class_teacher as classTeacher, class_name, username, email, image FROM class INNER JOIN users ON class.class_teacher = users.user_id WHERE class.school_id = ? AND users.active = 1", [id], callback);
    // },

    // endpoint to fetch all the memories in a school "how will memories work"
    getSchoolMemories: function(id, callback) {
        db.query("SELECT memories_id, large_image, small_image, title, created FROM memories WHERE memories.school =?" [id], callback); 
    },

    // endpoint to fetch details of a specific memory
    getMemoryDetails: function(id, callback) {
        db.query("SELECT * FROM memories LEFT JOIN posts ON memories.post = posts.post_id WHERE memories.memories_id =?" [id], callback);
    },

    // endpoint to get a list of class-teachers in a school
    getClassTeachers: function(id, callback) {
        db.query("SELECT username as ClassTeacherName, image as ClassTeacherPic, class_name as ClassName, COUNT(students.name) FROM users INNER JOIN user_role ON user_role.user = users.user_id INNER JOIN class ON class.class_teacher = users.user_id INNER JOIN students ON students.class = class.class_id WHERE class.school_id =? AND user_role.role = 2 AND users.active = 1" [id], callback);
    },

    // endpoint to get a list of parents in a school
    getSchoolparents: function(id, callback) {
        db.query("SELECT * FROM users INNER JOIN user_role ON user_role.user = users.user_id LEFT JOIN parents ON parents.usersId = users.user_id WHERE parents.schoolz =? AND user_role.role = 3 AND users.active =1" [id], callback);
    },

    deleteSchool: function(id, callback) {
        return db.query("UPDATE schools SET active= 0 WHERE school_id = ?", [id], callback);
    },

    updateSchool: function(id, School, callback) {
        return db.query("UPDATE schools SET name= ?, phone_number= ?, email= ?, paid= ?, address= ?, password= ?, active= ?, WHERE school_id= ?", [School.name, School.phone_number, School.email, School.address, School.paid,  md5(School.password), id], callback);
    }


};
module.exports = School;