const mongoose = require('mongoose');

const Lecture = new mongoose.Schema({
  lecture_id: mongoose.Schema.Types.ObjectId,
  completed: [mongoose.Schema.Types.ObjectId],
  count: Number,
  done: Boolean
});

const User = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  lectures: [Lecture]
});

module.exports = mongoose.model('User', User);
