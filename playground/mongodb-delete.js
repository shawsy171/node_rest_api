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

  // deleteMany - delete all
  // todos.deleteMany({text: 'Learn React'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne - this will find the first and delete that 
  // todos.deleteOne({text: 'Learn React'}).then((result) => { 
  //   console.log(result);
  // });

  // findOneAndDelete - this will delete one and return the object that is being deleted 
  todos.findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });
  db.close();
});