const Quiz = require("../../models/quizModel.js");
const moment = require("moment");

const resultQuizzes = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);

        const now = moment();
        const end = moment(quiz.endDate).add(5, 'minutes');

        if (!quiz) {
            res.status(404).json({ message: "Quiz not found" })
            return;
        }
        else {
            if (now.isBefore(end)) {
                res.status(403).json({ message: 'Quiz result not available yet' });
                return;
            }
            else {
                res.status(200).json({ rightAnswer: quiz.rightAnswer });
            }
        }


    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = resultQuizzes;
