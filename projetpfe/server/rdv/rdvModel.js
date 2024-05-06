const mongoose = require('mongoose');

// Définition du schéma de la table des rendez-vous
const rendezVousSchema = new mongoose.Schema({
  date: {
    type: Date, // Garde le type Date pour la date
    required: true
  },
  time: {
    type: String, // Utilise le type String pour l'heure
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
    required: true
  },
});

// Création du modèle de rendez-vous
const RendezVous = mongoose.model('RendezVous', rendezVousSchema);

module.exports = RendezVous;
