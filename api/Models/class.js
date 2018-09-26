const db = require('../../dbconnection');

const Class = {
    
    // endpoint to get more details about a single class
    getClassDetail: function (id, callback) {
        db.query("SELECT * FROM class LEFT JOIN posts ON posts.class = class.class_id WHERE posts.post_kind = 3 AND class.class_id = ? AND class.active = 1",[id], callback);
    },

    // endpoint to create a class
    addClass: function(Class, callback) {
        const dt = new Date();

        return db.query("INSERT INTO class (class_name, school_id, class_teacher, image, student, created) VALUES(?,?,?,?,?,?)", [Class.class_name, Class.school_id, Class.class_teacher, Class.image, Class.student, dt], callback);
    },

    //endpoint to Get a list of students in a class
    getClassStudent: function(id, callback) {
        db.query("SELECT students.student_id as studentId, name as studentName, image as studentImage FROM students WHERE students.class =? AND students.active = 1",[id], callback);
    },

    // endpoint to get all details for a single class
    getClassComplete: function(id, callback) {
        db.query("SELECT * FROM class LEFT JOIN posts ON post.class = class.class_id INNER JOIN post_type ON posts.post_type = post_type.post_type_id INNER JOIN post_kind ON posts.post_kind = post_kind.post_kind_id INNER JOIN users ON class.class_teacher = users.user_id WHERE class.class_id =? AND class.active =1" [id], callback);
    },

    // endpoint to Get more details about a single student
    getStudentdetails: function(id, callback) {
        db.query("SELECT * FROM students LEFT JOIN report ON report.student = students.student_id WHERE students.student_id =? AND students.active=1"[id], callback);
    },

    // endpoint to Get a list of daily reports for a student
    getStudentReport: function(id, callback) {
        db.query("SELECT * FROM report LEFT JOIN attendance ON report.student = attendance.student LEFT JOIN student_badges ON report.student = student_badges.student LEFT JOIN badge ON student_badges.badge = badge.badge_id WHERE report.student =? AND student_badges.student = ? AND attendance.student =?"[id], callback);
    },

    // endpoint to Get all the normal posts in a class
    getAllNormalPost: function(id, callback) {
        db.query("SELECT posts.post_id, users.image, users.username, posts.created, posts.post, comments.comment,comments.comment_id, COUNT(post_like.like) FROM posts INNER JOIN users ON posts.created_by = users.user_id INNER JOIN comments ON comments.post = posts.post_id LEFT JOIN post_like ON post_like.post = posts.post_id LEFT JOIN post_kind ON posts.post_kind = post_kind.post_kind_id WHERE posts.class =? AND posts.post_kind = 2" [id], callback);
    },

    // endpoint to Get all the announcement posts in a class
    getClassAnnouncement: function(id, callback) {
        db.query("SELECT * FROM posts INNER JOIN post_kind ON posts.post_kind = post_kind.post_kind_id WHERE posts.class= ? and posts.post_kind = 3" [id], callback);
    },

    // endpoint to Get all the comments of a post
    getPostComment: function(id, callback) {
        db.query("SELECT * FROM comments LEFT JOIN users ON comments.userz = users.user_id WHERE comments.post =?"[id], callback);
    },

    // endpoint to Get a list of daily reports for a class *will left join badgework*
    getClassReport: function(id, callback) {
        db.query("SELECT COUNT(student_badges.badge), COUNT(attendance.present), COUNT(attendance.absent), badges, date, created, points FROM report LEFT JOIN student_badges ON report.studentbadge = student_badges.student_badges_id LEFT JOIN badge ON student_badges.badge = badge.badge_id LEFT JOIN attendance ON report.attendance = attendance.attendance_id WHERE report.class =? AND report.active= 1" [id], callback);
    },

    deleteClass: function(id, callback) {
        return db.query("UPDATE class SET active= 0 WHERE class_id = ?", [id], callback);
    },

    updateClass: function(id, Class, callback) {
        return db.query("UPDATE class SET class_name= ?, school_id= ?, class_teacher= ?, image= ?, student= ?, active= ?, WHERE class_id= ?", [Class.class_name, Class.school_id, Class.class_teacher, Class.image, Class.student, dt], callback);
    }

    // 
};

module.exports = Class;