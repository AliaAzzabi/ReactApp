const Medecin = require('./medecinshema');
const Departement = require('../departement/schemadepartment');
const Specialite = require('../specialité/specialitiesSchema');
const bcrypt = require('bcrypt');
const multer = require('multer');
const User = require("../user_auth/userschema");
const Image = require("../image/imagemodel");
const expressHandler = require("express-async-handler");



const getMedecins = async (req, res) => {
    try {
      
        const medecins = await Medecin.find({});
        res.send(medecins);
    } catch (err) {
        console.error("Erreur lors de la recherche des Médecins :", err);
        res.status(500).send("Erreur serveur");
    }
};

const addMedecin = expressHandler(async (req, res) => {
  try {
    const {cin, sexe, nomPrenom, departement, specialite, téléphone, email, password, role ,dateAdhesion} = req.body;

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
      cin:cin,
      email: email,
      password: password,
      nomPrenom: nomPrenom,
      téléphone: téléphone,
      dateAdhesion:dateAdhesion,
      sexe:sexe,
    });
    // Sauvegarder utilisateur
    const savedUser = await newUser.save();

    const newMedecin = new Medecin({
      user: savedUser._id, 
      departement: departementId,
      specialite: specialiteId,
      role: role,
      image: savedImage._id,
    });
   
    
    // Sauvegarder  méd
    const savedMedecin = await newMedecin.save();

    res.status(201).json({
      _id: savedMedecin._id,
      cin:savedMedecin.cin,
      nomPrenom: savedMedecin.nomPrenom,
      departement: departementId,
      specialite: specialiteId,
      téléphone: savedUser.téléphone, 
      email: savedUser.email, 
      password: password, 
      dateAdhesion: savedMedecin.dateAdhesion,
      sexe:savedMedecin.sexe,
      role: savedMedecin.role,
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
  const { cin, sexe, nomPrenom, departement, specialite, téléphone, email, password, dateAdhesion, role } = req.body;
  try {
    
    let updateData = {
      nomPrenom,
      téléphone, 
      email, 
      dateAdhesion,
      role,
      password,
      cin,
      sexe
    };

    
    const departementId = await Departement.findOne({ nom: departement }).select('_id');
    const specialiteId = await Specialite.findOne({ nom: specialite }).select('_id');

 
    if (!departementId || !specialiteId) {
      return res.status(400).json({ error: "Le département ou la spécialité spécifiée n'existe pas" });
    }

    // Mettre à jour les données avec les IDs de département et spécialité
    updateData.departement = departementId;
    updateData.specialite = specialiteId;

    // Vérifier si une nouvelle image a été téléchargée
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
      téléphone,
      email,
      password, 
      sexe,
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

module.exports = { getMedecins, addMedecin, updateMedecin, deleteMedecin }; 
