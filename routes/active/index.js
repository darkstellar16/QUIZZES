const express = require("express");


const route = express.Router();

const activeQuizzes = require("../../controller/active/index.js");

route.get("/", activeQuizzes);   //get route has been created to retrieve a  active quiz....

module.exports = route;