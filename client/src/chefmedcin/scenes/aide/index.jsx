import React from 'react';
import person1Image from './images/person_1.jpg';
import person2Image from './images/person_2.jpg';
import person3Image from './images/person_3.jpg';
import person4Image from './images/person_4.jpg';
import ChartCard from '../../components/ChartCard';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import PersonRemoveTwoToneIcon from '@mui/icons-material/PersonRemoveTwoTone';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Link } from 'react-router-dom';

const AssitantList = () => {

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
                                    <th>Date d'adhésion</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="alert" role="alert">
                                    <td>
                                        <label className="checkbox-wrap checkbox-primary">
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkmark" />
                                        </label>
                                    </td>
                                    <td className="d-flex align-items-center">

                                        <div className="img" style={{ backgroundImage: `url(${person1Image})`, width: '50px', height: '50px', backgroundSize: 'cover', backgroundPosition: 'center' }} />


                                        <div className="pl-3 email">
                                            <span>Dr. Mark Otto</span>
                                            <span>Ajouté le : 01/03/2020</span>
                                        </div>
                                    </td>

                                    <td>Infirmière</td>
                                    <td>1234567890</td>
                                    <td>markotto@email.com</td>
                                    <td>Dr. </td>
                                    <td className="status">01/03/2020</td>
                                    <td>
                                        {/* Conteneur des boutons */}
                                        <div className="d-flex">
                                            {/* Icône de modification */}
                                            <Link to="/modifAide">
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
                                                <PersonRemoveTwoToneIcon />
                                            </button>

                                        </div>
                                    </td>


                                </tr>
                                <tr className="alert" role="alert">
                                    <td>
                                        <label className="checkbox-wrap checkbox-primary">
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                        </label>
                                    </td>
                                    <td className="d-flex align-items-center">
                                        <div className="img" style={{ backgroundImage: `url(${person2Image})`, width: '50px', height: '50px', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                                        <div className="pl-3 email">
                                            <span>Dr. Jacob Thornton</span>
                                            <span>Ajouté le : 01/03/2020</span>
                                        </div>
                                    </td>

                                    <td>Réceptionniste</td>
                                    <td>9876543210</td>
                                    <td>jacobthornton@email.com</td>
                                    <td>Dr. </td>
                                    <td className="status">01/03/2020</td>
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
                                                <PersonRemoveTwoToneIcon />
                                            </button>
                                        </div>
                                    </td>

                                </tr>
                                <tr className="alert" role="alert">
                                    <td>
                                        <label className="checkbox-wrap checkbox-primary">
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                        </label>
                                    </td>
                                    <td className="d-flex align-items-center">
                                        <div className="img" style={{ backgroundImage: `url(${person3Image})`, width: '50px', height: '50px', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                                        <div className="pl-3 email">
                                            <span>Dr. Jacob Thornton</span>
                                            <span>Ajouté le : 01/03/2020</span>
                                        </div>
                                    </td>

                                    <td>Infirmière</td>
                                    <td>9876543210</td>
                                    <td>jacobthornton@email.com</td>
                                    <td>Dr. </td>
                                    <td className="status">01/03/2020</td>
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
                                                <PersonRemoveTwoToneIcon />
                                            </button>
                                        </div>
                                    </td>

                                </tr>
                                <tr className="alert" role="alert">
                                    <td>
                                        <label className="checkbox-wrap checkbox-primary">
                                            <input type="checkbox" />
                                            <span className="checkmark" />
                                        </label>
                                    </td>
                                    <td className="d-flex align-items-center">
                                        <div className="img" style={{ backgroundImage: `url(${person4Image})`, width: '50px', height: '50px', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                                        <div className="pl-3 email">
                                            <span>Dr. Jacob Thornton</span>
                                            <span>Ajouté le : 01/03/2020</span>
                                        </div>
                                    </td>

                                    <td>Infirmière</td>
                                    <td>9876543210</td>
                                    <td>jacobthornton@email.com</td>
                                    <td>Dr. </td>
                                    <td className="status">01/03/2020</td>
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
                                                <PersonRemoveTwoToneIcon />
                                            </button>
                                        </div>
                                    </td>

                                </tr>

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


        </div>
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
