import React from "react";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import CustomCard from "../../../chefmedcin/components/Card";
import LineChart from "../../components/LineChart";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser, faHourglassHalf } from '@fortawesome/free-solid-svg-icons'; // Importer les icônes nécessaires
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { mockTransactions } from "../../data/mockData";
import Header from "../../components/Header";

const DashboardAid = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="container">
       
      <div className="row"><Box m="20px">
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard"  />
     </Box>
        <div className="state-overview">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-3">
              <div >
                <CustomCard
                  titre="Rendez-vous"
                  number={450}
                  progress={45}
                  description="45% Increase in 28 Days"
                  color="bg-blue"
                  icon={<FontAwesomeIcon icon={faClock} />} 
                />
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div >
                <CustomCard
                  titre="Patients"
                  number={155}
                  progress={40}
                  description="40% Increase in 28 Days"
                  color="bg-orange"
                  icon={<FontAwesomeIcon icon={faUser} />} 
                />
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div >
                <CustomCard
                  titre="Salle d'attente"
                  number={52}
                  progress={85}
                  description="85% Increase in 28 Days"
                  color="bg-purple"
                  icon={<FontAwesomeIcon icon={faHourglassHalf} />} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAid;
