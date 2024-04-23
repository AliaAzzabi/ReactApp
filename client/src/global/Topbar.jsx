import { Box, IconButton, useTheme, Popover, List, ListItem, ListItemText } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined"; // Import de l'icône Message
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  // State variables to control the visibility of notification, message, and user profile popovers
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // State variables to anchor popovers to their respective icons
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const [messageAnchorEl, setMessageAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  // Functions to handle opening and closing of popovers
  const handleNotificationOpen = (event) => {
    setNotificationAnchorEl(event.currentTarget);
    setNotificationOpen(true);
  };

  const handleMessageOpen = (event) => {
    setMessageAnchorEl(event.currentTarget);
    setMessageOpen(true);
  };

  const handleProfileOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
    setProfileOpen(true);
  };

  const handleClose = () => {
    setNotificationOpen(false);
    setMessageOpen(false);
    setProfileOpen(false);
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        {/* Notification Popover */}
        <IconButton onClick={handleNotificationOpen}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <Popover
          open={notificationOpen}
          onClose={handleClose}
          anchorEl={notificationAnchorEl} // Set anchorEl to notificationAnchorEl
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <List>
            {/* Notification items go here */}
            <ListItem button>
              <ListItemText primary="Notification 1" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Notification 2" />
            </ListItem>
          </List>
        </Popover>

        {/* Message Popover */}
        <IconButton onClick={handleMessageOpen}>
          <MessageOutlinedIcon /> {/* Utilisation de l'icône MessageOutlinedIcon */}
        </IconButton>
        <Popover
          open={messageOpen}
          onClose={handleClose}
          anchorEl={messageAnchorEl} // Set anchorEl to messageAnchorEl
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <List>
            {/* Message items go here */}
            <ListItem button>
              <ListItemText primary="Message 1" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Message 2" />
            </ListItem>
          </List>
        </Popover>

        {/* User Profile Popover */}
        <IconButton onClick={handleProfileOpen}>
          <PersonOutlinedIcon />
        </IconButton>
        <Popover
          open={profileOpen}
          onClose={handleClose}
          anchorEl={profileAnchorEl} // Set anchorEl to profileAnchorEl
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <List>
            <ListItem button>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Help" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Lock" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Log Out" />
            </ListItem>
          </List>
        </Popover>
      </Box>
    </Box>
  );
};

export default Topbar;
