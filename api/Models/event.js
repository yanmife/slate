const db = require('../../dbconnection');

const Events = {
    // endpoint to checkout
    addEvent: function(Events, callback) {
        const dt = new Date();

        return db.query("INSERT INTO events (title, description, start_time, end_time, class, school, creator, reminder) VALUES(?,?,?,?,?,?,?,?)", [Events.title, Events.description, Events.start_time, Events.end_time, Events.class, Events.school, Events.creator, Events.reminder, dt], callback);
    },

    deleteEvent: function(id, callback) {
        return db.query("DELETE FROM events WHERE event_id = ?", [id], callback);
    },

    updateEvent: function(id, Events, callback) {
        return db.query("UPDATE events SET title= ?, description= ?, start_time= ?, end_time= ?, class= ?, school= ?, creator= ?, reminder= ?, WHERE event_id= ?", [Events.title, Events.description, Events.start_time, Events.end_time, Events.class, Events.school, Events.creator, Events.reminder, dt], callback);
    }

};

module.exports = Events;