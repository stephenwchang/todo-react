// require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

const connectDb = () => {
  return mongoose.connect('mongodb://localhost/todos')
};

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
connectDb().then(async () => {
  app.listen(PORT, () => {
    console.log(
      "==>  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
module.exports = app;
