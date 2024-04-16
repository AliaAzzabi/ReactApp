import React from 'react';
import { Link } from 'react-router-dom';
import ChartCard from '../../components/ChartCard';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const DepartList = () => {
    const tableContent = (
        <div className="container">
            <div className='row'>
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-info mb-2">
                    <Link to="/adddepart">  <AddCircleIcon /></Link>
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length" id="example4_length">
                        <label>Afficher :</label>
                        <select name="example_length" className="form-select form-select-sm">
                            <option value={50}>50</option>
                            <option value={20}>20</option>
                            <option value={10}>10</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 d-flex align-items-end justify-content-end">
                    <div id="example4_filter" className="dataTables_filter">
                        <label>Rechercher :</label>
                        <input type="search" className="form-control form-control-sm" placeholder="Rechercher..." aria-controls="example" />
                    </div>

                </div>

            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="table-wrap">
                        <table className="table table-striped table-bordered table-hover table-checkable order-column full-width">
                            <thead>
                                <tr>
                                    <th>Nom du département</th>
                                    <th>Nombre d'employés</th>
                                    <th>Date de création</th>
                                    <th>Localisation</th>
                                    <th>Responsable</th>
                                    <th>Description</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Service informatique</td>
                                    <td>20</td>
                                    <td>01/01/2020</td>
                                    <td>Paris</td>
                                    <td>John Doe</td>
                                  
                                    <td>Département responsable de la gestion des systèmes informatiques</td>
                                    <td>
                                        {/* Conteneur des boutons */}
                                        <div className="d-flex">
                                            {/* Icône de modification */}
                                            <Link to="/modifDepart"> 
                                            <button
                                                type="button"
                                                className="btn btn-outline-success  mr-1"
                                            >
                                                <EditTwoToneIcon />
                                            </button>
                                          </Link>
                                            {/* Icône de suppression */}
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger "
                                            >
                                                <RemoveCircleIcon />
                                            </button>
                                            
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ressources humaines</td>
                                    <td>15</td>
                                    <td>05/02/2019</td>
                                    <td>Lyon</td>
                                    <td>Jane Smith</td>
                                   
                                    <td>Département responsable de la gestion du personnel</td>
                                    <td>
                                        {/* Conteneur des boutons */}
                                        <div className="d-flex">
                                            {/* Icône de modification */}
                                         
                                            <button
                                                type="button"
                                                className="btn btn-outline-success  mr-1"
                                            >
                                                <EditTwoToneIcon />
                                            </button>
                                          
                                            {/* Icône de suppression */}
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger "
                                            >
                                                <RemoveCircleIcon />
                                            </button>
                                            
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Marketing</td>
                                    <td>25</td>
                                    <td>10/10/2018</td>
                                    <td>Marseille</td>
                                    <td>Michael Johnson</td>
                                   
                                    <td>Département responsable des activités marketing</td>
                                    <td>
                                        {/* Conteneur des boutons */}
                                        <div className="d-flex">
                                            {/* Icône de modification */}
                                         
                                            <button
                                                type="button"
                                                className="btn btn-outline-success  mr-1"
                                            >
                                                <EditTwoToneIcon />
                                            </button>
                                          
                                            {/* Icône de suppression */}
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger "
                                            >
                                                <RemoveCircleIcon />
                                            </button>
                                            
                                        </div>
                                    </td>
                                </tr>
                                {/* Ajoutez plus de lignes pour d'autres départements */}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <div className="row">

                <div class="col-12 col-md-8">
                    <div className="dataTables_info" id="example5_info" role="status" aria-live="polite">Affichage de 1 à 10 sur 20 options</div>
                </div>


                <div class="col-6 col-md-4">
                    <div className="dataTable_paginate paging_simple_numbers" id="example4_paginate">
                        <ul className="pagination">
                            <li className="page-item disabled" id="example4_previous">
                                <a className="page-link" href="#">Précédent</a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="#">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">Suivant</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="container">
            <div className="row">
                <ChartCard title="Liste des départements" chartId="departListChart" content={tableContent} />
            </div>
        </div>
    );
};

export default DepartList;
