const db = require('../../dbconnection');

const Memory = {
    // endpoint to add memories
    addMemory: function(Memory, callback) {
        const dt = new Date();

        return db.query("INSERT INTO memories (large_image, small_image, title, post, school, created) VALUES(?,?,?,?,?,?)", [Memory.large_image, Memory.small_image, Memory.title, Memory.post, Memory.school, Memory.created, dt], callback);
    },

    deleteMemory: function(id, callback) {
        return db.query("DELETE FROM memories WHERE memories_id = ?", [id], callback);
    },

    updateMemory: function(id, Memory, callback) {
        return db.query("UPDATE memories SET large_image= ?, small_image= ?, title= ?, post= ?, school= ?, created= ?, WHERE memories_id= ?",[Memory.large_image, Memory.small_image, Memory.title, Memory.post, Memory.school, Memory.created, dt], callback);
    }

};

module.exports = Memory;