const express = require('express');
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
// const mysql = require("mysql")

const schoolRoutes = require('./api/routes/schools');
const classRoutes = require('./api/routes/classes');
const storyRoutes = require('./api/routes/stories');
const attendanceRoutes = require('./api/routes/attendance');
const badgeRoutes = require('./api/routes/badges');
const checkinRoutes = require('./api/routes/check-in');
const checkoutRoutes = require('./api/routes/check-out');
const eventRoutes = require('./api/routes/events');
const parentRoutes = require('./api/routes/parents');
const reportRoutes = require('./api/routes/reports');
const studentRoutes = require('./api/routes/students');
const teacherRoutes = require('./api/routes/teachers');
const userRoutes = require('./api/routes/users');

// // Create Connection
// const db = mysql.createConnection({
//     host : "localhost",
//     user : "root",
//     password : "dig001flam40."
//     // database : "db name"
    
// });

// //Connect
// db.connect((err) => {
//     if(err){
//         throw err;
//     }
//     console.log("Mysql Connected...")
// });

app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
     );
     if (req.method === "OPTIONS") {
         res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
         return res.status(200).json({});
     }
     next();
});


app.use('/schools', schoolRoutes);
app.use('/class', classRoutes);
app.use('/stories', storyRoutes);
app.use('/attendance', attendanceRoutes);
app.use('/badges', badgeRoutes);
app.use('/checkin', checkinRoutes); 
app.use('/checkout', checkoutRoutes);
app.use('/events', eventRoutes);
app.use('/parents', parentRoutes);
app.use('/reports', reportRoutes);
app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/users', userRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;