// require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8080;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Todos', { useNewUrlParser: true })
const connection = mongoose.connection;
connection.once('open', () => console.log('MongoDB database connection establoshed successfully'));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Routes
require("./routes/apiRoutes")(app);

const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
  app.listen(PORT, () => {
    console.log(
      "==>  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });

module.exports = app;
