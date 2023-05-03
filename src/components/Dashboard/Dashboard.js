import React from "react";
import DashboardNav from "./DashboardNav";
import DashSidebar from "./DashSidebar";
import FormValidation from "./FormValidation";
import "./Dashboard.css";
import { Grid } from "@mui/material";
function Dashboard() {
  return (
    <div className="dashboard_main">
      <DashboardNav />
      <DashSidebar />
      <Grid container justifyContent={"space-between"}>
        <Grid item xs={0} sm={0} lg={2}></Grid>
        <Grid item lg={9}>
          <FormValidation />
        </Grid>
      </Grid>
    </div>
  );
}
export default Dashboard;
