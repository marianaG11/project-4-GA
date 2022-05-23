const mongoose = require('mongoose');


const workoutSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // referencing a model
    photoUrl: String,
    caption: {
      type: String, 
      required: true
    },
  }, {
    timestamps: true
  });
 

module.exports = mongoose.model('Workout', workoutSchema);