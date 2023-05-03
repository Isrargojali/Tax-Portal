import React from "react";
import DashboardNav from "../DashboardNav";
import FormSidebar from "./FormSidebar";
import Status from "./Status";
import { Grid } from "@mui/material";

function TaxForm() {
  return (
    <div className="outer_bg">
      <DashboardNav />
      <div className="tax_form_main">
        <Grid container justifyContent={"space-between"}>
          <Grid item lg={1}>
            <FormSidebar />
          </Grid>
          <Grid item lg={9.5}>
            <Status />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default TaxForm;
