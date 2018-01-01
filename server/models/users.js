const Mongoose = require('mongoose');

const users_collection = 'Users';

const User = Mongoose.model(users_collection, {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  age: {
    type: Number
  }
});

module.exports = {User}