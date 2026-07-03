const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'UserRole' },
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);
