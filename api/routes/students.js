const express = require('express');
const router = express.Router();
const Student = require("../Models/student")
// const Parents = require("../Models/parent")
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

router.post('/',  upload.single('image'), (req, res, next) => {
    cloudinary.v2.uploader.upload(req.file.path, function(err, result){
        if(err){
            req.flash('error', err.message);
            return res.redirect('back');
        }
        req.body.image = result.secure_url;
        router.post('/',  upload.single('image'), (req, res, next) => {
            Student.addStudent(req.body, function(err, result, fields) {
                if (err) {
                    const response = {"_meta":{"status_code": 417, "message": err}};
        
                    res.status(417);
                    res.send(response);
                }else {
                    const data = req.body;
                    data.id = result.insertId;
                    
                    Parents.studentx, Parents.usersId, dt, Parents.schoolz
                    const studentInfo = {
                        studentx: data.id,
                        usersId: data.user_id,
                        schoolz: data.schoolId
                    }
                    Parents.addParents(data, (err, result) => {
                       if(err){
                            const response = {"_meta":{"status_code": 417, "message": err}};
        
                            res.status(417);
                            res.send(response);
                       }else{
                            const response = {"_meta":{"status_code": 200}, "data": data};
        
                            res.send(200);
                            res.send(response);
                       } 
                    });
                }
            });
        });
    });
});
//         });
//         }    
//     });
    
//     });
// });

router.put('/:studentId', (req, res, next) => {
    Student.updateStudent(req.params.studentId, req.body, function(err, rows){
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

router.delete('/:studentId', (req, res, next) => {
    Student.deleteStudent(req.params.studentId, function(err, count) {

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