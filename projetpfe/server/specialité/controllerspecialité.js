

const Specialtie = require('./specialitiesSchema');

const getSpecialty = async (req, res) => {
    try {
        const specialties = await Specialtie.find({}); 
        res.send(specialties);
    } catch (err) {
        console.error("Erreur lors de la recherche des Specialties :", err);
        res.status(500).send("Erreur serveur");
    }
};

const getSpecialtyById = async (req, res) => {
    try {
        const specialtie = await Specialtie.findById(req.params.id);
        if (!specialtie) {
            return res.status(404).json({ message: "Specialtie non trouvé" });
        }
        res.status(200).json(specialtie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

  
const addSpecialty = async (req, res) => {
    try {
        
        const { nom, description } = req.body;
        console.log(req.body);
        const newSpecialties = new Specialtie({ nom, description });
        const savedSpecialties = await newSpecialties.save();
        res.status(201).json({
            nom: savedSpecialties.nom,
            description: savedSpecialties.description,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
};


const updateSpecialty = async (req, res) => {
    const { nom, description } = req.body;
    try {
        const updatedSpecialty = await Specialtie.findByIdAndUpdate(req.params.id, { nom, description }, { new: true });
        res.status(200).send({ message: 'Spécialité mise à jour avec succès', data: updatedSpecialty });
    } catch (err) {
        res.status(400).send({ error: `Erreur lors de la mise à jour de la spécialité: ${err.message}` });
    }
};

const deleteSpecialty = async (req, res) => {
    try {
        const deletedSpecialty = await Specialtie.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: 'Spécialité supprimée avec succès', data: deletedSpecialty });
    } catch (err) {
        res.status(400).send({ error: `Erreur lors de la suppression de la spécialité: ${err.message}` });
    }
};

module.exports = { getSpecialty, addSpecialty, updateSpecialty, deleteSpecialty, getSpecialtyById };
