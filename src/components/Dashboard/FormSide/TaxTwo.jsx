import React from "react";
import { Grid } from "@mui/material";
function TaxTwo() {
  return (
    <div className="status_form_main">
      <div className="status_heading">
        <h1>Tax</h1>
        <Grid container justifyContent={"center"}>
          <Grid item lg={12} className="income_text">
            <label htmlFor="">20. Add lines 19 and 20</label>
            <input type="text" />
          </Grid>
          <Grid item lg={12} className="income_text">
            <label htmlFor="">
              22. Subtract line 21 from line 18. If zero or less, enter -0-
            </label>
            <input type="text" />
          </Grid>
          <Grid item lg={12} className="income_text">
            <label htmlFor="">
              33.Other taxes, including self-employment tax, from Schedule 2,
              line 21
            </label>
            <input type="text" />
          </Grid>
          <Grid item lg={12} className="income_text">
            <label htmlFor="">
              24.Add lines 22 and 23. This is your total tax
            </label>
            <input type="text" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default TaxTwo;
