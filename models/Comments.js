const commentsSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  photoUrl: String
}, {
  timestamps: true
});
