const mongoose = require('mongoose');

const Answer = new mongoose.Schema({
  answer: String,
  correct: Boolean,
});

const Question = new mongoose.Schema({
  problem: String,
  answers: [Answer],
  videos: Array
});

const Lecture = new mongoose.Schema({
  title: String,
  vlink: String,
  questions: [Question]
})

module.exports = mongoose.model('Lecture', Lecture);
