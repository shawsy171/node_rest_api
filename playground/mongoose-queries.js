const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/users');

var todo_id = '5a569cb82a9d3d9be87f1209';
var user_id = '5a1c907ee23fd32e45f9d6d6';

if (!ObjectID.isValid(todo_id)) {
  console.log('Id is not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Find One Todo', todo);
// }).catch((e) => console.log(e));

User.findById(user_id).then((user) => {
  if (!user) {
    return console.log('User ID not found');
  }
  console.log('Find One User', user);
}).catch((e) => console.log(e));