const db = require('../../dbconnection');

const Post = {
    // endpoint to checkout
    addPost: function(Post, callback) {
        const dt = new Date();

        return db.query("INSERT INTO posts (body, created_by, class, created, post_kind, post_type) VALUES(?,?,?,?,?,?)", [Post.body, Post.created_by, Post.class, Post.created, Post.post_kind, Post.post_type, dt], callback);
    },

    deletePost: function(id, callback) {
        return db.query("DELETE FROM posts WHERE post_id = ?", [id], callback);
    },

    updatePost: function(id, Post, callback) {
        return db.query("UPDATE posts SET body= ?, created_by= ?, class= ?, created= ?, post_kind= ?, post_type= ?, WHERE post_id= ?", [Post.body, Post.created_by, Post.class, Post.created, Post.post_kind, Post.post_type, dt], callback);
    }

};

module.exports = Post;