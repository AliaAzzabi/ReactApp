const Patient = require('./patientshema');
const bcrypt = require('bcrypt');
const User = require("../models/userModel");

const expressHandler = require("express-async-handler");

const getPatient  = async (req, res) => {
    try {
        const patients = await Patient.find({}).populate('user')  ;
        res.send(patients);
    } catch (err) {
        console.error("Erreur lors de la recherche des patients :", err);
        res.status(500).send("Erreur serveur");
    }
};

const gePatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id)
            .populate('user');
          
        
        if (!patient) {
            return res.status(404).json({ message: "Patient non trouvée" });
        }
        
        res.status(200).json(patient);
    } catch (error) {
        
        res.status(500).json({ message: error.message });
    }
};

const addPatient = expressHandler(async (req, res) => {
    try {
        const { cin, sexe, nomPrenom, telephone,  email, password, dateAdhesion, dateNaissance, adresse,bloodGroup ,role } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ error: "Cet email est déjà utilisé." });
        }

       

        const newUser = new User({
            cin: cin,
            email: email,
            password: hashedPassword,
            nomPrenom: nomPrenom,
            telephone: telephone,
            dateAdhesion: dateAdhesion,
            sexe: sexe,
            dateNaissance: dateNaissance,
            adresse: adresse,
            role: role,
        });
        const savedUser = await newUser.save();

        const newPatient = new Patient({
            user: savedUser._id,
            bloodGroup: bloodGroup,
           
        });

        const savedPatient = await newPatient.save();

        res.status(201).json({
            _id: savedPatient._id,
            cin: savedUser.cin,
            nomPrenom: savedUser.nomPrenom,
            telephone: savedUser.telephone,
            email: savedUser.email,
            role: savedUser.role,
            dateAdhesion: savedUser.dateAdhesion,
            sexe: savedUser.sexe,
            dateNaissance:savedUser.dateNaissance,
            adresse:savedUser.adresse,
            bloodGroup: savedPatient.bloodGroup,
        
           
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
});


const updatePatient = async (req, res) => {
    const { cin, sexe, nomPrenom, telephone, email, password, dateAdhesion, dateNaissance, adresse, bloodGroup } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        let updateData = {
            nomPrenom,
            telephone,
            email,
            dateAdhesion,
            cin,
            sexe,
            password: hashedPassword,
            dateNaissance,
            adresse,
            bloodGroup,
            role,
        };

        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!updatedPatient) {
            return res.status(404).json({ error: 'Patient non trouvée' });
        }

       
        if (!updatedPatient.user) {
            return res.status(404).json({ error: 'Utilisateur associé non trouvé' });
        }

        const updatedUser = await User.findByIdAndUpdate(updatedPatient.user, {
            nomPrenom,
            telephone,
            email,
            hashedPassword,
            sexe,
            cin,
            dateAdhesion,
            bloodGroup,
            dateNaissance,
            adresse,
            role,
        });

        if (updatedUser) {
            res.status(200).json({ message: 'Patient et utilisateur mis à jour avec succès', data: { patient: updatedPatient, user: updatedUser } });
        } else {
            res.status(404).json({ error: 'Utilisateur non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ error: `Erreur lors de la mise à jour de l'aide : ${err.message}` });
    }
};



const deletePatient = async (req, res) => {
    try {
        const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: 'Patient supprimé avec succès', data: deletedPatient });
    } catch (err) {
        res.status(400).send({ error: `Erreur lors de la suppression du Patient : ${err.message}` });
    }
};

module.exports = { getPatient, addPatient, updatePatient, deletePatient, gePatientById }; 
