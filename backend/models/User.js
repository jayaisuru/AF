const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // ✅ This is enough to create index
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // ✅ This is enough to create index
    trim: true,
    lowercase: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

// ❌ REMOVE this line if you have it
// userSchema.index({ email: 1 }); 
// ❌ Also fix this typo if it still exists:
// userSchema.index({ ussername: 1 });

module.exports = mongoose.model('User', userSchema);
