const express = require("express");


const route = express.Router();

const resultQuizzes = require("../../controller/result/index.js");

route.get("/", resultQuizzes);   //get route has been created to get the result of a quiz....

module.exports = route;