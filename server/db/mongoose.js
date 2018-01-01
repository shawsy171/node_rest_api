const Mongoose = require('mongoose');

// mongodb
const db_name = 'TodoApp';

Mongoose.Promise = global.Promise;
Mongoose.connect(`mongodb://localhost:27017/${db_name}`,  { useMongoClient: true });

module.exports = {Mongoose};