const express = require("express");


const route = express.Router();

const allQuizzes = require("../../controller/all/index.js");

route.get("/", allQuizzes);   //get route has been  created to get all the quizzes.....

module.exports = route;