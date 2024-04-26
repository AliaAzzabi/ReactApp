const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  cin: String,
  nomPrenom: String, 
  telephone: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  sexe: String,
  dateAdhesion: { type: Date, default: Date.now } 
});

module.exports = mongoose.model('User', userSchema);
