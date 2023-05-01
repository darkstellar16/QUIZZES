const quiz = require("../../models/quizModel.js");    



const createQuizzes = async (req, res) => {
    try {
        const Quiz = new quiz(req.body);
        const createQuiz = await Quiz.save();
        res.status(200).json(createQuiz);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};


module.exports = createQuizzes;