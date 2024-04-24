//shemadepartement.js
const mongoose = require('mongoose');

const DepartementSchema = new mongoose.Schema({
    nom: String,
    nombreEmployes: Number,
    localisation: String,
    responsable: String,
    dateCreation: Date,
    description: String,

});

module.exports = mongoose.model('Departement', DepartementSchema);
