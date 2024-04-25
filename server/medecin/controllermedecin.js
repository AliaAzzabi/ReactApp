const Medecin = require('./medecinshema'); 
const bcrypt = require('bcrypt');
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
   

    const { nom, département, spécialité, téléphone, email, password, dateadhésion, role } = req.body;

    
    

    const newImage = new Image({
      filename: req.file.filename,
      filepath: req.file.path,
    });
    const savedImage = await newImage.save();

    const newMedecin = new Medecin({
      nom: nom,
      département: département,
      spécialité: spécialité,
      téléphone: téléphone,
      email: email,
      password: password, 
      dateadhésion: dateadhésion,
      role: role,
      image: savedImage._id,
    });

    const savedMedecin = await newMedecin.save();

    res.status(201).json({
      _id: savedMedecin._id,
      nom: savedMedecin.nom,
      département: savedMedecin.département,
      spécialité: savedMedecin.spécialité,
      téléphone: savedMedecin.téléphone,
      email: savedMedecin.email,
      password : password, 
      dateadhésion: savedMedecin.dateadhésion,
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
  const { nom, département, spécialité, téléphone, email, password, dateadhésion, role } = req.body;
  try {
      let updateData = {
          nom,
          département,
          spécialité,
          téléphone,
          email,
          dateadhésion,
          role
      };

      
      if (password) {
          const hashedPassword = await bcrypt.hash(password, 10);
          updateData.password = hashedPassword;
      }

      const updatedMedecin = await Medecin.findByIdAndUpdate(req.params.id, updateData, { new: true });
      res.status(200).send({ message: 'Médecin mis à jour avec succès', data: updatedMedecin }); 
  } catch (err) {
      res.status(400).send({ error: `Erreur lors de la mise à jour du médecin : ${err.message}` });
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
