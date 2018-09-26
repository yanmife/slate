const express = require('express');
const router = express.Router();
const User = require("../Models/users");
const jwt = require('jsonwebtoken');

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


router.post('/register', upload.single('image'), (req, res, next) => {
    cloudinary.v2.uploader.upload(req.file.path, function(err, result){
        if(err){
            req.flash('error', err.message);
            return res.redirect('back');
        }
        req.body.image = result.secure_url;
    User.addUser(req.body, function(err, result, fields) {
        if (err) {
            const response = {"_meta":{"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        }else {
            const data = req.body;
            data.id = result.insertId;

            const response = {"_meta":{"status_code": 200}, "data": data};

            res.status(200).json({
                message: 'User Created'
            });
            res.send(response);
        }    
    });
    
    });
});

router.post('/login', function(req, res, next) {
    User.login(req.body, function(err, result){
        
        if(err) {

            const response = {"_meta": {"status_code": 404, "message": err}};

            res.status(404);
            res.send(response);
        } else {
            const token = jwt.sign({
                email: User.email,
                userId: User.id
            }, xibudega);
            const response = {"_meta": {"status_code": 200}, "data": result};

            res.status(200);
            res.send(response, token);
        }
    });
});


router.put('/:userId', (req, res, next) => {
    Class.updateClass(req.params.userId, req.body, function(err, rows){
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

router.delete('/:userId', (req, res, next) => {
    Class.deleteClass(req.params.userId, function(err, count) {

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