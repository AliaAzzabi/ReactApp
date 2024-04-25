const mongoose = require("mongoose");

const MedecinSchema = mongoose.Schema({
    nomPrenom: String, 
    telephone: String,
    email: String,
    password: String,
    dateAdhesion: { type: Date, default: Date.now },
    role: String,
    departement: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Departement"
  },
    specialite: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Specialtie"
    },
    image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image"
    }
});

module.exports = mongoose.model("Medecin", MedecinSchema);
