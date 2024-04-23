import React, { useState } from 'react';
import { Box, Button, Modal, TextField, IconButton, Typography } from "@mui/material";
import { Cancel as CancelIcon } from '@mui/icons-material';
import Header from "../../components/Header";
import ChartCard from '../../../chefmedcin/components/ChartCard';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import PersonRemoveTwoToneIcon from '@mui/icons-material/PersonRemoveTwoTone';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Link } from 'react-router-dom';

const Patients = () => {

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const [selectedPatient, setSelectedPatient] = useState(null);

    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        dateNaissance: "",
        telephone: ""
    });
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleOpenAddModal = () => {
        setIsAddModalOpen(true);
    };
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    const handleCloseAddModal = () => {
        setIsAddModalOpen(false);
    };

    const handleOpenEditModal = () => {
        setIsEditModalOpen(true);
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Données mises à jour :", formData);
        handleCloseEditModal();
    };

    const patients = [
        {
            id: 1,
            nom: "Doe",
            prenom: "John",
            email: "john.doe@example.com",
            dateNaissance: "1990-01-01",
            telephone: "1234567890"
        },
        {
            id: 2,
            nom: "Smith",
            prenom: "Jane",
            email: "jane.smith@example.com",
            dateNaissance: "1985-05-15",
            telephone: "9876543210"
        }
    ];
    const patientRows = patients.map(patient => (
        <tr key={patient.id}>
            <td>{`${patient.nom} ${patient.prenom}`}</td>
            <td>{patient.email}</td>
            <td>{patient.dateNaissance}</td>
            <td>{patient.telephone}</td>
            <td>
                <Button onClick={() => handleOpenEditModal(patient)} variant="outlined">
                    Modifier
                </Button>
            </td>
        </tr>
    ));

    const tableContent = (

        <div className="container">
            <div className='row'>
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-info mb-2" onClick={handleOpenModal}>
                        Ajouter un patient <PersonAddAlt1Icon />
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="table-wrap">
                        <table className="table table-bordered table-responsive-xl table-hover">
                            <thead>
                                <tr>

                                    <th>Nom & Prénom</th>
                                    <th>Email</th>
                                    <th>Date de naissance</th>
                                    <th>Téléphone</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="alert" role="alert">

                                    <td className="d-flex align-items-center">
                                        <div className="pl-3 email">
                                            <span>Dr. Mark Otto</span>
                                            <span>Ajouté le : 01/03/2020</span>
                                        </div>
                                    </td>
                                    <td>markotto@email.com</td>
                                    <td>01/03/2020</td>
                                    <td>1234567890</td>

                                    <td>
                                        <div className="d-flex">

                                            <button onClick={handleOpenEditModal} className="btn btn-outline-success mr-1">
                                                <EditTwoToneIcon />
                                            </button>

                                            <button type="button" className="btn btn-outline-danger">
                                                <PersonRemoveTwoToneIcon />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="alert" role="alert">

                                    <td className="d-flex align-items-center">
                                        <div className="pl-3 email">
                                            <span>Dr. Mark Otto</span>
                                            <span>Ajouté le : 01/03/2020</span>
                                        </div>
                                    </td>
                                    <td>markotto@email.com</td>
                                    <td>01/03/2020</td>
                                    <td>1234567890</td>

                                    <td>
                                        <div className="d-flex">
                                            <button onClick={handleOpenEditModal} className="btn btn-outline-success mr-1">
                                                <EditTwoToneIcon />
                                            </button>
                                            <button type="button" className="btn btn-outline-danger">
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
        </div>
    );

    return (
        <div className="container">
            <div className="row">
                <Box m="20px">
                    <Header title="Patients" subtitle="Gestion des patients" />
                </Box>

                <ChartCard title="Liste des patients" chartId="patientListChart" content={tableContent} />



                <Modal open={isModalOpen} onClose={handleCloseModal}>

                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 400,
                            bgcolor: "background.paper",
                            boxShadow: 24,
                            p: 4,
                        }}
                    >

                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <IconButton onClick={handleCloseModal} size="large" sx={{ position: 'absolute', top: 0, right: 0 }}>
                                <CancelIcon />
                            </IconButton>
                        </Box>

                        <Typography variant="h3" gutterBottom>
                            Remplir les champs :
                        </Typography>
                        <form onSubmit={handleSubmit}>

                            <TextField
                                label="Nom"
                                name="nom"
                                value={formData.nom}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                required
                            />
                            <TextField
                                label="Prénom"
                                name="prenom"
                                value={formData.prenom}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                required
                            />
                            <TextField
                                label="Email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                required
                            />
                            <TextField
                                label="  "
                                type="date"
                                name="dateNaissance"
                                value={formData.dateNaissance}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"

                            />
                            <TextField
                                label="Téléphone"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                required
                            />
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <Button type="submit" variant="contained" color="primary">
                                    Ajouter
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Modal>

                <Modal open={isEditModalOpen} onClose={handleCloseEditModal}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 400,
                            bgcolor: "background.paper",
                            boxShadow: 24,
                            p: 4,
                        }}
                    >

                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <IconButton onClick={handleCloseModal} size="large" sx={{ position: 'absolute', top: 0, right: 0 }}>
                                <CancelIcon />
                            </IconButton>
                        </Box>

                        <Typography variant="h3" gutterBottom>
                            modifier les informations :
                        </Typography>
                        <form onSubmit={handleSubmit}>

                            <TextField
                                label="Nom"
                                name="nom"
                                value={formData.nom}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"

                            />
                            <TextField
                                label="Prénom"
                                name="prenom"
                                value={formData.prenom}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"

                            />
                            <TextField
                                label="Email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"

                            />
                            <TextField
                                label="  "
                                type="date"
                                name="dateNaissance"
                                value={formData.dateNaissance}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"

                            />
                            <TextField
                                label="Téléphone"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"

                            />
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <Button type="submit" variant="contained" color="primary">
                                    Modifier
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Modal>
            </div>
        </div>

    );
};

export default Patients;
