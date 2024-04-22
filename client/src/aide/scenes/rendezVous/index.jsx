import { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Button,
  IconButton,
  Modal,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { Event as EventIcon, Cancel as CancelIcon, Edit as EditIcon } from "@mui/icons-material";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const RendezVous = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDateSelect = (selectInfo) => {
    setSelectedDate(selectInfo.startStr);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handlePatientNameChange = (event) => {
    setPatientName(event.target.value);
  };

  const handleAddAppointment = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Données de rendez-vous simulées
  const rows = [
    { id: 1, heure: "09:00", patient: "John Doe", medecin: "Dr. Smith", status: "Confirmé" },
    { id: 2, heure: "10:30", patient: "Jane Doe", medecin: "Dr. Brown", status: "Annulé" },
    { id: 3, heure: "14:00", patient: "Alice Smith", medecin: "Dr. Johnson", status: "En attente" },
  ];

  const columns = [
    { field: "id", headerName: "Numéro de rendez-vous", flex: 1 },
    { field: "heure", headerName: "Heure", flex: 1 },
    { field: "patient", headerName: "Nom du patient", flex: 1 },
    { field: "medecin", headerName: "Nom du médecin", flex: 1 },
    { field: "status", headerName: "Statut", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: () => (
        <>
          <IconButton aria-label="Modifier le rendez-vous">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="Annuler le rendez-vous">
            <CancelIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="Rendez-vous" subtitle="Gestion des rendez-vous" />
      <Box m="40px 0 0 0" sx={{ display: "flex", alignItems: "center" }}>
        <Button variant="contained" color="primary" sx={{ ml: "auto" }} onClick={handleAddAppointment}>
          Ajouter un rendez-vous
        </Button>
      </Box>
      <Box
        m="20px 0 0 0"
        height="60vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
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
        <DataGrid rows={rows} columns={columns} />
      </Box>
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
          <Button variant="contained" color="primary" onClick={handleCloseModal} sx={{ mt: 2 }}>
            Confirmer
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default RendezVous;
