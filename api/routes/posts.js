const express = require('express');
const router = express.Router();
const Post = require("../Models/post");

router.post('/', (req, res, next) => {
    Post.addPost(req.body, function(err, result, fields) {
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


router.put('/:postId', (req, res, next) => {
    Post.updatePost(req.params.postId, req.body, function(err, rows){
        if (err) {
            const response = {"_meta":{"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        }else {
            const data = req.body;
            
            const response = {"_meta":{"status_code": 200}, "data": data};

            res.send(200);
            res.send(response);
        }
    });
});

router.delete('/:postId', (req, res, next) => {
    Post.deletePost(req.params.postId, function(err, count) {

        if (err) {
            const response = {"_meta": {"status_code": 417, "message": err}};

            res.status(417);
            res.send(response);
        } else {

            const response = {"_meta":{"status_code": 200}};

            res.status(200);
            res.send(response);
        }
    });
});

module.exports = router;