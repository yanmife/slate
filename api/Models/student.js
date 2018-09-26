const db = require('../../dbconnection');

const Student = {
    // endpoint to create a student
    addStudent: function(Student, callback) {
        const dt = new Date();

        return db.query("INSERT INTO students (name, address, parent_email, image, class, parent_phone_number) VALUES(?,?,?,?,?,?)", [Student.name, Student.address, Student.parent_email, Student.image, Student.parent_phone_number, dt], callback);
    },

    deleteStudent: function(id, callback) {
        return db.query("UPDATE students SET active= 0, WHERE student_id = ?", [id], callback);
    },

    updateStudent: function(id, Student, callback) {
        return db.query("UPDATE students SET name= ?, class= ?, parent_email= ?, image= ?, address= ?,parent_phone_number =?, WHERE student_id= ?", [Student.name, Student.address, Student.parent_email, Student.image, Student.parent_phone_number, dt], callback);
    }

};

module.exports = Student;