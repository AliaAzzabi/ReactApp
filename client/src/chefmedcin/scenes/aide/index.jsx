import React, { useState, useEffect } from 'react';
import person1Image from './images/person_1.jpg';
import person2Image from './images/person_2.jpg';
import person3Image from './images/person_3.jpg';
import person4Image from './images/person_4.jpg';
import ChartCard from '../../components/ChartCard';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import PersonRemoveTwoToneIcon from '@mui/icons-material/PersonRemoveTwoTone';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Link } from 'react-router-dom';
import { getAllAide, deleteAide } from '../../../liaisonfrontback/operation';
import moment from 'moment';
const AssitantList = () => {
    const [aides, setaide] = useState([]);

    useEffect(() => {
        getAllAide((res) => {
            if (res.data) {
                setaide(res.data);
            } else {
                console.error("Erreur lors de la récupération des aides :", res.error);
            }
        });
    }, []);
    const handleDeleteAide = (id) => {

        const confirmDelete = window.confirm("Voulez-vous vraiment supprimer ce Aide ?");
        if (confirmDelete) {
            deleteAide(id, (res) => {
                if (res.data) {
                    setaide(aides.filter(aide => aide._id !== id));
                    console.log("Aide supprimé avec succès");
                } else {
                    console.error("Erreur lors de la suppression du Aide :", res.error);
                }
            });
        }
    };
    const tableContent = (
        <div className="container">
            <div className='row'>
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-info mb-2">
                        <Link to="/addAssistant"> <PersonAddAlt1Icon /></Link>
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
                        <table className="table table-bordered table-responsive-xl table-hover">

                            <thead>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th>Nom</th>

                                    <th>Poste</th>
                                    <th>Mobile</th>
                                    <th>Email</th>
                                    <th>Médecin lié</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {aides.map((aide) => (
                                    <tr key={aide._id}>
                                         <td>
                                        <label className="checkbox-wrap checkbox-primary">
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkmark" />
                                        </label>
                                    </td>


                                        <td className="d-flex align-items-center">
                                        {aide.image && (
                                                <img
                                                    src={`http://localhost:4000/${aide.image.filepath}`}
                                                    alt={aide.user.nomPrenom}
                                                    className="img"
                                                  
                                                />
                                            )}
                                            <div className="pl-3 email">
                                                <span>{aide.user.nomPrenom}</span>
                                                <span>Ajouté le : {moment(aide.user.dateAdhesion).format('YYYY-MM-DD')}</span>
                                            </div>
                                        </td>
                                        <td>{aide.role}</td>
                                        <td>{aide.user.telephone}</td>
                                        <td>{aide.user.email}</td>
                                        <td>Dr.  {aide.medecinlie.user.nomPrenom}</td>

                                        <td>
                                            {/* Conteneur des boutons */}
                                            <div className="d-flex">
                                                {/* Icône de modification */}
                                                <Link to="/modifAide"><button
                                                    type="button"
                                                    className="btn btn-outline-success  mr-1"
                                                >
                                                    <EditTwoToneIcon />
                                                </button></Link>
                                                {/* Icône de suppression */}
                                           
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-danger"
                                                        onClick={() => handleDeleteAide(aide._id)}
                                                    >
                                                        <PersonRemoveTwoToneIcon />
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
            <div className='row'>
                <h3>Gestion de l'attribution des autorisations</h3>
                <div className="col-sm-12">
                    <select className="form-control input-height" name="department">
                        <option value>Sélectionnez...</option>
                        <option value="Catégorie 1">Ajout</option>
                        <option value="Catégorie 3">Modification</option>
                        <option value="Catégorie 3">Suppression</option>
                        <option value="Catégorie 3">Consultation</option>
                        <option value="Catégorie 3">Ajout, Modification, Suppression, Consultation</option>
                    </select>
                </div>
                <div className="col-sm-12 mt-3">
                    <button className="btn btn-primary btn-block">Enregistrer</button>
                </div>
            </div>


        </div >
    );

    return (
        <div className="container">
            <div className="row">
                <ChartCard title="Liste des Assistants de régulation médicale" chartId="doctorListChart" content={tableContent} />
            </div>
        </div>
    );
};

export default AssitantList;
