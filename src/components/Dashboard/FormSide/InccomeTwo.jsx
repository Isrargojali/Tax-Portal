import React from "react";
import { Grid } from "@mui/material";

function InccomeTwo() {
  return (
    <div className="status_form_main">
      <Grid container justifyContent={"center"}>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">
            e. Taxable dependent care benefits from Form 2441, line 26
          </label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">
            f. Employer-provided adoption benefits from Form 8839, line 29
          </label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">g. Wages from Form 8919, line 6</label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">h. Other earned income (see instructions)</label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">
            i. Nontaxable combat pay election (see instructions)
          </label>
          <input type="text" />
        </Grid>
      </Grid>
    </div>
  );
}

export default InccomeTwo;
