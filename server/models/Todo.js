const mongoose = require('mongoose');

const Todo = new mongoose.Schema({
  title: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

module.exports = mongoose.model('Todo', Todo);
