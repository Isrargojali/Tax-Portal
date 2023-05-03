import React from "react";
import { Grid } from "@mui/material";

function IncomeFour() {
  return (
    <div className="status_form_main">
      <Grid container justifyContent={"center"}>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">
            c. If you elect to use the lump-sum election method, check here
          </label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">
            Capital gain or (loss). Attach Schedule D if required.
          </label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">Other income from Schedule 1, line 10</label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">
            Add lines 1z, 2b, 3b, 4b, 5b, 6b, 7, and 8. This is your total
            income
          </label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">
            Adjustments to income from Schedule 1, line 26
          </label>
          <input type="text" />
        </Grid>
      </Grid>
    </div>
  );
}

export default IncomeFour;
