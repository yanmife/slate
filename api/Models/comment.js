const db = require('../../dbconnection');

const Comments = {
    // endpoint to create comment
    addComment: function(Comments, callback) {
        const dt = new Date();

        return db.query("INSERT INTO comment (body, user, post) VALUES(?,?,?)", [Comments.body, comments.user, comments.post, dt], callback);
    },

    deleteComment: function(id, callback) {
        return db.query("DELETE FROM comment WHERE comment_id = ?", [id], callback);
    },

    updateComment: function(id, Comments, callback) {
        return db.query("UPDATE posts SET body= ?, user= ?, post= ?, WHERE comment_id= ?", [Comments.body, comments.user, comments.post, dt], callback);
    }

};

module.exports = Comments;