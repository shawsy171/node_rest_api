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

  todos.insertOne({
    text: 'Something to new do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }

    // console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  });

  // const users = db.collection(users_collection);

  // users.insertOne({
  //     name: 'Damien Shaw',
  //     age: 36,
  //     location: 'london'
  //   }, (err, result) => {
  //     if (err) {
  //       return console.log('Unable to insert user', err);
  //     }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.close();
});