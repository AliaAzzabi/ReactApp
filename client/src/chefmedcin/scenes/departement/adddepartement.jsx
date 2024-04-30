import React, { useState } from 'react';
import { addDepartement } from '../../../liaisonfrontback/operation';
import { Link } from 'react-router-dom';
const Adddepart = () => {
    const customCardStyles = {
        marginBottom: '20px',
        marginLeft: '20px',
        marginRight: '20px',
    };
    const customFormStyles = {
        marginLeft: '90px',
        marginRight: '90px',
    };

    const [departement, setDepartement] = useState({
        nom: '',
        nombreEmployes: '',
        localisation: '',
        responsable: '',
        dateCreation: '',
        description: '',
    });
    const [errors, setErrors] = useState({
        nom: '',
        nombreEmployes: '',
        localisation: '',
        responsable: '',
        dateCreation: '',
        description: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setDepartement({ ...departement, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const requiredFields = ['nom', 'nombreEmployes', 'responsable', 'dateCreation', 'description'];

        const newErrors = {};
        requiredFields.forEach(field => {
            if (!departement[field]) {
                newErrors[field] = `Please fill in the ${field} field.`;
            } else {
                newErrors[field] = '';
            }
        });
        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(error => error);
        if (hasErrors) {
            return;
        }
        addDepartement({ ...departement, id: Date.now() }, (response) => {
            if (response && !response.error) {
                alert('Le département a été ajouté avec succès');
                setDepartement({
                    nom: '',
                    nombreEmployes: '',
                    localisation: '',
                    responsable: '',
                    dateCreation: '',
                    description: '',
                });
                window.location.href = '/departList';
            } else {
                console.error("Erreur lors de l'ajout du département :", response && response.error);
                alert('Une erreur s\'est produite lors de l\'ajout du département');
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
                            <form action="#" id="form_sample_1" className="form-horizontal mx-auto" style={customFormStyles} onSubmit={handleSubmit} >
                                <div className="form-body">
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Nom du département
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="text" name="nom" value={departement.nom} onChange={handleChange} className="form-control input-height" required />
                                            
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Nombre d'employés
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="number" name="nombreEmployes" value={departement.nombreEmployes} onChange={handleChange} className="form-control input-height" required />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Localisation
                                        <span className="required red-star"> * </span></label>
                                        <div className="col-sm-10">
                                            <input type="text" name="localisation" value={departement.localisation} onChange={handleChange} className="form-control input-height" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Responsable
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="text" name="responsable" value={departement.responsable} onChange={handleChange} className="form-control input-height" required />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Date de création
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="date" name="dateCreation" value={departement.dateCreation} onChange={handleChange} className="form-control input-height" required />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Description
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <textarea name="description" value={departement.description} onChange={handleChange} className="form-control input-height" rows={5} cols={140} required></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-actions">
                                    <div className="col-lg-12 p-t-20 text-center">
                                        <button type="submit"
                                            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-circle btn btn-primary  mr-2"
                                           >Soumettre</button>
                                        <Link to="/departList">
                                            <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-circle btn btn-danger">
                                                Annuler
                                            </button>
                                        </Link>                      </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adddepart;