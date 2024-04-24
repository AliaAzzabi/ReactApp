// routes.js
const express = require("express");
const cors = require("cors");
const { getSpecialty, addSpecialty, updateSpecialty, deleteSpecialty } = require('./specialité/controllerspecialité');
const {createDepartement, getAllDepartements, updateDepartement, deleteDepartement} = require ('./departement/controllerdepartement');
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
  
module.exports = { router };
