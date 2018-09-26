const db = require('../../dbconnection');

const PostType = {
    // endpoint to mark Checkin
    addPostType: function(PostType, callback) {
        const dt = new Date();

        return db.query("INSERT INTO post_type (post_type, created, updated) VALUES(?,?,?)", [PostType.post_type, PostType.created, PostType.updated, dt], callback);
    },

    deletePostType: function(id, callback) {
        return db.query("UPDATE post_like SET is_active= 0 WHERE post_type_id = ?", [id], callback);
    },

    updatePostType: function(id, PostType, callback) {
        return db.query("UPDATE post_like SET post_type= ?, created= ?, updated= ?, WHERE post_type_id= ?", [PostType.post_type, PostType.created, PostType.updated, dt], callback);
    }

};

module.exports = PostType;