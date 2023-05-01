const express = require("express");

const route = express.Router();

const create = require("../routes/create/index.js")

const active = require("../routes/active/index.js")

const all = require("../routes/all/index.js")

const result = require("../routes/result/index.js")



route.use('/quizzes', create);        //create route

route.use('/quizzes/active', active);         // active quizzes route

route.use('/quizzes/all', all);      //all route

route.use('/quizzes/:id/result',result);  //result route


module.exports = route;