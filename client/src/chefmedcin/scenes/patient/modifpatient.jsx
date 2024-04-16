import React, { useState } from 'react';

const ModifPatient = () => {
    const customCardStyles = {
        marginBottom: '20px',
        marginLeft: '20px',
        marginRight: '20px',
    };
    const customFormStyles = {
        marginLeft: '90px',
        marginRight: '90px',
    };

    return (
        <div className="container">
            <div className="page-content-wrapper">
                <div className="page-content">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="card card-box">
                                <div className="card-head">
                                    <header>Modifier Docteur</header>
                                </div>
                                <div className="card-body" id="bar-parent">
                                    <form action="#" id="form_sample_1" className="form-horizontal">
                                        <div className="form-body">
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Prénom
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <input type="text" name="firstname" data-required={1} placeholder="entrez le prénom" className="form-control input-height" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Nom de famille
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <input type="text" name="lastname" data-required={1} placeholder="entrez le nom de famille" className="form-control input-height" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">E-mail
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                                                        </div>
                                                        <input type="text" className="form-control input-height" name="email" placeholder="Adresse e-mail" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Mot de passe
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <input type="password" name="pswd" data-required={1} placeholder="entrez le mot de passe" className="form-control input-height" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Confirmer le mot de passe
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <input type="text" name="cnfmPwd" data-required={1} placeholder="Retapez votre mot de passe" className="form-control input-height" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Départements
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <select className="form-control input-height" name="department">
                                                        <option value>Sélectionnez...</option>
                                                        <option value="Catégorie 1">Neurologie</option>
                                                     
                                                        <option value="Catégorie 3">Gynécologie</option>
                                                        <option value="Catégorie 3">Microbiologie</option>
                                                        <option value="Catégorie 3">Radiothérapie</option>
                                                        <option value="Catégorie 3">Pharmacie</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Genre
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <select className="form-control input-height" name="gender">
                                                        <option value>Sélectionnez...</option>
                                                        <option value="Catégorie 1">Homme</option>
                                                        <option value="Catégorie 2">Femme</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Numéro de téléphone 
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <input name="number" type="text" placeholder="numéro de téléphone portable" className="form-control input-height" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Date de naissance
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <div className="input-append date">
                                                        <div id="dateIcon2" className="input-group datePicker">
                                                            <input className="formDatePicker form-control" type="date" placeholder="Sélectionner une date.." data-input />
                                                            <span className="dateBtn">
                                                                <a className="input-button" title="toggle" data-toggle>
                                                                    <i className="icon-calendar" />
                                                                </a>
                                                                <a className="input-button" title="clear" data-clear>
                                                                    <i className="icon-close" />
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Adresse
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <textarea name="address" placeholder="adresse" className="form-control-textarea" rows={5} cols={120} />
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
                                                    <textarea name="address" className="form-control-textarea" placeholder="Éducation" rows={5} cols={120} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-actions">
                                            <div className="col-lg-12 p-t-20 text-center">
                                                <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-circle btn btn-primary  mr-2">Soumettre</button>
                                                <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-circle btn btn-danger">Annuler</button>
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

export default ModifPatient;
