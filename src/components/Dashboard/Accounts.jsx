import React from "react";
import DashboardNav from "./DashboardNav";
import DashSidebar from "./DashSidebar";
import FormValidation from "./FormValidation";
import { Grid } from "@mui/material";

import "./Dashboard.css";

function Accounts() {
  return (
    <div className="dashboard_main">
      <DashboardNav />
      <DashSidebar />
      <Grid container justifyContent={"space-between"}>
        <Grid item lg={2}></Grid>
        <Grid item lg={9}>
          <FormValidation />
        </Grid>
      </Grid>
    </div>
  );
}

export default Accounts;
