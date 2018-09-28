const mongoose = require('mongoose');
const User = new mongoose.Schema({
  first_name: String,
  last_name: String
});

module.exports = mongoose.model('User', User);
