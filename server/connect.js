const mongoose = require('mongoose');

const uriAtlas =
"mongodb+srv://Alya:Alya123@clustergestioncabinet.t19manr.mongodb.net/?retryWrites=true&w=majority&appName=ClusterGestionCabinet"

const connectToDatabase = async () => {
    try {
        await mongoose.connect(uriAtlas);
        console.log("Connexion à la base de données réussie");
        return mongoose.connection; 
    } catch (error) {
        console.error("Erreur lors de la connexion à la base de données:", error);
        throw error; 
    }
};

module.exports = connectToDatabase;
