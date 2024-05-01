const mongoose = require("mongoose");
const User = require("../models/userModel");

const MedecinSchema = mongoose.Schema({
   
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image"
  },

  departement: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Departement"
  },
  specialite: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Specialtie"
  },

});
MedecinSchema.post('findOneAndDelete', async function(doc) {
  try {
    const userId = doc.user;

    if (userId) {
      await User.findByIdAndDelete(userId);
    }
  } catch (error) {
    console.error("Erreur lors de la suppression de l'utilisateur associé:", error);
  }
});


module.exports = mongoose.model("Medecin", MedecinSchema);
