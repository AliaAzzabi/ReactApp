// routes.js
const express = require("express");
const cors = require("cors");
const path = require("path");
const { getSpecialty, addSpecialty, updateSpecialty, deleteSpecialty } = require('./specialité/controllerspecialité');
const {createDepartement, getAllDepartements, updateDepartement, deleteDepartement} = require ('./departement/controllerdepartement');
const {getMedecins, addMedecin, updateMedecin, deleteMedecin} = require ('./medecin/controllermedecin');
const { authenticateUser, addClient } = require('./authentification/controller');
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

router.post("/addClient", addClient);
router.post('/authenticate', authenticateUser);

router.use('/uploads', express.static(path.join(__dirname, 'uploads')));
router.get("/getMedecins", getMedecins);
router.post("/addMedecin", addMedecin); 
router.put("/updateMedecin/:id", updateMedecin);
router.delete("/deleteMedecin/:id", deleteMedecin);
  
module.exports = { router };
