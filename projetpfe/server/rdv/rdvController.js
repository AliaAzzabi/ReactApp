const RendezVous = require('../rdv/rdvModel');
const Aide = require('../aide/aideshema'); 
const Patient = require('../patient/patientshema');
const Medecin = require('../medecin/medecinshema');
 
const createRendezVous = async (req, res) => {
  try {
    const { date,time, patientNom } = req.body;

    if (!date || !time) {
      return res.status(400).json({ error: 'La date du rendez-vous est requise' });
    }

    const patient = await Patient.findOne({ nomPrenom: patientNom });
    if (!patient) {
      return res.status(404).json({ error: `Patient '${patientNom}' introuvable` });
    }

    const aide = await Aide.findOne({ user: req.user._id });
    if (!aide) {
      return res.status(404).json({ error: 'Secrétaire introuvable' });
    }

    const secretaire = await Aide.findOne({ user: req.user._id }).populate('medecin');
    if (!secretaire || !secretaire.medecin) {
      return res.status(404).json({ error: 'médecin associé à la secrétaire introuvable' });
    }

    const rendezVous = new RendezVous({
      date,
      time, 
      patient: patient._id,
      medecin: secretaire.medecin._id,
      secretaire: aide._id
    });

    await rendezVous.save();

    res.status(201).json({ message: 'rendez-vous cree avec succes', rendezVous });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur ' });
  }
};

const getAllRendezVous = async (req, res) => {
  try {
    let medecinId;

    const aide = await Aide.findOne({ user: req.user._id });
    if (aide) {
      medecinId = aide.medecin;
    } else {
      const medecin = await Medecin.findOne({ user: req.user._id });
      if (!medecin) {
        return res.status(404).json({ error: 'utilisateur introuvable' });
      }
      medecinId = medecin._id;
    }

    const rendezVous = await RendezVous.find({ medecin: medecinId })
      .populate({
        path: 'patient',
        select: 'nomPrenom' 
      })
      .populate('medecin') 
      .populate('secretaire'); 

    
    res.status(200).json(rendezVous);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur ' });
  }
};




const updateRendezVous = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, time,patientNom } = req.body;

    if (!date || !time) {
      return res.status(400).json({ error: 'La date et l\'heure du rendez-vous sont requises' });
    }

    let rendezVous = await RendezVous.findById(id);
    if (!rendezVous) {
      return res.status(404).json({ error: 'Rendez-vous introuvable' });
    }

    const patient = await Patient.findOne({ nomPrenom: patientNom });
    if (!patient) {
      return res.status(404).json({ error: `Patient '${patientNom}' introuvable` });
    }

    const dateTime = new Date(date);
    const timeParts = time.split(':');
    dateTime.setHours(parseInt(timeParts[0]), parseInt(timeParts[1]));

    rendezVous.date = dateTime;
    rendezVous.patient = patient._id;
    rendezVous.time = time;
    await rendezVous.save();

    res.status(200).json({ message: 'rendez-vous mis a jour avec succes', rendezVous });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'erreur ' });
  }
};

const deleteRendezVous = async (req, res) => {
  try {
    const { id } = req.params;

    await RendezVous.findByIdAndDelete(id);

    res.status(200).json({ message: 'rendez-vous supprimé avec succès' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'erreur ' });
  }
};

const getRendezVousById = async (req, res) => {
  try {
    const { id } = req.params;

    
    const rendezVous = await RendezVous.findById(id)
      .populate('patient') 
      .populate('medecin') 
      .populate('secretaire'); 

    if (!rendezVous) {
      return res.status(404).json({ error: 'rendez-vous introuvable' });
    }

    res.status(200).json(rendezVous);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'erreur ' });
  }
};

const getAllRendezVousAjourdhui = async (req, res) => {
  try {
    const today = new Date();
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

    const rendezVousToday = await RendezVous.find({
      date: { $gte: startOfToday, $lt: endOfToday }
    }).populate('patient');

    return rendezVousToday;
  } catch (err) {
    console.error(err);
    throw new Error('Erreur lors de la récupération des rendez-vous d\'aujourd\'hui');
  }
};


module.exports = {
  createRendezVous,
  getAllRendezVous,
  updateRendezVous,
  deleteRendezVous,
  getRendezVousById,
  getAllRendezVousAjourdhui
};

