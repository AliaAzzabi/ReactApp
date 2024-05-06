const RendezVous = require('../rdv/rdvModel');
const Aide = require('../aide/aideshema'); // Assurez-vous d'importer correctement le modèle Aide
const Patient = require('../patient/patientshema');

const createRendezVous = async (req, res) => {
  try {
    const { date,time, patientNom } = req.body;

    // Vérification si le champ de la date est rempli
    if (!date || !time) {
      return res.status(400).json({ error: 'La date du rendez-vous est requise' });
    }

    // Recherche du patient dans la table des patients
    const patient = await Patient.findOne({ nomPrenom: patientNom });
    // Vérification si le patient existe
    if (!patient) {
      return res.status(404).json({ error: `Patient '${patientNom}' introuvable` });
    }

    // Récupération de l'utilisateur (secrétaire) actuel
    const aide = await Aide.findOne({ user: req.user._id });
    if (!aide) {
      return res.status(404).json({ error: 'Secrétaire introuvable' });
    }

    // Récupération du médecin lié à la secrétaire
    const secretaire = await Aide.findOne({ user: req.user._id }).populate('medecin');
    if (!secretaire || !secretaire.medecin) {
      return res.status(404).json({ error: 'Médecin associé à la secrétaire introuvable' });
    }

    // Création du rendez-vous associé à la secrétaire et au médecin
    const rendezVous = new RendezVous({
      date,
      time, 
      patient: patient._id,
      medecin: secretaire.medecin._id,
      secretaire: aide._id
    });

    // Enregistrement du rendez-vous dans la base de données
    await rendezVous.save();

    // Réponse avec succès
    res.status(201).json({ message: 'Rendez-vous créé avec succès', rendezVous });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de la création du rendez-vous' });
  }
};

const getAllRendezVous = async (req, res) => {
  try {
    // Récupération de l'ID du médecin associé à la secrétaire connectée
    const aide = await Aide.findOne({ user: req.user._id });
    if (!aide) {
      return res.status(404).json({ error: 'Secrétaire introuvable' });
    }

    const medecinId = aide.medecin;

    // Récupération de tous les rendez-vous avec les détails du patient (nom et prénom)
    const rendezVous = await RendezVous.find({ medecin: medecinId })
      .populate({
        path: 'patient',
        select: 'nomPrenom' // Spécifier les champs à récupérer
      })
      .populate('medecin') // Populer les détails du médecin
      .populate('secretaire'); // Populer les détails de la secrétaire

    // Réponse avec succès
    res.status(200).json(rendezVous);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de la récupération des rendez-vous' });
  }
};



const updateRendezVous = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, time,patientNom } = req.body;

    // Vérification si le champ de la date est rempli
    if (!date || !time) {
      return res.status(400).json({ error: 'La date et l\'heure du rendez-vous sont requises' });
    }

    // Recherche du rendez-vous par ID
    let rendezVous = await RendezVous.findById(id);
    if (!rendezVous) {
      return res.status(404).json({ error: 'Rendez-vous introuvable' });
    }

    // Recherche du patient dans la table des patients
    const patient = await Patient.findOne({ nomPrenom: patientNom });
    // Vérification si le patient existe
    if (!patient) {
      return res.status(404).json({ error: `Patient '${patientNom}' introuvable` });
    }

    const dateTime = new Date(date);
    const timeParts = time.split(':');
    dateTime.setHours(parseInt(timeParts[0]), parseInt(timeParts[1]));

    // Mise à jour des champs du rendez-vous
    rendezVous.date = dateTime;
    rendezVous.patient = patient._id;
    rendezVous.time = time;
    // Enregistrement des modifications dans la base de données
    await rendezVous.save();

    // Réponse avec succès
    res.status(200).json({ message: 'Rendez-vous mis à jour avec succès', rendezVous });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de la mise à jour du rendez-vous' });
  }
};

const deleteRendezVous = async (req, res) => {
  try {
    const { id } = req.params;

    // Suppression du rendez-vous par ID
    await RendezVous.findByIdAndDelete(id);

    // Réponse avec succès
    res.status(200).json({ message: 'Rendez-vous supprimé avec succès' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de la suppression du rendez-vous' });
  }
};

const getRendezVousById = async (req, res) => {
  try {
    const { id } = req.params;

    // Recherche du rendez-vous par ID
    const rendezVous = await RendezVous.findById(id)
      .populate('patient') // Populer les détails du patient
      .populate('medecin') // Populer les détails du médecin
      .populate('secretaire'); // Populer les détails de la secrétaire

    // Vérification si le rendez-vous existe
    if (!rendezVous) {
      return res.status(404).json({ error: 'Rendez-vous introuvable' });
    }

    // Réponse avec succès
    res.status(200).json(rendezVous);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de la récupération du rendez-vous' });
  }
};

module.exports = {
  createRendezVous,
  getAllRendezVous,
  updateRendezVous,
  deleteRendezVous,
  getRendezVousById
};