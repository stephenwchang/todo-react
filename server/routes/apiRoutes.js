const mongoose = require('mongoose');
const Todo = require('../models/Todo');

module.exports = function(app) {

  app.get("/test", function(req, res) {
    let todo = new Todo({ title: 'test title', completed: false });
    todo.save()
      .then(todo => {
        console.log('new test todo added successfully');
      })
      .catch(err => console.log(err));
    Todo.find(function(err, response) {
      if (err) {
        console.log(err);
      } else {
        console.log(response);
        res.json(response);
      }
    });
  });
};
