const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const commentsSchema = mongoose.Schema({
  comment: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: true
});



const workoutSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // referencing a model
    photoUrl: String,
    caption: {
      type: String, 
      required: true
    },
    likes: [likesSchema],
    comments: [commentsSchema]
  }, {
    timestamps: true
  });
 

module.exports = mongoose.model('Workout', workoutSchema);