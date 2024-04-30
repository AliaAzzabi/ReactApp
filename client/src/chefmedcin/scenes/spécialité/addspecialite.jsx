import React, { useState } from 'react';
import { addspecialite } from '../../../liaisonfrontback/operation';
import { Link } from 'react-router-dom';
const Addsp = () => {
    const customCardStyles = {
        marginBottom: '20px',
        marginLeft: '20px',
        marginRight: '20px',
    };
    const customFormStyles = {
        marginLeft: '90px',
        marginRight: '90px',
    };
    const [specialite, setspecialite] = useState({
        nom: '',
        description: ''

    });
    const [errors, setErrors] = useState({
        nom: '',
        description: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setspecialite({ ...specialite, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const requiredFields = ['nom', 'description'];

        const newErrors = {};
        requiredFields.forEach(field => {
            if (!specialite[field]) {
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
        addspecialite({ ...specialite, id: Date.now() }, (response) => {
            if (response && !response.error) {
                alert('La specialite a été ajouté avec succès');
                setspecialite({
                    nom: '',
                    description: '',

                });
                window.location.href = '/specialityList';
            } else {
                console.error("Erreur lors de l'ajout du specialite :", response && response.error);
                alert('Une erreur s\'est produite lors de l\'ajout du specialite');
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
                                        <label className="col-sm-2 col-form-label">Nom de la spécialité
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="text" name="nom" className="form-control input-height" value={specialite.nom} onChange={handleChange} required/>
                                        
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Description de la spécialité
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <textarea name="description" className="form-control input-height" rows={5} cols={140} value={specialite.description} onChange={handleChange} required/>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="form-actions">
                                    <div className="col-lg-12 p-t-20 text-center">
                                        <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-circle btn btn-primary  mr-2">Soumettre</button>
                                        <Link to="/specialityList">
                                            <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-circle btn btn-danger">
                                                Annuler
                                            </button>
                                        </Link>                                     
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

export default Addsp;
