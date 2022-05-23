const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // referencing a model
    photoUrl: String,
    text: String,
  })
 

module.exports = mongoose.model('Todo', todoSchema);