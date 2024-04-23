import React, { useState } from 'react';
import { Box, Button, IconButton, Modal, TextField,Typography } from "@mui/material";
import { PersonAddAlt1 as PersonAddAlt1Icon, Cancel as CancelIcon } from '@mui/icons-material';
import Header from "../../components/Header";
import ChartCard from '../../../chefmedcin/components/ChartCard';
import { Link } from 'react-router-dom';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import PersonRemoveTwoToneIcon from '@mui/icons-material/PersonRemoveTwoTone';

const Salle = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [patientName, setPatientName] = useState("");

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handlePatientNameChange = (event) => {
        setPatientName(event.target.value);
    };

    const handleAddToWaitingList = () => {
        setIsModalOpen(false);
    };
    const tableContent = (

        <div className="container">
            <div className='row'>
                <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-info mb-2" onClick={handleOpenModal}>
            Ajouter à la liste d'attente <PersonAddAlt1Icon />
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
                                    <th>heure</th>
                                    <th>Status</th>
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
                                    <td>12:13</td>
                                    <td>Annulé</td>
                                   

                                    <td>
                                        <div className="d-flex">
                                           
                                                <button type="button" className="btn btn-outline-success  mr-1">
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
                                    <td>14:00</td>
                                    <td>En attente</td>
                                 

                                    <td>
                                        <div className="d-flex">
                                            
                                                <button type="button" className="btn btn-outline-success  mr-1">
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
    const modalContent = (
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
            <IconButton onClick={handleCloseModal} size="large" sx={{ position: 'absolute', top: 0, right: 0 }}>
                <CancelIcon />
            </IconButton>
            <Typography variant="h6" component="h2" gutterBottom>
                Ajouter à la liste d'attente
            </Typography>
            <TextField
                label="Nom du patient"
                value={patientName}
                onChange={handlePatientNameChange}
                fullWidth
                margin="normal"
                variant="outlined"
            />
            <Button variant="contained" color="primary" onClick={handleAddToWaitingList} sx={{ mt: 2 }}>
                Ajouter à la liste d'attente
            </Button>
        </Box>
    );

    return (
        <div className="container">

            <div className="row">
                <Box m="20px">
                    <Header title="Salle d'attente" subtitle="Gestion de la salle d'attente" />
                </Box>

                <ChartCard title="Liste des patients en attente" chartId="salleListChart" content={tableContent} />
                <Modal open={isModalOpen} onClose={handleCloseModal}>
                {modalContent}
            </Modal>
            </div>
        </div>
    );
};

export default Salle;
