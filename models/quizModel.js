const mongoose = require("mongoose");

// Define the schema for a quiz
const quizSchema = new mongoose.Schema({

    question:
    {
        type: String,
        required: true
    },

    options:
    {
        type: [String],
        required: true
    },

    rightAnswer:
    {
        type: Number,
        required: true
    },

    startDate:
    {
        type: Date,
        required: true
    },

    endDate:
    {
        type: Date,
        required: true
    },
});



// Create a model for a quiz
const Quiz = mongoose.model('Quiz', quizSchema);


moudule.exports = Quiz;