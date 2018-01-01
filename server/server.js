const express = require('express');
const bodyParser = require('body-parser');

const {Mongoose} = require('./db/mongoose');
const {User} = require('./models/users');
const {Todo} = require('./models/todos');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {

  const todo = new Todo({
    text: req.body.text
  });

  todo
    .save()
    .then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    })
})

app.get('/todos', (req, res) => {
  Todo
    .find()
    .then((todos) => {
      res.send({todos});
    }, (e) => {
      res.status(400).send(e);
    })
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

module.exports = {app};









// mongodb

// const newTodo = new Todos({
//   text: 'build application'
// });

// newTodo.save().then((doc) => {
//   console.log(`this is the doc ${doc}`);
// }, (e) => {
//   console.log(`the error is ${e}`);
// })

// const otherTodo = new Todos({
//   text: 'Distribute Application',
//   completed: false,
//   completedAt: 3456675
// });

// otherTodo.save().then((doc) => {
//   console.log(`this is the doc ${doc}`);
// }, (e) => {
//   console.log(`the error is ${e}`);
// });


// const newUser = new Users({
//   name: 'Michael',
//   email: 'michael@somewhere.com',
//   age: 34
// });

// const newUser = new Users({
//   name: ''
// });

// newUser.save().then((doc) => {
//     console.log(`this is the doc ${doc}`);
// }, (e) => {
//   console.log(e)
// })