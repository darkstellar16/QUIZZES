const Quiz = require("../../models/quizModel.js");

const resultQuizzes = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (quiz) {
            const result = { rightAnswer: quiz.rightAnswer };
            res.json(result);
        } else {
            res.status(404).json({ message: 'Quiz not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = resultQuizzes;