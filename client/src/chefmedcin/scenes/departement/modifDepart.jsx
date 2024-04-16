import React, { useState } from 'react';

const ModifDepart = () => {
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
                                                    <input type="text" name="Nomdudépartement" data-required={1} placeholder="entrez le Nom du département" className="form-control input-height" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Nombre d'employés
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <input type="text" name="Nombreemployés" data-required={1} placeholder="entrez le Nombre d'employés" className="form-control input-height" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Date de création
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <div className="input-append date">
                                                        <div id="dateIcon2" className="input-group datePicker">
                                                            <input className="formDatePicker form-control" type="date" placeholder="Sélectionnez une date.."  />
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
                                                <label className="col-sm-2 col-form-label">Localisation
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <input type="text" name="Localisation" data-required={1} placeholder="entrez votre Localisation" className="form-control input-height" /> </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Numéro de téléphone portable
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <input name="number" type="text" placeholder="numéro de téléphone portable" className="form-control input-height" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Responsable
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                <input type="text" name="responsable" data-required={1} placeholder="Responsable .." className="form-control input-height" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Description
                                                    <span className="required red-star"> * </span>
                                                </label>
                                                <div className="col-sm-10">
                                                    <textarea name="address" placeholder="description" className="form-control-textarea" rows={5} cols={130} />
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
            </div>
        </div>
    );
};

export default ModifDepart;
