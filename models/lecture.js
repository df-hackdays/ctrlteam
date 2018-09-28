const mongoose = require('mongoose');
const Question = new mongoose.Schema({
  title: String,
  choices: Array,
  answer: Boolean,
  videos: Array
})
const Lecture = new mongoose.Schema({
  title: String,
  questions: [Question] //10
});

module.exports = mongoose.model('Lecture', Lecture);
