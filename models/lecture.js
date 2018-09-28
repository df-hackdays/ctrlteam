const mongoose = require('mongoose');
const Question = new mongoose.Schema({
  title: String,
  choices: Array,
  answer: Boolean
})
const Lecture = new mongoose.Schema({
  title: String,
  questions: [Question]
});

module.exports = mongoose.model('Lecture', Lecture);
