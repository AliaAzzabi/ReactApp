import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ChartCard from '../../components/ChartCard';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { getAllspecialities, deleteSpecialite } from '../../../liaisonfrontback/operation';

const SpecialiteList = () => {
    const [specialites, setSpecialites] = useState([]);

    useEffect(() => {
        getAllspecialities((res) => {
            if (res.data) {
                setSpecialites(res.data);
            } else {
                console.error("Erreur lors de la récupération des specialites :", res.error);
            }
        });
    }, []);
    const handleDeleteSpecialite = (id) => {

        const confirmDelete = window.confirm("Voulez-vous vraiment supprimer ce specialite ?");
        if (confirmDelete) {
            deleteSpecialite(id, (res) => {
                if (res.data) {
                    setSpecialites(specialites.filter(specialite => specialite._id !== id));
                    console.log("Département supprimé avec succès");
                } else {
                    console.error("Erreur lors de la suppression du département :", res.error);
                }
            });
        }
    };


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
                                {specialites.map((specialite) => (
                                    <tr key={specialite._id}>
                                        <td>{specialite.nom}</td>
                                        <td>{specialite.description}</td>
                                        <td>
                                            {/* Conteneur des boutons */}
                                            <div className="d-flex">
                                                {/* Icône de modification */}
                                                <Link to={`/modifSpecialiti/${specialite._id}`}>
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
                                                    onClick={() => handleDeleteSpecialite(specialite._id)}
                                                >
                                                    <RemoveCircleIcon />
                                                </button>

                                            </div>
                                        </td>
                                    </tr>
                                ))}
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
