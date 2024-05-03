const RendezVous = require('../rdv/rdvModel');
const Aide = require('../aide/aideshema');
const Patient = require('../patient/patientshema');

const creerRendezVous = async (req, res) => {
  // Vérifier si un utilisateur est connecté
  if (!req.user) {
    return res.status(401).json({ error: "Vous devez être connecté pour créer un rendez-vous." });
  }

  try {
    // Supposons que vous récupériez les informations nécessaires de la requête
    const { patientName, date } = req.body;

    // Recherche de l'aide associée au patient
    const aide = await Aide.findOne({ education: "example", user: req.user.id });

    // Vérifier si l'aide existe
    if (!aide) {
      return res.status(404).json({ error: "Aide non trouvée." });
    }

    // Vous pouvez maintenant accéder à une des propriétés de l'aide
    const medecinlie = aide.medecinlie;
 
    // Recherche du patient par son nom
    const patient = await Patient.findOne({ nomPrenom: patientName });
    if (!patient) {
      return res.status(404).json({ error: `Patient '${patientName}' introuvable` });
    }

    // Recherche du médecin par son nom
    const medecin = await User.findOne({ nomPrenom: medecinName });
    if (!medecin) {
      return res.status(404).json({ error: `Médecin '${medecinName}' introuvable` });
    }

    // Création du rendez-vous avec les identifiants uniques du patient et du médecin
    const rendezVous = await RendezVous.create({ patient: patient._id, date,medecinlie });

    // Vous pouvez utiliser userNom ici comme vous le souhaitez

    res.status(201).json({ rendezVous });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Obtenir tous les rendez-vous
const getAllRendezVous = async (req, res) => {
  try {
    const rendezVous = await RendezVous.find().populate('patient medecin specialite');
    res.status(200).json({ rendezVous });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtenir un rendez-vous par ID
const getRendezVousById = async (req, res) => {
  const { id } = req.params;

  try {
    const rendezVous = await RendezVous.findById(id).populate('patient medecin specialite');
    if (!rendezVous) {
      return res.status(404).json({ message: 'Rendez-vous non trouvé' });
    }
    res.status(200).json({ rendezVous });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Mettre à jour un rendez-vous
const updateRendezVous = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const rendezVous = await RendezVous.findByIdAndUpdate(id, updates, { new: true });
    if (!rendezVous) {
      return res.status(404).json({ message: 'Rendez-vous non trouvé' });
    }
    res.status(200).json({ rendezVous });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un rendez-vous
const deleteRendezVous = async (req, res) => {
  const { id } = req.params;

  try {
    const rendezVous = await RendezVous.findByIdAndDelete(id);
    if (!rendezVous) {
      return res.status(404).json({ message: 'Rendez-vous non trouvé' });
    }
    res.status(200).json({ message: 'Rendez-vous supprimé avec succès' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    creerRendezVous,
  getAllRendezVous,
  getRendezVousById,
  updateRendezVous,
  deleteRendezVous,
};
