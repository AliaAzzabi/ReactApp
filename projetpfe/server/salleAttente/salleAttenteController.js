
const RendezVous = require('../rdv/rdvModel');
const Aide = require('../aide/aideshema'); // Assurez-vous d'importer correctement le modèle Aide
const Patient = require('../patient/patientshema');
const SalleAttente =require('../salleAttente/salleAttenteModel');

const addpatientSalle = async (req, res) => {
  try {
    // Récupération de l'ID du médecin associé à la secrétaire connectée
    const aide = await Aide.findOne({ user: req.user._id });
    if (!aide) {
      return res.status(404).json({ error: 'Secrétaire introuvable' });
    }

    const medecinId = aide.medecin;

    // Vérifier si le nom du patient existe dans les rendez-vous pour aujourd'hui
    const today = new Date();
    const rendezVousToday = await RendezVous.find({ 
      medecin: medecinId,
      date: {
        $gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        $lt: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
      }
    }).populate('patient');

    console.log("Rendez-vous pour aujourd'hui :", rendezVousToday);

    const patientExiste = rendezVousToday.some(rendezVous => {
      // Vérification du nomPrenom du patient sans distinction de cas
      console.log("NomPrenom du patient dans la base :", rendezVous.patient.nomPrenom);
      console.log("NomPrenom fourni dans la requête :", req.body.nomPrenom);
      return rendezVous.patient.nomPrenom.toLowerCase() === req.body.nomPrenom.toLowerCase();
    });

    if (patientExiste) {
      // Vérification si le patient n'est pas déjà dans la salle d'attente
      const patientInSalleAttente = await SalleAttente.findOne({ nomPrenom: req.body.nomPrenom });
      if (patientInSalleAttente) {
        return res.status(409).json({ error: 'Ce patient est déjà dans la salle d\'attente' });
      }

      // Ajouter le patient à la liste d'attente ou effectuer toute autre action nécessaire
      await SalleAttente.create({ nomPrenom: req.body.nomPrenom });
      res.status(200).json({ message: 'Le patient a été ajouté à la liste d\'attente' });
    } else {
      res.status(404).json({ error: 'Aucun rendez-vous trouvé pour ce patient aujourd\'hui' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de la récupération des rendez-vous' });
  }
};





const supprimerPatientSalle = async (req, res) => {
  try {
    const { nomPrenom } = req.body;

    // Recherche du patient dans la liste d'attente
    const patient = await SalleAttente.findOne({ nomPrenom });
    if (!patient) {
      return res.status(404).json({ error: 'Patient non trouvé dans la liste d\'attente' });
    }

    // Suppression du patient de la liste d'attente
    await SalleAttente.deleteOne({ nomPrenom });

    res.status(200).json({ message: 'Patient supprimé de la liste d\'attente avec succès' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de la suppression du patient de la liste d\'attente' });
  }
};

module.exports = {
  addpatientSalle,
  supprimerPatientSalle
};