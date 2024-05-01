// routes.js
const express = require("express");
const cors = require("cors");
const path = require("path");
const { upload } = require("./image/upload");
const {createDepartement, getAllDepartements, updateDepartement, deleteDepartement,getDepartementById} = require ('./departement/controllerdepartement');
const { getSpecialty, addSpecialty, updateSpecialty, deleteSpecialty, getSpecialtyById } = require('./specialité/controllerspecialité');
const { getAide, addaides, updateAide, deleteAide, getAideById } = require('./aide/controlleraide');
const {getMedecins, addMedecin, updateMedecin, deleteMedecin, getMedecinById} = require ('./medecin/controllermedecin');
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

router.get("/getMedecins", getMedecins);
router.post("/addMedecin",upload.single("image"), addMedecin); 
router.put("/updateMedecin/:id",upload.single("image"), updateMedecin);
router.get("/getMedecinById/:id", getMedecinById);
router.delete("/deleteMedecin/:id", deleteMedecin);

  
module.exports = { router };
