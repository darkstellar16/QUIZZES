require("dotenv").config;     //for environment variables..
const cron = require('node-cron');
const express = require("express");         //required express
const app = express();


const datbaseConnection = require("./config/db.js");    // for database
datbaseConnection();

app.use(express.json());

const bodyParser = require("body-parser");         //for body-parser
app.use(bodyParser.urlencoded({ extended: true }));


const main = require("./routes/index.js")
app.use('/', main);




cron.schedule('* * * * *', () => {
    const now = new Date();
    Quiz.find({}, (err, quizzes) => {
        if (err) {
            console.log(`Error updating quiz status: ${err}`);
            return;
        }
        quizzes.forEach((quiz) => {
            if (now < quiz.startDate) {
                quiz.status = 'inactive';
            } else if (now <= quiz.endDate) {
                quiz.status = 'active';
            } else {
                quiz.status = 'finished';
            }
            quiz.save();
        });
    });
});

const port = process.env.PORT || 2000                //for host

app.listen(port, () => {
    console.log(`Server is up and Running and the port is ${port}`);
})