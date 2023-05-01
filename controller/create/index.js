const quiz = require("../../models/quizModel.js");



const createQuizzes = async (req, res) => {
    try {
        const Quiz = new quiz({
            question: req.body.question,
            options: req.body.options,
            rightAnswer: req.body.rightAnswer,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            status: 'inactive'
        });
        const createQuiz = await Quiz.save();

        res.status(200).json(createQuiz);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};


module.exports = createQuizzes;