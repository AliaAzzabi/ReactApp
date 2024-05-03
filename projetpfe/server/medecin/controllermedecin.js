const Medecin = require('./medecinshema');
const Departement = require('../departement/schemadepartment');
const Specialite = require('../specialité/specialitiesSchema');
const bcrypt = require('bcrypt');
const multer = require('multer');
const User = require("../models/userModel");
const Image = require("../image/imagemodel");
const expressHandler = require("express-async-handler");


const getMedecins = async (req, res) => {
    try {
        const medecins = await Medecin.find({})
            .populate({
                path: 'user',
                select: 'nomPrenom telephone email dateAdhesion dateNaissance adresse sexe password role' 
            })
            .populate('departement')
            .populate('specialite')
            .populate('image');

        res.send(medecins);
    } catch (err) {
        console.error("Erreur lors de la recherche des Médecins :", err);
        res.status(500).send("Erreur serveur: " + err.message); 
    }
};

const getMedecinById = async (req, res) => {
    try {
        const medecin = await Medecin.findById(req.params.id)
            .populate('user')
            .populate('image')
            .populate('departement')
            .populate('specialite');
        
        if (!medecin) {
            return res.status(404).json({ message: "Medecin non trouvée" });
        }
        
        res.status(200).json(medecin);
    } catch (error) {
        
        res.status(500).json({ message: error.message });
    }
};



const addMedecin = expressHandler(async (req, res) => {
    try {
        const { cin, sexe, nomPrenom, departement, specialite, telephone, role, email, password, dateAdhesion, dateNaissance, adresse } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ error: "Cet email est déjà utilisé." });
        }

        let departementId = await Departement.findOne({ nom: departement }).select('_id');
        if (!departementId) {
            return res.status(400).json({ error: "Le département spécifié n'existe pas" });
        }

        let specialiteId = await Specialite.findOne({ nom: specialite }).select('_id');
        if (!specialiteId) {
            return res.status(400).json({ error: "La spécialité spécifiée n'existe pas" });
        }

        const newImage = new Image({
            filename: req.file.filename,
            filepath: req.file.path,
        });
        const savedImage = await newImage.save();

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

        const newMedecin = new Medecin({
            user: savedUser._id,
            departement: departementId,
            specialite: specialiteId,
           
            image: savedImage._id,
        });

        const savedMedecin = await newMedecin.save();

        res.status(201).json({
            _id: savedMedecin._id,
            cin: savedUser.cin,
            nomPrenom: savedUser.nomPrenom,
            departement: departementId,
            specialite: specialiteId,
            telephone: savedUser.telephone,
            email: savedUser.email,
            dateAdhesion: savedUser.dateAdhesion,
            dateNaissance:savedUser.dateNaissance,
            adresse:savedUser.adresse,
            sexe: savedUser.sexe,
            role: savedUser.role,
            image: {
                filename: savedImage.filename,
                filepath: savedImage.filepath,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
});

const updateMedecin = async (req, res) => {
    const { cin, sexe, nomPrenom, departement, specialite, telephone, email, password, dateAdhesion, role, dateNaissance, adresse } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        let updateData = {
            nomPrenom,
            telephone, 
            email,
            dateAdhesion,
            role,
            cin,
            sexe,
            password: hashedPassword, 
            dateNaissance: dateNaissance, 
            adresse: adresse,
        };

        const departementId = await Departement.findOne({ nom: departement }).select('_id');
        const specialiteId = await Specialite.findOne({ nom: specialite }).select('_id');

        if (!departementId || !specialiteId) {
            return res.status(400).json({ error: "Le département ou la spécialité spécifiée n'existe pas" });
        }

       
        updateData.departement = departementId;
        updateData.specialite = specialiteId;

       
        if (req.file) {
            const newImage = new Image({
                filename: req.file.filename,
                filepath: req.file.path,
            });
            const savedImage = await newImage.save();
            updateData.image = savedImage._id;
        }

        const updatedMedecin = await Medecin.findByIdAndUpdate(req.params.id, updateData, { new: true });

        const updatedUser = await User.findByIdAndUpdate(updatedMedecin.user, {
            nomPrenom,
            telephone, 
            email,
            hashedPassword,
            sexe,
            cin,
            dateAdhesion,
            dateNaissance, 
            adresse, 
            role,
        });

        if (updatedMedecin && updatedUser) {
            res.status(200).json({ message: 'Médecin et utilisateur mis à jour avec succès', data: { medecin: updatedMedecin, user: updatedUser } });
        } else {
            res.status(404).json({ error: 'Médecin ou utilisateur non trouvé' });
        }
    } catch (err) {
        res.status(500).json({ error: `Erreur lors de la mise à jour du médecin : ${err.message}` });
    }
};



const deleteMedecin = async (req, res) => {
    try {
        const deletedMedecin = await Medecin.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: 'Médecin supprimé avec succès', data: deletedMedecin });
    } catch (err) {
        res.status(400).send({ error: `Erreur lors de la suppression du médecin : ${err.message}` });
    }
};

module.exports = { getMedecins, addMedecin, updateMedecin, deleteMedecin, getMedecinById }; 
