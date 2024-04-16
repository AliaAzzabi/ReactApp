import React, { useState } from 'react';

const AddPayement = () => {
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
                                    <header>Informations de base</header>
                                </div>
                                <div className="card-body" id="bar-parent">
                                    <form className="form-horizontal">
                                        <div className="form-body">
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Numéro de paiement
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <input type="text" name="paymentno" data-required={1} placeholder="entrez le numéro de paiement" className="form-control input-height" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Nom du patient
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <input type="text" name="patientname" data-required={1} placeholder="entrez le nom du patient" className="form-control input-height" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Nom du docteur
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <select className="form-control input-height" name="select">
                                                        <option value>Sélectionner...</option>
                                                        <option value="Category 1">Dr. Rajesh</option>
                                                        <option value="Category 2">Dr. Sarah Smith</option>
                                                        <option value="Category 3">Dr. John Deo</option>
                                                        <option value="Category 3">Dr. Jay Soni</option>
                                                        <option value="Category 3">Dr. Jacob Ryan</option>
                                                        <option value="Category 3">Dr. Megha Trivedi</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Date de paiement
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <div className="input-append date">
                                                        <div id="dateIcon2" className="input-group datePicker">
                                                            <input className="formDatePicker form-control" type="date" placeholder="Sélectionner la date.." data-input />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Montant total
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <input name="number" type="text" placeholder="montant total" className="form-control input-height" /> </div>
                                            </div>
                                           
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Méthode de paiement
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <select className="form-control input-height" name="select">
                                                        <option value>Sélectionner...</option>
                                                        <option value="Category 1">Espèces</option>
                                                        <option value="Category 2">Chèque</option>
                                                        <option value="Category 3">Carte de crédit</option>
                                                        <option value="Category 3">Carte de débit</option>
                                                        <option value="Category 3">Virement bancaire</option>
                                                        <option value="Category 3">Assurance</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Statut du paiement
                                                    <span className="required"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <select className="form-control input-height" name="select">
                                                        <option value>Sélectionner...</option>
                                                        <option value="Category 1">Complet</option>
                                                        <option value="Category 2">En attente</option>
                                                        <option value="Category 3">Partiel</option>
                                                    </select>
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

export default AddPayement;
