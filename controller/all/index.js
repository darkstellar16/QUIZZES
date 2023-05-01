const quiz = require("../../models/quizModel.js");

const allQuizzes = async (req, res) => {
    try {
        const quizzes = await quiz.find();
        res.json(quizzes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = allQuizzes;