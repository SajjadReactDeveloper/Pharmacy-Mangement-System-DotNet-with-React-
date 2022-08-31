import React from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { deepOrange, deepPurple } from '@mui/material/colors';
import Badge from "@mui/material/Badge";
import Avatar from '@mui/material/Avatar';
import Tooltip from "@mui/material/Tooltip";
import { Link } from 'react-router-dom';
import "./navbar.css";

function Navbar() {
  const [notification, setNotification] = React.useState(false);
  return (
    <div className="navbarss">
      <div className="wrapper">
        <div className="search" style={{ paddingLeft: 20 }}>
          
        </div>
        <div className="items">
          <div className="itemss">
            <Tooltip title="Light Mode" arrow>
              <LightModeOutlinedIcon className="icon" />
            </Tooltip>
          </div>
          <div className="itemss">
            <Tooltip title="Notifications" arrow>
              <NotificationsNoneOutlinedIcon
                className="icon"
                onClick={() => {
                  setNotification(!notification);
                }}
              />
            </Tooltip>
            </div>
          <div className="itemss">
            <Tooltip title="Settings" arrow>
              <SettingsOutlinedIcon className="icon" />
            </Tooltip>
          </div>
          <div className="itemss">
            <Tooltip title="Help" arrow>
              <HelpOutlineOutlinedIcon className="icon" />
            </Tooltip>
          </div>
          <div className="itemss">
            <Badge color="success" overlap="circular" variant="dot">
              <Tooltip title = "Admin" arrow>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>A</Avatar>
              </Tooltip>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
