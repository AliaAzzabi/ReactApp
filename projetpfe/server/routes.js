// routes.js
const express = require("express");
const cors = require("cors");
const path = require("path");
const User = require('./models/userModel');
const { upload } = require("./image/upload");
const {createDepartement, getAllDepartements, updateDepartement, deleteDepartement,getDepartementById} = require ('./departement/controllerdepartement');
const { getSpecialty, addSpecialty, updateSpecialty, deleteSpecialty, getSpecialtyById } = require('./specialité/controllerspecialité');
const { getAide, addaides, updateAide, deleteAide, getAideById } = require('./aide/controlleraide');
const {getMedecins,  updateMedecin, deleteMedecin, getMedecinById, addmed} = require ('./medecin/controllermedecin');
const { getAdmin, addAdmin, updateAdmin, deleteAdmin, getAdminById } = require ('./admin/controlleradmin');
const  { getPatient, addPatient, updatePatient, deletePatient, gePatientById } = require('./patient/controllerpatient');
const {creerRendezVous, getAllRendezVous, getRendezVousById, updateRendezVous, deleteRendezVous}= require("./rdv/rdvController")
const requireAuth = require('./middleware/requireAuth');
const rdvController = require('./rdv/rdvController');
const router = express.Router();

router.use(cors());

router.get("/getAllspecialities", getSpecialty);
router.post("/addspecialite", addSpecialty); 
router.put("/updateSpecialite/:id", updateSpecialty);
router.get("/getSpecialtyById/:id", getSpecialtyById);
router.delete("/deleteSpecialite/:id", deleteSpecialty);

router.get("/getAllDepartement", getAllDepartements);
router.post("/addDepartement", createDepartement); 
router.put("/updateDepartement/:id", updateDepartement);
router.get("/getDepartementById/:id", getDepartementById);
router.delete("/deleteDepartement/:id", deleteDepartement);


router.get("/getAide", getAide);
router.post("/addaides",upload.single("image"), addaides); 
router.put("/updateAide/:id",upload.single("image"), updateAide);
router.get("/getAideById/:id", getAideById);
router.delete("/deleteAide/:id", deleteAide);

router.post("/addmed",upload.single("image"), addmed);
router.get("/getMedecins", getMedecins);
//router.post("/addMedecin",upload.single("image"), addMedecin); 
router.put("/updateMedecin/:id",upload.single("image"), updateMedecin);
router.get("/getMedecinById/:id", getMedecinById);
router.delete("/deleteMedecin/:id", deleteMedecin);
router.use('/uploads', express.static(path.join(__dirname, 'uploads')));

router.get("/getAdmin", getAdmin);
router.post("/addAdmin",upload.single("image"), addAdmin); 
router.put("/updateAdmin/:id",upload.single("image"), updateAdmin);
router.get("/getAdminById/:id", getAdminById);
router.delete("/deleteAdmin/:id", deleteAdmin);

router.get("/getPatient", getPatient);
router.post("/addPatient", addPatient); 
router.put("/updatePatient/:id", updatePatient);
router.get("/gePatientById/:id", gePatientById);
router.delete("/deletePatient/:id", deletePatient);


// Créer un rendez-vous (nécessite une authentification)
router.post('/creerRDV', requireAuth, creerRendezVous);
router.get('/AllRDV', getAllRendezVous);
router.get('/getRDVById/:id', getRendezVousById);
router.put('/modifierRDV/:id', updateRendezVous);
router.delete('/supprimerRDV/:id', deleteRendezVous);

router.post('/checkemail', async (req, res) => {
    try {
        const { email } = req.body;
        const existingUser = await User.findOne({ email: email });
        res.json({ exists: existingUser !== null });
    } catch (error) {
        console.error("Erreur lors de la vérification de l'existence de l'email :", error);
        res.status(500).json({ exists: false, error: "Erreur lors de la vérification de l'existence de l'email" });
    }
});

  
module.exports = { router };
