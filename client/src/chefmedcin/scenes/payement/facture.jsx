import React, { useState } from 'react';
import logo from './logo.avif';
const Facture = () => {
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
                        <div className="col-md-12">
                            <div className="white-box">
                                <h3><b className="invoice-heading">FACTURE</b> </h3>
                                <hr className="invoice-heading" />
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="pull-left">
                                            <address>
                                                <img src={logo} alt="logo" className="logo-default" style={{ width: '100px', height: 'auto' }} />
                                                <p className="text-muted m-l-5">
                                                    D 103, Hôpital RedStar, <br /> En face de l'Hôtel de Ville, <br />
                                                    Route Sardar Patel, <br /> Ahmedabad - 380015
                                                </p>
                                            </address>
                                        </div>
                                        <div className="pull-right text-right invoice-heading">
                                            <address>
                                                <p className="addr-font-h3">À,</p>
                                                <p className="font-bold addr-font-h4">Jayesh Patel</p>
                                                <p className="text-muted m-l-30">
                                                    207, Appt. Prem Sagar, <br /> Près du Bureau des Impôts, <br />
                                                    Route Ashram, <br /> Ahmedabad - 380057
                                                </p>
                                                <p className="m-t-30">
                                                    <b>Date de la facture :</b> <i className="fa fa-calendar" /> 14 juillet
                                                    2017
                                                </p>
                                                <p>
                                                    <b>Date d'échéance :</b> <i className="fa fa-calendar" /> 24 juillet
                                                    2017
                                                </p>
                                            </address>
                                        </div>
                                    </div>
                                    <div className='invoice-heading justify-content-center '><b>Mr Mohamed</b></div>
                                    <div className="col-md-12">
                                        <div className="table-responsive m-t-40">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center">#</th>
                                                        <th>Nom de l'article</th>
                                                        <th className="text-right">Quantité</th>
                                                        <th className="text-right">Coût unitaire</th>
                                                        <th className="text-right">Frais</th>
                                                        <th className="text-right">Remise</th>
                                                        <th className="text-right">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="text-center">1</td>
                                                        <td>Frais de visite</td>
                                                        <td className="text-right">-</td>
                                                        <td className="text-right">-</td>
                                                        <td className="text-right">$100</td>
                                                        <td className="text-right">-</td>
                                                        <td className="text-right">$100</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">2</td>
                                                        <td>Médicaments</td>
                                                        <td className="text-right">10</td>
                                                        <td className="text-right">$15</td>
                                                        <td className="text-right">$150</td>
                                                        <td className="text-right">5</td>
                                                        <td className="text-right">$1000</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">3</td>
                                                        <td>Rapports de radiographie</td>
                                                        <td className="text-right">4</td>
                                                        <td className="text-right">$600</td>
                                                        <td className="text-right">$70</td>
                                                        <td className="text-right">5</td>
                                                        <td className="text-right">$1200</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">4</td>
                                                        <td>IRM</td>
                                                        <td className="text-right">2</td>
                                                        <td className="text-right">$245</td>
                                                        <td className="text-right">$125</td>
                                                        <td className="text-right">10</td>
                                                        <td className="text-right">$480</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">5</td>
                                                        <td>Autres frais</td>
                                                        <td className="text-right">-</td>
                                                        <td className="text-right">-</td>
                                                        <td className="text-right">-</td>
                                                        <td className="text-right">-</td>
                                                        <td className="text-right">$300</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-md-12 invoice-heading">
                                        <div className="pull-right m-t-30 text-right">
                                            <p>Montant total : $2600</p>
                                            <p>Remise : $100 </p>
                                            <p>TVA (10%) : $160 </p>
                                            <hr />
                                            <h3><b>Total :</b> $2760</h3>
                                        </div>
                                        <div className="clearfix" />
                                        <hr />
                                        <div className="text-right">
                                           
                                            <button onclick="javascript:window.print();" className="btn btn-default btn-outline" type="button"> <span><i className="fa fa-print" /> Imprimer</span> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Facture;
