const mongoose = require ('mongoose');

module.exports = function(app) {

  app.get("/test", function(req, res) {
    res.send(
      {
        id: 1,
        title: 'test title',
        completed: false
      }
    );
  });

};
