import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Dash.css";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import GridViewIcon from '@mui/icons-material/GridView';
const drawerWidth = 240;

export default function ClippedDrawer() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        className="dash_nav"
      >
        <Toolbar className="toolbar">
          <h1 variant="h1 " noWrap component="div" className="dash_T">
            T
          </h1>
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
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
       
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Account", "Setting", "Notification", "Support"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? (
                        <InboxIcon className="dash-icons" />
                      ) : (
                        <MailIcon className="dash-icons" />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
          {/* <Divider /> */}
          <List onClick={() => navigate("/")}>
            {["Log Out"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton className="icon-logout">
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <LogoutIcon className="dash-icons" />
                    ) : (
                      <MailIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <div />

        <div className="dash_div">
          <div>
            <Typography className="paragraph">
              U.S. Individual Income Tax Return
            </Typography>
            <Typography className="para-two">
              Department of the Treasury—Internal Revenue Service
            </Typography>
          </div>
          <div>
            <h1 className="para-three">2022</h1>
          </div>
        </div>
        <div className="dash-form">
          <div className="dash-content">
            <div className="border-one" onClick={() => navigate("/dashtwo")}>
              <p className="border-text">Filing Status</p>
              <ArrowForwardIosIcon className="aarow-icon" />
            </div>
          </div>
          <div className="dash-content">
            <div className="border-two">
              <p className="border-text-two">Digital Assets</p>
              <ArrowForwardIosIcon />
            </div>
          </div>
          <div className="dash-content">
            <div className="border-two">
              <p className="border-text-two">Standard Deduction</p>
              <ArrowForwardIosIcon />
            </div>
          </div>
          <div className="dash-content">
            <div className="border-two">
              <p className="border-text-two">Dependents</p>
              <ArrowForwardIosIcon />
            </div>
          </div>
          <div className="dash-content">
            <div className="border-two">
              <p className="border-text-two">Income</p>
              <ArrowForwardIosIcon />
            </div>
          </div>
          <div className="dash-content">
            <div className="border-two">
              <p className="border-text-two">Tax & Credits</p>
              <ArrowForwardIosIcon />
            </div>
          </div>
          <div className="dash-content">
            <div className="border-two">
              <p className="border-text-two">Payments</p>
              <ArrowForwardIosIcon />
            </div>
          </div>
          {/* <div className="dash_button">
            <button className="dash-btn">View All</button>
          </div> */}
        </div>
      </Box>
    </Box>
  );
}
