import { Grid } from "@mui/material";
import React from "react";

function TaxOne() {
  return (
    <div className="status_form_main">
      <div className="status_heading">
        <h1>Tax</h1>
        <p className="status_heading_blue">
          16. (see instructions). Check if any from Form(s):
        </p>
      </div>
      <Grid container justifyContent={"start"} className="tax_three_container">
        <Grid item lg={1}>
          <label htmlFor="">1</label>
          <input type="text" />
        </Grid>
        <Grid item lg={1}>
          <label htmlFor="">2</label>
          <input type="text" />
        </Grid>
        <Grid item lg={1}>
          <label htmlFor="">3</label>
          <input type="text" />
        </Grid>
      </Grid>
      <Grid container justifyContent={"start"}>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">17. Amount from Schedule 2, line 3</label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">18.Add lines 16 and 17</label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">
            19.Child tax credit or credit for other dependents from Schedule
            8812
          </label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">20. Amount from Schedule 3, line 8</label>
          <input type="text" />
        </Grid>
      </Grid>
    </div>
  );
}

export default TaxOne;
