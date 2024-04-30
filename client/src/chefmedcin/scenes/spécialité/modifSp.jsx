import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { updateSpecialite, getSpecialtyById } from '../../../liaisonfrontback/operation';
const ModifSpecialiti = () => {
    let { id } = useParams()
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

    const fetchsSpecialite = async () => {
        try {
            const response = await getSpecialtyById(id, (data) => data);
            if (response && !response.error) {
                setspecialite(response);
            } else {
                console.error("Erreur lors de la récupération du specialite :", response && response.error);
            }
        } catch (error) {
            console.error("Erreur lors de la récupération du specialite :", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setspecialite({ ...specialite, [name]: value });
    };
   
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const callback = (response) => {
            if (response && !response.error) {
              alert('La specialite a été mis à jour avec succès');
              window.location.href = '/specialityList';
            } else {
              console.error("Erreur lors de la mise à jour du specialite :", response && response.error);
              alert('Une erreur s\'est produite lors de la mise à jour du specialite');
            }
          };
      
          await updateSpecialite(id, specialite, callback);
        } catch (error) {
          console.error("Erreur lors de la mise à jour du specialite :", error);
          alert('Une erreur s\'est produite lors de la mise à jour du specialite');
        }
      };
    useEffect(() => {
        fetchsSpecialite();
    }, [id]);


    return (
        <div className="container">
            <div className="page-content-wrapper">
                <div className="page-content">

                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="card card-box">
                                <div className="card-head">
                                    <header>Modifier Spécialité</header>

                                </div>
                                <div className="card-body" id="bar-parent">
                                    <form action="#" id="form_sample_1" className="form-horizontal">
                                        <div className="form-body">
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Nom de la spécialité
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <input type="text" name="nom" data-required={1}className="form-control input-height"  
                                                      value={specialite.nom}
                                                        onChange={handleChange} />
                                                </div>
                                            </div>
                                         
                                         
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Description
                                                <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <textarea name="description" className="form-control-textarea" placeholder="Description" rows={5} cols={145} 
                                                    
                                                    value={specialite.description}
                                                        onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="form-actions">
                                                <div className="col-lg-12 p-t-20 text-center">
                                                    <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-circle btn btn-primary  mr-2"  onClick={handleSubmit}>Soumettre</button>
                                                    <Link to="/specialityList">
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
            </div>
        </div>
    );
};

export default ModifSpecialiti;
