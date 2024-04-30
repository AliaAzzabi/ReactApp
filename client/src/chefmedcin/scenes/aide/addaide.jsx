import React, { useState, useEffect }  from 'react';
import { addaides } from '../../../liaisonfrontback/operation';
const AddAide = () => {
    const customCardStyles = {
        marginBottom: '20px',
        marginLeft: '20px',
        marginRight: '20px',
    };
    const customFormStyles = {
        marginLeft: '90px',
        marginRight: '90px',
    };

    const [aide, setAide] = useState({
        nomPrenom: '',
        email: '',
        cin: '',
        telephone: '',
        password: '',
        sexe: '',
        dateNaissance: '',
        adresse: '',
        dateAdhesion: '',
        role:'',
        image:'',
       
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
        role: '',
        image:'',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAide({ ...aide, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const requiredFields = ['nomPrenom', 'email', 'cin', 'telephone', 'password', 'sexe', 'dateNaissance', 'adresse', 'dateAdhesion', 'role','image'];
    
        const newErrors = {};
        requiredFields.forEach(field => {
            if (!aide[field]) {
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
    
        
        const aideWithId = { ...aide, id: Date.now() };
    
        addaides(aideWithId, (response) => {
            if (response && !response.error) {
                alert('Le aide a été ajouté avec succès');
                setAide({
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
                    role:'',
                    image:'',
                });
                window.location.href = '/assitantList';
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
                            <form action="#" id="form_sample_1" className="form-horizontal mx-auto" style={customFormStyles}  onSubmit={handleSubmit}>
                                <div className="form-body" >
                                <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Prénom & Nom</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="nomPrenom" placeholder="Entrer le prénom et le nom" className="form-control" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input type="email" name="email" placeholder="Adresse e-mail" className="form-control" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Mot de passe
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="password" name="pswd" data-required={1} placeholder="entrer le mot de passe" className="form-control input-height" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Confirmez le mot de passe
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="password" name="cnfmPwd" data-required={1} placeholder="Re-entrer le mot de passe" className="form-control input-height" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Désignation
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="text" name="Specialisation" data-required={1} placeholder="entrer votre spécialisation" className="form-control input-height" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Médecin lié
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="text" name="relatedDoctor" data-required={1} placeholder="nom du médecin" className="form-control input-height" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Sexe
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <select className="form-control input-height" name="gender">
                                                <option value>Sélectionner...</option>
                                                <option value="Category 1">Masculin</option>
                                                <option value="Category 2">Féminin</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Numéro de portable
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <input name="number" type="text" placeholder="numéro de portable" className="form-control input-height" /> </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Date de naissance
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <div className="input-append date">
                                                <div id="dateIcon2" className="input-group datePicker">
                                                    <input className="formDatePicker form-control" type="date" placeholder="Sélectionner une date.." data-input />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Adresse
                                            <span className="required red-star"> * </span>
                                        </label>
                                        <div className="col-sm-10">
                                            <textarea name="address" placeholder="adresse" className="form-control-textarea" rows={5} cols={140} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Photo de profil
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="file" className="default" multiple />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Éducation
                                        </label>
                                        <div className="col-sm-10">
                                            <textarea name="address" className="form-control-textarea" placeholder="Éducation" rows={5} cols={140} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="form-actions">
                                        <div className="col-lg-12 p-t-20 text-center">
                                            <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-circle btn btn-primary  mr-2">Soumettre</button>
                                            <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-circle btn btn-danger">Annuler</button>
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

export default AddAide;
