const mongoose = require('mongoose');
const Todo = require('../models/Todo');

module.exports = function(app) {

  app.get('/todos/json', function(req, res) {
    Todo.find(function(err, response) {
      if (err) {
        console.log(err);
      } else {
        res.json(response);
      }
    });
  });

  app.post('/todos/new', function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
      .then(todo => {
        res.send(todo);
      })
      .catch(err => console.log(err));
  });

  app.delete('/todos/delete/:id', function(req, res) {
    Todo.deleteOne({ _id: req.params.id }, function(err) {
      if (err) {
        console.log(err)
      } else {
        res.send('deleted');
      }
    });
  })

  app.put('/todos/update/:id', function(req, res) {
    Todo.findOne({  _id: req.params.id }, function(err, todo) {
      todo.completed = !todo.completed;
      todo.save(function(err, updatedTodo) {
        res.send('updated');
      });
    });
  });
};

// todo.save()
//   .then(todo => {
//     console.log('new test todo added successfully');
//   })
//   .catch(err => console.log(err));
