const Patient = require('./patientshema');
const bcrypt = require('bcrypt');
const User = require("../models/userModel");

const expressHandler = require("express-async-handler");

 const gePatientById = expressHandler(async (req, res) => {
    try {
      const patient = await Patient.findById(req.params.id);
      res.status(200).json(patient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur interne du serveur" });

    }
  });
  
   const getPatient = expressHandler(async (req, res) => {
    try {
      const patients = await Patient.find();
      res.status(200).json(patients); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur interne du serveur" });

    }
  });

  const addPatient = expressHandler(async (req, res) => {
    try {
      const { cin, nomPrenom, sexe, telephone, email, dateNaissance,notifier } = req.body;
      const existingPatientByCIN = await Patient.findOne({ cin });
      if (existingPatientByCIN) {
        return res.status(400).json({ error: "Un patient avec ce numéro de CIN existe déjà." });
      }
      const existingPatientByName = await Patient.findOne({ nomPrenom });
      if (existingPatientByName) {
        return res.status(400).json({ error: "Un patient avec ce nom et prénom existe déjà." });
      }
      const newPatient = new Patient({
        cin: cin,
        nomPrenom: nomPrenom,
        sexe: sexe,
        telephone: telephone,
        email: email,
        dateNaissance: dateNaissance,
        notifier:notifier
      });
  
      const savedPatient = await newPatient.save();
  
      res.status(201).json(savedPatient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  });
  
  



 const updatePatient = async (req, res, next) => {
    try {
      const updatedPatient = await Patient.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedPatient);
    } catch (err) {
      next(err);
    }
  };



 const deletePatient = async (req, res, next) => {
    try {
      await Patient.findByIdAndDelete(req.params.id);
      res.status(200).json("patient has been deleted");
    } catch (err) {
      next(err);
    }
  };

module.exports = { getPatient, addPatient, updatePatient, deletePatient, gePatientById }; 
