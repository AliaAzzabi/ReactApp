// usershema.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'doctor', 'assistant', 'patient'], required: false },
 
});

module.exports  = mongoose.model('Users', userSchema);

