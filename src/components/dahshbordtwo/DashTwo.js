import React from 'react';
import './DashTwo.css';
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import StatusPage from '../DashboardPages/StatusPage';
import { Grid } from '@mui/material';
import  Sidebar  from '../DashboardPages/SideBoard/Sidebar';
function Dashboard() {
    const navigate = useNavigate();
  return (
    <div className="dashboard">
      <header className="app-bar">
        <nav>
       <div>
        <h2 className='dash-two-t'>T</h2>
       </div>
       <div className="div-search">
            <SearchIcon className="search-icon" />
            <input
              type="search"
              placeholder="Search"
              required
              className="dash-search"
            />

            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <NotificationsActiveIcon
                    variant="contained"
                    cursor="pointer"
                    {...bindTrigger(popupState)}
                    className="notification_icon"
                  />

                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Profile</MenuItem>
                    <MenuItem onClick={popupState.close}>My account</MenuItem>
                    <MenuItem  onClick={() => navigate("/")}>Logout</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </div>
        </nav>
      </header>
      <header className="app-bar-two">
        <nav>
        <div>
            <p>U.S. Individual Income Tax Return</p>
          <p>Department of the Treasury—Internal Revenue Service</p>
            </div>
            <div>
          <h1>2022</h1>
            </div>
        </nav>
      </header>
      <Grid container>
        <Grid item lg={2}>
                <Sidebar/>
        </Grid>
        <Grid item lg={10}>
        <div className="dash-two-content">
            <StatusPage/>
        </div>
        </Grid>
      </Grid>
                
    </div>
  );
}

export default Dashboard;
