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

  // find all completed = false todos
  // todos.find({completed: false}).toArray()
  //   .then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     console.log('Unable to fetch todos ', err);
  //   })

    // find indivisual object
  // todos.find({ _id: new ObjectID('5a161ab5eb043511703ff643')}).toArray()
  //   .then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     console.log('Unable to fetch todos ', err);
  //   })

  // count all todos in the string
  todos.find().count()
    .then((count) => {
      console.log(`Todos count: ${count}`);
    }, (err) => {
      console.log('Unable to fetch todos ', err);
    })
  // db.close();
});