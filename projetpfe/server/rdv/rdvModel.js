const mongoose = require('mongoose');

const rendezVousSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String, 
    required: true
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  medecin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Medecin',
    required: true
  },
  secretaire: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Aide',
    required: false
  },
});

const RendezVous = mongoose.model('RendezVous', rendezVousSchema);

module.exports = RendezVous;
