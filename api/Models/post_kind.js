const db = require('../../dbconnection');

const PostKind = {
    // endpoint to mark Checkin
    addPostKind: function(PostKind, callback) {
        const dt = new Date();

        return db.query("INSERT INTO post_kind (post_kind, is_active, created, updated) VALUES(?,?,?,?)", [PostKind.post_kind, PostKind.is_active, PostKind.created, PostKind.updated, dt], callback);
    },

    deletePostKind: function(id, callback) {
        return db.query("DELETE FROM post_kind WHERE post_kind_id = ?", [id], callback);
    },

    updatePostKind: function(id, PostKind, callback) {
        return db.query("UPDATE post_kind SET post_kind= ?, is_active= ?, created= ?, updated= ?, WHERE post_kind_id= ?", [PostKind.post_kind, PostKind.is_active, PostKind.created, PostKind.updated, dt], callback);
    }

};

module.exports = PostKind;