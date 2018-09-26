const db = require('../../dbconnection');

const PostLike = {
    // endpoint to mark Checkin
    addPostLike: function(PostLike, callback) {
        const dt = new Date();

        return db.query("INSERT INTO post_like (post, user, like) VALUES(?,?,?)", [PostLike.post, PostLike.user, PostLike.like, dt], callback);
    },

    deletePostLike: function(id, callback) {
        return db.query("DELETE FROM post_like WHERE post_like_id = ?", [id], callback);
    },

    updatePostLike: function(id, PostLike, callback) {
        return db.query("UPDATE post_like SET post= ?, user= ?, like= ?, WHERE post_like_id= ?", [PostLike.post, PostLike.user, PostLike.like, dt], callback);
    }

};

module.exports = PostLike;