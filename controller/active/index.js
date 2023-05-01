const moment = require("moment");
const Quiz = require("../../models/quizModel.js");


const activeQuizzes = async (req, res) => {
    const now = new moment();
    try {
        const quiz = await Quiz.findOne({ startDate: { $lte: now }, endDate: { $gte: now }, status: 'active' });
        if (quiz) {
            res.status(200).json(quiz);
            return
        } else {
            res.status(404).json({ message: 'No active quiz found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = activeQuizzes;