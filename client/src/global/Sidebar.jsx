import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";

import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonIcon from '@mui/icons-material/Person';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import MailIcon from "@mui/icons-material/Mail";
import { NavLink } from "react-router-dom";
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import QueuePlayNextOutlinedIcon from '@mui/icons-material/QueuePlayNextOutlined';
import { Link } from "react-router-dom";
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};


const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINISTRATION
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Ed Roh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Administration Fantaisie
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <MenuItem
              title="Tableau de bord"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            >
              <NavLink to="/" className="nav-link">
                Tableau de bord
              </NavLink>
            </MenuItem>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
             Gestion du personnel
            </Typography>

            <SubMenu title="Médecins" icon={<PersonIcon />}>
              <MenuItem>
                <NavLink to="/doctorList" className="nav-link">
                  Liste des médecins
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/adddoctor" className="nav-link">
                  Ajouter un médecin
                </NavLink>
              </MenuItem>
            </SubMenu>

            <SubMenu title="Assistants" icon={<PeopleOutlinedIcon />}>
              <MenuItem>
                <NavLink to="/assitantList" className="nav-link">
                  Liste des assistants
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/addAssistant" className="nav-link">
                  Ajouter un assistant
                </NavLink>
              </MenuItem>
            </SubMenu>
            <SubMenu title="Patients" icon={<PeopleOutlinedIcon />}>
              <MenuItem>
                <NavLink to="/patientList" className="nav-link">
                  Liste des patients
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/addPatient" className="nav-link">
                  Ajouter un patient
                </NavLink>
              </MenuItem>
            </SubMenu>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Gestion globale
            </Typography>
            <SubMenu title="Départements" icon={<LocalFireDepartmentIcon  />}>
              <MenuItem>
                <NavLink to="/departList" className="nav-link">
                 Liste des départements
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/adddepart" className="nav-link">
                 Ajouter un département
                </NavLink>
              </MenuItem>
            </SubMenu>
            <SubMenu title="Spécialités" icon={<StarHalfIcon />}>
              <MenuItem>
                <NavLink to="/specialityList" className="nav-link">
                   Liste des spécialités
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/addSpeciality" className="nav-link">
                  Ajouter une spécialité
                </NavLink>
              </MenuItem>
            </SubMenu>

            <SubMenu title="Payement" icon={<StarHalfIcon />}>
              <MenuItem>
                <NavLink to="/payementList" className="nav-link">
                   Liste des payements
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/addPayement" className="nav-link">
                  Ajouter une Facture
                </NavLink>
              </MenuItem>
             
            </SubMenu>
            

            <SubMenu title="Email" icon={<MailIcon />}>
              <MenuItem>
                <NavLink to="" className="nav-link">
                  Boîte de réception
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="" className="nav-link">
                  Voir les emails
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="" className="nav-link">
                  Composer un email
                </NavLink>
              </MenuItem>
            </SubMenu>

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
            secretaire
            </Typography>

            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/dashboardaid"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Rendez-vous"
              to="/rendez-vous"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Patients"
              to="/patient"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Salle d'attente"
              to="/salle-d'attente"
              icon={<QueuePlayNextOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Historique"
              to="/history"
              icon={<HistoryOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

          
          </Box>
            
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
            Médecin
            </Typography>
            
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/dashboardaid"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Rendez-vous"
              to="/rendez-vous"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Patients"
              to="/patient"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Salle d'attente"
              to="/salle-d'attente"
              icon={<QueuePlayNextOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Historique"
              to="/history"
              icon={<HistoryOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

          
          </Box>
            

          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
