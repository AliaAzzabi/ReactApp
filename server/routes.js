// routes.js
const express = require("express");
const cors = require("cors");
const { getSpecialty, addSpecialty, updateSpecialty, deleteSpecialty } = require('./specialité/controllerspecialité');
const {createDepartement, getAllDepartements, updateDepartement, deleteDepartement} = require ('./departement/controllerdepartement');
const { authenticateUser } = require('./authentification/controller');
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


router.get('/protected-route', authenticateUser, (req, res) => {
    res.json({ message: 'Protected route accessed successfully' });
  });
  
module.exports = { router };
