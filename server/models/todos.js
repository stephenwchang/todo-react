const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({
  title: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

module.exports = mongoose.model('Todos', todosSchema);
