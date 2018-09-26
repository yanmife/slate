const express = require('express');
const router = express.Router();
const Class = require("../models/class");
const checkAuth = require('../middleware/check-auth');
const multer = require('multer');
const storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
const imageFilter = function (req, file, cb) {
    // accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/i)) {
        return cb(new Error('Invalid file format!'), false);
    }
    cb(null, true);
};
const upload = multer({ storage: storage, fileFilter: imageFilter})

const cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: 'xibudega', 
  api_key: 238147181577744, 
  api_secret: 'D4nlF-7nmE5ruBAnFuDJX3D7ymQ'
});


router.get('/:classId/details', (req, res, next) => {

    // if(req.params.userId) {

       Class.getClassDetail(req.params.classId, function(err, rows){
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

router.post('/', checkAuth, upload.single('image'), (req, res, next) => {
    cloudinary.v2.uploader.upload(req.file.path, function(err, result){
        if(err){
            req.flash('error', err.message);
            return res.redirect('back');
        }
        req.body.image = result.secure_url;
    Class.addClass(req.body, function(err, result, fields) {
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

router.get('/:classId/students', (req, res, next) => {

    // if(req.params.userId) {

       Class.getClassStudent(req.params.classId, function(err, rows){
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

router.get('/:classId/details', (req, res, next) => {

    // if(req.params.userId) {

       Class.getClassComplete(req.params.classId, function(err, rows){
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

router.get('/:studentId', (req, res, next) => {

    // if(req.params.userId) {

       Class.getStudentdetails(req.params.studentId, function(err, rows){
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

router.get('/report/:studentId', (req, res, next) => {

    // if(req.params.userId) {

       Class.getStudentReport(req.params.studentId, function(err, rows){
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

router.get('/post/:classId', (req, res, next) => {

    // if(req.params.userId) {

       Class.getAllNormalPost(req.params.classId, function(err, rows){
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

router.get('/:classId/announcement', (req, res, next) => {

    // if(req.params.userId) {

       Class.getClassAnnouncement(req.params.classId, function(err, rows){
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

router.get('/:postId/comment', (req, res, next) => {

    // if(req.params.userId) {

       Class.getPostComment(req.params.postId, function(err, rows){
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

router.get('/:classId/report', (req, res, next) => {

    // if(req.params.userId) {

       Class.getClassReport(req.params.classId, function(err, rows){
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

router.put('/:classId', (req, res, next) => {
    Class.updateClass(req.params.classId, req.body, function(err, rows){
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

router.delete('/:classId', (req, res, next) => {
    Class.deleteClass(req.params.classId, function(err, count) {

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