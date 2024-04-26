// routes.js
const express = require("express");
const cors = require("cors");
const path = require("path");
const { upload } = require("./image/upload");
const { getSpecialty, addSpecialty, updateSpecialty, deleteSpecialty } = require('./specialité/controllerspecialité');
const {createDepartement, getAllDepartements, updateDepartement, deleteDepartement} = require ('./departement/controllerdepartement');
const {getMedecins, addMedecin, updateMedecin, deleteMedecin} = require ('./medecin/controllermedecin');
const { authenticateUser } = require('./user_auth/controller');
const router = express.Router();
router.use(cors());

router.get("/getAllspecialities", getSpecialty);
router.post("/addspecialite", addSpecialty); 
router.put("/updateSpecialite/:id", updateSpecialty);
router.delete("/deleteSpecialite/:id", deleteSpecialty);

router.get("/getAllDepartement", getAllDepartements);
router.post("/addDepartement", createDepartement); 
router.put("/updateDepartement/:id", updateDepartement);
router.delete("/deleteDepartement/:id", deleteDepartement);

router.post('/authenticate', authenticateUser);

router.use('/uploads', express.static(path.join(__dirname, 'uploads')));
router.get("/getMedecins", getMedecins);
router.post("/addMedecin",upload.single("image"), addMedecin); 
router.put("/updateMedecin/:id",upload.single("image"), updateMedecin);
router.delete("/deleteMedecin/:id", deleteMedecin);
  
module.exports = { router };
