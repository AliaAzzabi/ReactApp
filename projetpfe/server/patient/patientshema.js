const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
 
   
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
  
    bloodGroup: String,

    
});

module.exports = mongoose.model('Patient', patientSchema);
