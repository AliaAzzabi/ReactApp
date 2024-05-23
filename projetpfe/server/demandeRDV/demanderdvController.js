const DemandeRendezVous = require('../rdv/rdvModel');
const Aide = require('../aide/aideshema'); 
const Patient = require('../patient/patientshema');
const Medecin = require('../medecin/medecinshema');



const getAlldemandRendezVous = async (req, res) => {
  try {
    const aide = await Aide.findOne({ user: req.user._id });
    if (!aide) {
      return res.status(404).json({ error: 'Aide introuvable' });
    }

    const medecinId = aide.medecin;

    const demanderendezVous = await DemandeRendezVous.find({ medecin: medecinId })
      .populate({
        path: 'patient',
        select: 'nomPrenom email telephone'
      })
      .populate('medecin')
      .populate('secretaire');

    res.status(200).json(demanderendezVous);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de la récupération des demandes de rendez-vous' });
  }
};

const deleteDemandeRendezVous = async (req, res) => {
  try {
    const { id } = req.params;

    await RendezVous.findByIdAndDelete(id);

    res.status(200).json({ message: 'rendez-vous supprimé avec succès' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'erreur ' });
  }
};











module.exports = {
  getAlldemandRendezVous,
  deleteDemandeRendezVous,

};

