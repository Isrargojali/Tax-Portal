import React from "react";
import { Grid } from "@mui/material";
import "./Dashboard.css";
import Dropdown from "./Dropdown";

function DashboardNav() {
  return (
    <div>
      <div className="dash_nav">
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item lg={6}>
            <img src="./Assets/logo.png" alt="" />
          </Grid>
          <Grid item lg={6}>
            <Grid
              container
              justifyContent={"flex-end"}
              alignItems={"center"}
              gap={2}
            >
              <Grid item lg={5}>
                <div className="dash_search">
                  <span className="search_icon">
                    <img src="./Assets/search.png" alt="" />
                  </span>
                  <input type="text" placeholder="Search" />
                </div>
              </Grid>
              <Grid item lg={5}>
                <Dropdown />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default DashboardNav;
