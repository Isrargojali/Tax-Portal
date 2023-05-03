import React from "react";
import DashboardNav from "../DashboardNav";
import FormSidebar from "./FormSidebar";
import { Grid } from "@mui/material";
import "../Dashboard.css";
import DigitalOne from "./DigitalOne";
function DigitalAssets() {
  return (
    <div>
      <DashboardNav />
      <div className="tax_form_main">
        <Grid container justifyContent={"space-between"}>
          <Grid item lg={1}>
            <FormSidebar />
          </Grid>
          <Grid item lg={9.5}>
            <DigitalOne />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default DigitalAssets;
