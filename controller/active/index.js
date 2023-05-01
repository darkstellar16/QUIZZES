const Quiz = require("../../models/quizModel.js");


const activeQuizzes = async (req, res) => {
    const now = new Date();
    try {
        const quiz = await Quiz.findOne({ startDate: { $lte: now }, endDate: { $gte: now } });
        if (quiz) {
            res.json(quiz);
        } else {
            res.status(404).json({ message: 'No active quiz found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = activeQuizzes;