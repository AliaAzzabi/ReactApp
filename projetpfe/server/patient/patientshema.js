const mongoose = require('mongoose');
const User = require("../models/userModel");
const patientSchema = new mongoose.Schema({
 
   
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
  
    bloodGroup: String,

    
});
patientSchema.post('findOneAndDelete', async function(Patient) {
    try {
        const userId = Patient.user;

        if (userId) {
            await User.findByIdAndDelete(userId);
        }
    } catch (error) {
        console.error("Erreur lors de la suppression de l'utilisateur associé:", error);
    }
});


module.exports = mongoose.model('Patient', patientSchema);