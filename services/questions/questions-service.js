const questions = require("./questions.json")

const createQuestion = () => {}
const createQuestionForQuiz = () => {}

const findQuestionsForQuiz = (qid) => {
    return questions.filter((question) => {
        return question.quizId === qid;
    })
}

const updateQuestion = () => {}
const deleteQuestion = () => {}

module.exports = {
    createQuestion, createQuestionForQuiz,
    findQuestionsForQuiz,
    updateQuestion, deleteQuestion
}