import React, { useState } from 'react';
import { addPatient } from '../../../liaisonfrontback/operation';
import { Link } from 'react-router-dom';
import axios from 'axios';
const AddPatient = () => {
    const customCardStyles = {
        marginBottom: '20px',
        marginLeft: '20px',
        marginRight: '20px',
    };
    const customFormStyles = {
        marginLeft: '90px',
        marginRight: '90px',
    };
    const [patient, setPatient] = useState({
        nomPrenom: '',
        email: '',
        cin: '',
        telephone: '',
        password: '',
        sexe: '',
        dateNaissance: '',
        adresse: '',
        dateAdhesion: '',
        bloodGroup: '',
    });
    const [errors, setErrors] = useState({
        nomPrenom: '',
        email: '',
        cin: '',
        telephone: '',
        password: '',
        sexe: '',
        dateNaissance: '',
        adresse: '',
        dateAdhesion: '',
        bloodGroup: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatient({ ...patient, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const requiredFields = ['nomPrenom', 'email', 'cin', 'telephone', 'password', 'sexe', 'dateNaissance', 'adresse', 'dateAdhesion', 'bloodGroup'];
    
        const newErrors = {};
        requiredFields.forEach(field => {
            if (!patient[field]) {
                newErrors[field] = `Veuillez remplir le champ ${field}.`;
            } else {
                newErrors[field] = '';
            }
        });
        setErrors(newErrors);
    
        const hasErrors = Object.values(newErrors).some(error => error);
        if (hasErrors) {
            return;
        }
    
        
        const patientWithId = { ...patient, id: Date.now() };
    
        addPatient(patientWithId, (response) => {
            if (response && !response.error) {
                alert('Le patient a été ajouté avec succès');
                setPatient({
                    nomPrenom: '',
                    email: '',
                    cin: '',
                    telephone: '',
                    password: '',
                    sexe: '',
                    dateNaissance: '',
                    adresse: '',
                    dateAdhesion: '',
                    bloodGroup: '',
                });
                window.location.href = '/patientList';
            } else {
                console.error("Erreur lors de l'ajout du Patient :", response && response.error);
                alert('Une erreur s\'est produite lors de l\'ajout du Patient');
            }
        });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <div className="card card-box" style={customCardStyles}>
                        <div className="card-head">
                            <header>Informations de base</header>
                        </div>
                        <div className="card-body" id="bar-parent">
                            <form action="#" id="form_sample_1" className="form-horizontal mx-auto" style={customFormStyles} onSubmit={handleSubmit}>
                                <div className="form-body">
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Nom & Prénom
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="text" name="nomPrenom" data-required={1} placeholder='Entrer votre Nom et Prenom' value={patient.nomPrenom} onChange={handleChange} className="form-control input-height" required />

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Email
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10 mb-2">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                                                </div>
                                                <input type="text" className="form-control input-height" placeholder='Entrer votre email' name="email" value={patient.email} onChange={handleChange} required />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Numéro de portable
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <input name="telephone" type="text" placeholder='Entrer votre téléphone' className="form-control input-height telephone" value={patient.telephone} onChange={handleChange} required />

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Blood Group
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <select className="form-control input-height" name="bloodGroup" value={patient.bloodGroup} onChange={handleChange} required>
                                                <option value="">Sélectionner...</option>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="B+">B+</option>
                                                <option value="B-">B-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Sexe
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <select className="form-control input-height" name="sexe" value={patient.sexe} onChange={handleChange} required>
                                                <option value="">Sélectionner...</option>
                                                <option value="Masculin">Masculin</option>
                                                <option value="Féminin">Féminin</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Mot de passe
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="password" name="password" data-required={1} placeholder="entrer le mot de passe"value={patient.password} onChange={handleChange} className="form-control input-height" />
                                        </div>
                                    </div>
                                 
                                   
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">CIN
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <input name="cin" type="text" placeholder='Entrer votre cin' className="form-control input-height telephone" value={patient.cin} onChange={handleChange} required />

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Date de naissance
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="date" name="dateNaissance" value={patient.dateNaissance} onChange={handleChange} className="form-control input-height" required />

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Date Adhesion
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="date" name="dateAdhesion" value={patient.dateAdhesion} onChange={handleChange} className="form-control input-height" required />

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Adresse
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <textarea name="adresse" placeholder="adresse..." className="form-control-textarea adresse" rows={5} cols={140} value={patient.adresse} onChange={handleChange} required />

                                        </div>
                                    </div>
                                  

                                    <div className="form-actions">
                                        <div className="col-lg-12 p-t-20 text-center">
                                            <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-circle btn btn-primary  mr-2">Soumettre</button>
                                            <Link to="/patientList">
                                                <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-circle btn btn-danger">
                                                    Annuler
                                                </button>
                                            </Link>                                        
                                       </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPatient;
