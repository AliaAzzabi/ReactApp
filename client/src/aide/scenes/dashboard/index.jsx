import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { People as PeopleIcon } from '@mui/icons-material';
import { Event as EventIcon } from "@mui/icons-material"; 
import { HourglassEmpty as HourglassEmptyIcon } from "@mui/icons-material"; 
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
  
    <Box m="20px" >
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Bienvenue" />

      
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(9, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
  gridColumn="span 3"
  backgroundColor={colors.primary[400]}
  display="flex"
  alignItems="center"
  justifyContent="center"
>
  <StatBox
    title="12"
    subtitle="Patients"
    progress="0.75"
    increase="+14%"
    icon={
      <PeopleIcon // Remplacez ici par l'icône pour représenter les patients
        sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
      />
    }
  />
</Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="50"
            subtitle="Rendez-vous"
            progress="0.50"
            increase="+21%"
            icon={
              <EventIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title=" 3"
            subtitle="Patients en file d'attente"
            progress="0.30"
            increase="+5%"
            icon={
              <HourglassEmptyIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        

        
        </Box>
      </Box>
   
  );
};

export default Dashboard;
