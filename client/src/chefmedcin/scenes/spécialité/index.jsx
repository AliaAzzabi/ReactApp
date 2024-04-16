import React from 'react';
import { Link } from 'react-router-dom';
import ChartCard from '../../components/ChartCard';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const SpecialiteList = () => {
    const tableContent = (
        <div className="container">
            <div className='row'>
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-info mb-2">
                    <Link to="/addSpeciality">    <AddCircleIcon /></Link>
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
                                    <th>Nom de la spécialité</th>
                                    <th>Description de la spécialité</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Médecine générale</td>
                                    <td>Spécialité médicale traitant les maladies de manière non chirurgicale.</td>
                                    <td>
                                        {/* Conteneur des boutons */}
                                        <div className="d-flex">
                                            {/* Icône de modification */}
                                            <Link to="/modifSpecialiti"> 
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
                                    <td>Chirurgie orthopédique</td>
                                    <td>Spécialité médicale qui traite les maladies, les traumatismes et les affections dégénératives du système musculo-squelettique.</td>
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
                                    <td>Pédiatrie</td>
                                    <td>Spécialité médicale qui se concentre sur la santé des nourrissons, des enfants et des adolescents.</td>
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
                <ChartCard title="Liste des spécialités" chartId="departListChart" content={tableContent} />
            </div>
        </div>
    );
};

export default SpecialiteList;
