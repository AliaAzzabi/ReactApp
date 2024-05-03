const mongoose = require('mongoose');

const { Schema } = mongoose;

const rendezVousSchema = new Schema({
  patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true }, // Référence à la collection User
  medecin: { type: Schema.Types.ObjectId, ref: 'Medecin', required: false }, // Référence à la collection Medecin
  date: { type: Date, required: true },
  status: { type: String, enum: ['planifie', 'en_cours', 'termine'], default: 'planifie' },
});

module.exports = mongoose.model('RendezVous', rendezVousSchema);
