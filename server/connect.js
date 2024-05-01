const mongoose = require('mongoose');

const uriAtlas = "mongodb+srv://Alya:Alya123@clustergestioncabinet.t19manr.mongodb.net/GestionCabinetMédical?retryWrites=true&w=majority&appName=ClusterGestionCabinet";

const connect = async () => {
    try {
        const connection = await mongoose.connect(uriAtlas);
        console.log("Connexion à la base de données réussie");
        
        const db = connection.connection.db;

        // Vérifier si la collection specialties existe
        const specialtiesExists = await db.listCollections({ name: 'specialties' }).toArray();
        if (specialtiesExists.length > 0) {
            console.log("Connexion à la collection specialties réussie");
        } else {
            console.error("La collection specialties n'existe pas dans la base de données");
        }

        // Vérifier si la collection assistants existe
        const assistantsExists = await db.listCollections({ name: 'assistants' }).toArray();
        if (assistantsExists.length > 0) {
            console.log("Connexion à la collection assistants réussie");
        } else {
            console.error("La collection assistants n'existe pas dans la base de données");
        }

        // Vérifier si la collection medecins existe
        const medecinsExists = await db.listCollections({ name: 'medecins' }).toArray();
        if (medecinsExists.length > 0) {
            console.log("Connexion à la collection medecins réussie");
        } else {
            console.error("La collection medecins n'existe pas dans la base de données");
        }

        // Vérifier si la collection patients existe
        const patientsExists = await db.listCollections({ name: 'patients' }).toArray();
        if (patientsExists.length > 0) {
            console.log("Connexion à la collection patients réussie");
        } else {
            console.error("La collection patients n'existe pas dans la base de données");
        }
      
        // Vérifier si la collection patients existe
        const departmentsExists = await db.listCollections({ name: 'departements' }).toArray();
        if (departmentsExists.length > 0) {
            console.log("Connexion à la collection departments réussie");
        } else {
            console.error("La collection departments n'existe pas dans la base de données");
        }

        const usersExists = await db.listCollections({ name: 'users' }).toArray();
        if (usersExists.length > 0) {
            console.log("Connexion à la collection users réussie");
        } else {
            console.error("La collection departments n'existe pas dans la base de données");
        }
        
    } catch (error) {
        console.error("Erreur lors de la connexion à la base de données:", error);
        throw error; 
    }
};

module.exports = { connect };
