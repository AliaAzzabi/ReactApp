import React, { useState } from 'react';
import { Box, useTheme, Typography, Button, IconButton, Modal, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../../components/Header";
import { mockDataPatients } from "../../data/mockData";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Patients = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "cin", headerName: "CIN", flex: 1 },
    { field: "nom", headerName: "Nom", flex: 1 },
    { field: "prenom", headerName: "Prénom", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: () => (
        <>
          <IconButton aria-label="Modifier le patient">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="Supprimer le patient">
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAddPatient = () => {
    // Ajoutez votre logique pour ajouter un nouveau patient ici
    handleCloseModal();
  };

  return (
    <Box m="20px">
      <Header title="Patients" subtitle="Gestion des patients" />
      <Box m="40px 0 0 0" sx={{ display: "flex", alignItems: "center" }}>
        <Button variant="contained" color="primary" sx={{ ml: "auto" }} onClick={handleOpenModal}>
          Ajouter un patient
        </Button>
      </Box>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            width: 400,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Ajouter un patient
          </Typography>
          <TextField
            label="CIN"
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <IconButton>
                  <ContactMailIcon />
                </IconButton>
              ),
            }}
          />
          <TextField
            label="Nom"
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <IconButton>
                  <PersonIcon />
                </IconButton>
              ),
            }}
          />
          <TextField
            label="Prénom"
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <IconButton>
                  <PersonIcon />
                </IconButton>
              ),
            }}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <IconButton>
                  <EmailIcon />
                </IconButton>
              ),
            }}
          />
          <Box display="flex" alignItems="center">
            <TextField
              label="Date de naissance"
              fullWidth
              margin="normal"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <IconButton>
                    <CalendarTodayIcon />
                  </IconButton>
                ),
              }}
            />
            {/* Ajoutez un sélecteur de date ici */}
          </Box>
          {/* Ajoutez d'autres champs de formulaire au besoin */}
          <Box mt={2} textAlign="right">
            <Button onClick={handleAddPatient} color="primary" sx={{ ml: 1 }}>Ajouter</Button>
          </Box>
        </Box>
      </Modal>
      <Box
        m="20px 0 0 0"
        height="60vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataPatients} columns={columns} />
      </Box>
    </Box>
  );
};

export default Patients;
