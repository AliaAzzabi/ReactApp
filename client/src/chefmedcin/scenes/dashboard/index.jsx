import React from "react";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import CustomCard from "../../components/Card";
import LineChart from "../../components/LineChart";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faCut, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { mockTransactions } from "../../data/mockData";
import Header from "../../components/Header";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    
    <div className="page-content-wrapper">
      
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      
      <div className="row">
        <div className="state-overview">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-12">
              <div >
                <CustomCard
                  titre="Appointments"
                  number={450}
                  progress={45}
                  description="45% Increase in 28 Days"
                  color="bg-blue"
                  icon={<FontAwesomeIcon icon={faUsers}  />}
                />
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div >
                <CustomCard
                  titre="New Patients"
                  number={155}
                  progress={40}
                  description="40% Increase in 28 Days"
                  color="bg-orange"
                  icon={<FontAwesomeIcon icon={faUser}  />}
                />
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div >
                <CustomCard
                  titre="Operations"
                  number={52}
                  progress={85}
                  description="85% Increase in 28 Days"
                  color="bg-purple"
                  icon={<FontAwesomeIcon icon={faCut}  />}
                />
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12">
              <div >
                <CustomCard
                  titre="Hospital Earning"
                  number={13921}
                  progress={50}
                  description="50% Increase in 28 Days"
                  color="bg-success"
                  icon={<FontAwesomeIcon icon={faMoneyCheckAlt}  />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <Box m="20px">
          <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
          >
            <Box
              gridColumn="span 8"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
            >
              <Box
                mt="25px"
                p="0 30px"
                display="flex "
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                  >
                    Revenue Generated
                  </Typography>
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    color={colors.greenAccent[500]}
                  >
                    $59,342.32
                  </Typography>
                </Box>
                <Box>
                  <IconButton>
                    <DownloadOutlinedIcon
                      sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                    />
                  </IconButton>
                </Box>
              </Box>
              <Box height="250px" m="-20px 0 0 0">
                <LineChart isDashboard={true} />
              </Box>
            </Box>
            <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[400]}
              overflow="auto"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                colors={colors.grey[100]}
                p="15px"
              >
                <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                  Recent Transactions
                </Typography>
              </Box>
              {mockTransactions.map((transaction, i) => (
                <Box
                  key={`${transaction.txId}-${i}`}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom={`4px solid ${colors.primary[500]}`}
                  p="15px"
                >
                  <Box>
                    <Typography
                      color={colors.greenAccent[500]}
                      variant="h5"
                      fontWeight="600"
                    >
                      {transaction.txId}
                    </Typography>
                    <Typography color={colors.grey[100]}>
                      {transaction.user}
                    </Typography>
                  </Box>
                  <Box color={colors.grey[100]}>{transaction.date}</Box>
                  <Box
                    backgroundColor={colors.greenAccent[500]}
                    p="5px 10px"
                    borderRadius="4px"
                  >
                    ${transaction.cost}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;