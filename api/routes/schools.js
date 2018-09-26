const express = require('express');
const router = express.Router();
const School = require("../models/school");
const Class = require("../models/class");
const Events = require("../models/event");
const Badge = require("../models/badge");
const Memory = require("../models/memory");
const Users = require("../models/users");
const UserRole = require("../models/userRole");
const Parents = require("../models/parent");
const Student = require("../models/student");
const Role = require("../models/role");
const checkAuth = require('../middleware/check-auth');

router.get('/', (req, res, next) => {
    School.getAllSchools(function(err, rows) {
        if(err) {
            const response = {"_meta": {"status_code":404, "message": err}};

            res.status(417);
            res.send(response);
        } else {
            
            const response = {"_meta": {"status_code": 200}, "data": rows};

            res.status(200);
            res.send(response);
        }
    });
});

router.get('/roles', function(req, res, next){
    Role.getAllroles(function(err, result) {
        if(err) {
            const response = {"_meta": {"status_code":404, "message": err}};

            res.status(417);
            res.send(response);
        } else {
            
            const response = {"_meta": {"status_code": 200}, "data": result};

            res.status(200);
            res.send(response);
        }
    });
});

router.get('/userRoles', function(req, res, next){
    UserRole.getAllUserRoles(function(err, result) {
        if(err) {
            const response = {"_meta": {"status_code":404, "message": err}};

            res.status(417);
            res.send(response);
        } else {
            
            const response = {"_meta": {"status_code": 200}, "data": result};

            res.status(200);
            res.send(response);
        }
    });
});

router.post('/login', function(req, res, next) {
    School.login(req.body, function(err, result){
        
        if(err) {

            const response = {"_meta": {"status_code": 404, "message": err}};

            res.status(404);
            res.send(response);
        } else {
            const response = {"_meta": {"status_code": 200}, "data": result};

            res.status(200);
            res.send(response);
        }
    });
});

router.post('/', upload.single('image'), (req, res, next) => {
    cloudinary.v2.uploader.upload(req.file.path, function(err, result){
        if(err){
            req.flash('error', err.message);
            return res.redirect('back');
        }
        req.body.image = result.secure_url;
    School.addSchool(req.body, function(err, result, fields) {
        if (err) {
            const response = {"_meta":{"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        }else {
            const data = req.body;
            data.id = result.insertId;

            const response = {"_meta":{"status_code": 200}, "data": data};

            res.send(200);
            res.send(response);
        }    
    });
    
    });
});

router.get('/:schoolId/class', (req, res, next) => {

    // if(req.params.userId) {

       School.getSchoolclass(req.params.schoolId, function(err, rows){
        if(err) {
            const response = {"_meta": {"status_code":404, "message": err}};

            res.status(417);
            res.send(response);
       } else {
        const response = {"_meta": {"status_code": 200}, "data": rows};

        res.status(200);
        res.send(response);
            }
        });
    //  }
    
});

router.get('/:schoolId/event', (req, res, next) => {

    // if(req.params.userId) {

       School.getSchoolEvent(req.params.schoolId, function(err, rows){
        if(err) {
            const response = {"_meta": {"status_code":404, "message": err}};

            res.status(417);
            res.send(response);
       } else {
        const response = {"_meta": {"status_code": 200}, "data": rows};

        res.status(200);
        res.send(response);
            }
        });
    //  }
    
});

router.get('/:schoolId/badge', (req, res, next) => {

    // if(req.params.userId) {

       School.getSchoolBadge(req.params.schoolId, function(err, rows){
        if(err) {
            const response = {"_meta": {"status_code":404, "message": err}};

            res.status(417);
            res.send(response);
       } else {
        const response = {"_meta": {"status_code": 200}, "data": rows};

        res.status(200);
        res.send(response);
            }
        });
    //  }
    
});

router.get('/:schoolId/memories', (req, res, next) => {

    // if(req.params.userId) {

       School.getSchoolMemories(req.params.schoolId, function(err, rows){
        if(err) {
            const response = {"_meta": {"status_code":404, "message": err}};

            res.status(417);
            res.send(response);
       } else {
        const response = {"_meta": {"status_code": 200}, "data": rows};

        res.status(200);
        res.send(response);
            }
        });
    //  }
    
});

router.get('/:memoryId', (req, res, next) => {

    // if(req.params.userId) {

       School.getMemoryDetails(req.params.memoryId, function(err, rows){
        if(err) {
            const response = {"_meta": {"status_code":404, "message": err}};

            res.status(417);
            res.send(response);
       } else {
        const response = {"_meta": {"status_code": 200}, "data": rows};

        res.status(200);
        res.send(response);
            }
        });
    //  }
    
});

router.get('/:schoolId/class-teacher', (req, res, next) => {

    // if(req.params.userId) {

       School.getClassTeachers(req.params.schoolId, function(err, rows){
        if(err) {
            const response = {"_meta": {"status_code":404, "message": err}};

            res.status(417);
            res.send(response);
       } else {
        const response = {"_meta": {"status_code": 200}, "data": rows};

        res.status(200);
        res.send(response);
            }
        });
    //  }
    
});

router.get('/:schoolId/parents', (req, res, next) => {

    // if(req.params.userId) {

       School.getSchoolparents(req.params.schoolId, function(err, rows){
        if(err) {
            const response = {"_meta": {"status_code":404, "message": err}};

            res.status(417);
            res.send(response);
       } else {
        const response = {"_meta": {"status_code": 200}, "data": rows};

        res.status(200);
        res.send(response);
            }
        });
    //  }
    
});

router.put('/:schoolId', (req, res, next) => {
    School.updateSchool(req.params.schoolId, req.body, function(err, rows){
        if (err) {
            const response = {"_meta":{"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        }else {
            cloudinary.v2.uploader.upload(req.file.path, function(err, result){
                if(err){
                    req.flash('error', err.message);
                    return res.redirect('back');
                }
                req.body.image = result.secure_url;
            const data = req.body;
            
            const response = {"_meta":{"status_code": 200}, "data": data};

            res.send(200);
            res.send(response);
        });
    }
    
    });
});

router.delete('/:schoolId', (req, res, next) => {
    School.deleteSchool(req.params.schoolId, function(err, count) {

        if (err) {
            const response = {"_meta": {"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        } else {
            cloudinary.v2.uploader.destroy(image);
            const response = {"_meta":{"status_code": 200}};

            res.status(200);
            res.send(response);
        }
    });
});

module.exports = router;