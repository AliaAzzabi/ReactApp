//modifDepart.jsx
import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';


import { updateDepartement, getDepartementById } from '../../../liaisonfrontback/operation';
const ModifDepart = () => {
    
    let { id } = useParams();

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
        dateCreation: '',
        localisation: '',
        responsable: '',
        description: ''
    });

    const fetchDepartement = async () => {
        try {
            const response = await getDepartementById(id, (data) => data);
            if (response && !response.error) {
                setDepartement(response);
            } else {
                console.error("Erreur lors de la récupération du département :", response && response.error);
            }
        } catch (error) {
            console.error("Erreur lors de la récupération du département :", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDepartement({ ...departement, [name]: value });
    };
   
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const callback = (response) => {
            if (response && !response.error) {
              alert('Le département a été mis à jour avec succès');
              window.location.href = '/departList';
            } else {
              console.error("Erreur lors de la mise à jour du département :", response && response.error);
              alert('Une erreur s\'est produite lors de la mise à jour du département');
            }
          };
      
          await updateDepartement(id, departement, callback);
        } catch (error) {
          console.error("Erreur lors de la mise à jour du département :", error);
          alert('Une erreur s\'est produite lors de la mise à jour du département');
        }
      };
    useEffect(() => {
        fetchDepartement();
    }, [id]);


    return (
        <div className="container">
            <div className="page-content-wrapper">
                <div className="page-content">

                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="card card-box">
                                <div className="card-head">
                                    <header>Modifier département</header>

                                </div>
                                <div className="card-body" id="bar-parent">
                                    <form action="#" id="form_sample_1" className="form-horizontal">
                                        <div className="form-body">
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Nom du département
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <input
                                                        type="text"
                                                        name="nom"
                                                        data-required={1}

                                                        className="form-control input-height"
                                                        value={departement.nom}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Nombre d'employés
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <input
                                                        type="text"
                                                        name="nombreEmployes"
                                                        data-required={1}

                                                        className="form-control input-height"
                                                        value={departement.nombreEmployes}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Date de création
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <div className="input-append date">
                                                        <div id="dateIcon2" className="input-group datePicker">
                                                            <input
                                                                className="formDatePicker form-control"
                                                                type="date"
                                                                name="dateCreation"
                                                                value={departement.dateCreation}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Localisation
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <input type="text"
                                                        name="localisation"
                                                        data-required={1}
                                                        value={departement.localisation}
                                                        onChange={handleChange}
                                                        className="form-control input-height"
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Responsable
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <input type="text"
                                                        name="responsable"
                                                        data-required={1}
                                                        value={departement.responsable}
                                                        onChange={handleChange}
                                                        className="form-control input-height" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Description
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <textarea
                                                        name="description"

                                                        className="form-control-textarea"
                                                        rows={5}
                                                        cols={130}
                                                        value={departement.description}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-actions">
                                                <div className="col-lg-12 p-t-20 text-center">
                                                    <button
                                                        type="button"
                                                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-circle btn btn-primary mr-2"
                                                        onClick={handleSubmit}
                                                    >
                                                        Soumettre
                                                    </button>                                
                                                    <Link to="/departList">
                                                        <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-circle btn btn-danger">
                                                            Annuler
                                                        </button>
                                                    </Link>                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModifDepart;
