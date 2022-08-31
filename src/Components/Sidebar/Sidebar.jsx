import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import FactoryIcon from '@mui/icons-material/Factory';
import ListIcon from '@mui/icons-material/List';
import MedicationIcon from '@mui/icons-material/Medication';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

function Sidebar() {
  const [collapse, setCollapse] = React.useState(false);
  const navigate = useNavigate();

    const handleLogout = async () => {
      try {
        localStorage.setItem('Login', 'false');
        window.location.href = "/";
      } catch (error) {
        window.location.href = "/";
      }
    };
  return (
    <ProSidebar
      style={{ height: "100vh", backgroundColor: "#265077" }}
      toggled="true"
      collapsed={collapse}
      breakPoint="xs"
      onToggle={() => {
        setCollapse(true);
      }}
    >
      <SidebarHeader>
        <div className="logo-details" style={{ padding: 10 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="p-2"
            >
              <Avatar alt="Remy Sharp" style={{ marginRight: 10 }} />
              <span className="logo_name ml-2">Pharmacy Management</span>
            </div>
        </div>
      </SidebarHeader>
      <Menu popperArrow innerSubMenuArrows>
        <MenuItem style={{ paddingLeft: 0 }} icon={<HomeIcon />} active>
          Dashboard
          <Link to="/" />
        </MenuItem>
        <SubMenu title="Manufacturer" icon={<FactoryIcon />}>
          <MenuItem>
            Add Manufacturer
            <Link to="/manufacturer/add" />
          </MenuItem>
          <MenuItem>
            Manage Manufacturer
            <Link to="/manufacturer" />
          </MenuItem>
        </SubMenu>
        <SubMenu title="Categories" icon={<ListIcon />}>
          <MenuItem>
            Add Categories
            <Link to="/category/add" />
          </MenuItem>
          <MenuItem>
            Manage Categories
            <Link to="/category" />
          </MenuItem>
        </SubMenu>
        <SubMenu title="Medicines" icon={<MedicationIcon />}>
          <MenuItem>
            Add Medicines
            <Link to="/medicine/add" />
          </MenuItem>
          <MenuItem>
            Manage Medicines
            <Link to="/medicine" />
          </MenuItem>
        </SubMenu>
        <SubMenu title="Invoices" icon={<InsertDriveFileIcon />}>
          <MenuItem>
            Add Invoice
            <Link to="/invoice/add" />
          </MenuItem>
          <MenuItem>
            Manage Invoice
            <Link to="/invoice" />
          </MenuItem>
        </SubMenu>
        <MenuItem style={{ paddingLeft: 0 }} icon={<MedicationIcon />} active>
          Expire Medicines
          <Link to="/expire" />
        </MenuItem>
        <MenuItem icon={<LogoutIcon />} onClick = {handleLogout}>Logout</MenuItem>
      </Menu>
    </ProSidebar>
  );
}

export default Sidebar;
