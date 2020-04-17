const mongoose = require('mongoose');
const db = require('../models');

//make the connection to the db using mongoose
mongoose.connect(process.env.MONGODB.URI || 'mongodb://localhost/budget', {
  useNewUrlParser: true
});