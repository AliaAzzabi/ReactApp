import React, { useState } from 'react';
import { Box, useTheme, Typography, Button, IconButton, Modal, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../../components/Header";

const Salle = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "nom", headerName: "Nom", flex: 1 },
    { field: "prenom", headerName: "Prénom", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: () => (
        <IconButton aria-label="Supprimer le patient">
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [waitingList, setWaitingList] = useState([]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAddToWaitingList = (patient) => {
    setWaitingList([...waitingList, patient]);
    handleCloseModal();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newPatient = {
      id: waitingList.length + 1,
      nom: formData.get('nom'),
      prenom: formData.get('prenom'),
    };
    handleAddToWaitingList(newPatient);
  };

  return (
    <Box m="20px">
      <Header title="Salle d'attente" subtitle="Liste d'attente des patients" />
      <Box m="40px 0 0 0" sx={{ display: "flex", alignItems: "center" }}>
        <Button variant="contained" color="primary" sx={{ ml: "auto" }} onClick={handleOpenModal}>
          Ajouter à la liste
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
            Ajouter à la liste d'attente
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField name="nom" label="Nom" fullWidth margin="normal" variant="outlined" />
            <TextField name="prenom" label="Prénom" fullWidth margin="normal" variant="outlined" />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Ajouter</Button>
          </form>
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
        <DataGrid rows={waitingList} columns={columns} />
      </Box>
    </Box>
  );
};

export default Salle;
