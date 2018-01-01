// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const db_name = 'TodoApp';
const todos_collection = 'Todos';
const users_collection = 'Users';

MongoClient.connect('mongodb://localhost:27017/' + db_name, (err, db) => {
  if (err) {
    return console.log('Unable to connect to the mongodb server', err);
  }

  console.log('Connected to the mongo db server')
  const todos = db.collection(todos_collection);

  // findOneAndUpdate
  todos.findOneAndUpdate({
    _id: new ObjectID('5a1614c1bf6f089970a04cbe')
  }, {
    $set: {
      text: 'Learn Elm',
      completed: false
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  
  db.close();
});