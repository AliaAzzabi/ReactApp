const mongoose = require("mongoose");

const MedecinSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
},
    image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Image"
  },
    dateAdhesion: { type: Date, default: Date.now },
    role:  { type:[ String], required: true },
    departement: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Departement"
  },
    specialite: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Specialtie"
    },
    
});

module.exports = mongoose.model("Medecin", MedecinSchema);
