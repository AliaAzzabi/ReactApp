import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Modal, TextField } from "@mui/material";
import { Event as EventIcon, Cancel as CancelIcon, Edit as EditIcon } from "@mui/icons-material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Header from "../../components/Header";
import { Link } from 'react-router-dom';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import PersonRemoveTwoToneIcon from '@mui/icons-material/PersonRemoveTwoTone';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ChartCard from '../../../chefmedcin/components/ChartCard';

const RendezVous = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [patientName, setPatientName] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDateSelect = (selectInfo) => {
    setSelectedDate(selectInfo.startStr);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handlePatientNameChange = (event) => {
    setPatientName(event.target.value);
  };

  const tableContent = (
    <div className="container">
      <div className='row'>

        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-info mb-2" onClick={handleOpenModal}>
            Ajouter un rendez-vous  <EventIcon />
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="table-wrap">
            <table className="table table-bordered table-responsive-xl table-hover">
              <thead>
                <tr>

                  <th>Numéro du rendez-vous</th>
                  <th>Heure</th>
                  <th>Date</th>
                  <th>Nom du patient</th>
                  <th>Nom du médecin</th>

                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr className="alert" role="alert">

                  <td>
                    <div className="pl-3 email">
                      <span>1</span>
                      <span>Ajouté le : 01/03/2020</span>
                    </div>
                  </td>
                  <td>12:00</td>
                  <td>01/03/2020</td>
                  <td> Mark Otto</td>
                  <td>Dr. Mark Otto</td>



                  <td>
                    <div className="d-flex">

                      <button type="button" className="btn btn-outline-success  mr-1">
                        <EditIcon />
                      </button>
                      <button type="button" className="btn btn-outline-danger">
                        <CancelIcon />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="alert" role="alert">

                  <td >
                    <div className="pl-3 email">
                      <span>2</span>
                      <span>Ajouté le : 01/03/2020</span>
                    </div>
                  </td>
                  <td>12:00</td>
                  <td>01/03/2020</td>
                  <td> Mark Otto</td>
                  <td>Dr. Mark Otto</td>


                  <td>
                    <div className="d-flex">
                      <button type="button" className="btn btn-outline-success  mr-1">
                        <EditIcon />
                      </button>
                      <button type="button" className="btn btn-outline-danger">
                        <CancelIcon />
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
          <Header title="Rendez-vous" subtitle="Gestion des rendez-vous" /></Box>
        <ChartCard title="Liste des rendez-vous" chartId="patientListChart" content={tableContent} />
      </div>
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
          <Typography variant="h6" component="h2" gutterBottom>
            Ajouter un rendez-vous
          </Typography>
          <TextField
            label="Nom du patient"
            value={patientName}
            onChange={handlePatientNameChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Nom du médecin"
            value={patientName}
            onChange={handlePatientNameChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Heure"
            type="time"
            value={selectedTime}
            onChange={handleTimeChange}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            selectable={true}
            select={handleDateSelect}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button variant="contained" color="primary" onClick={handleCloseModal} sx={{ mt: 5 }}>
              Confirmer
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>

  );
};

export default RendezVous;
