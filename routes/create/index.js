const express = require("express");


const route = express.Router();

const createQuizzes = require("../../controller/create/index.js");

route.post("/", createQuizzes);   //post route has been created to create a quiz....

module.exports = route;