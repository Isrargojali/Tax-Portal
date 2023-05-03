import React from "react";
import { Grid } from "@mui/material";

function AmountOne() {
  return (
    <div className="status_form_main">
      <div className="icome_heading">
        <Grid container justifyContent={"space-evenly"}>
          <Grid item lg={6}>
            <h2>Amount You Owe</h2>
          </Grid>
          <Grid item lg={6} className="income_grid">
            <h3>
              For details on how to pay, <br /> go to <br />{" "}
              www.irs.gov/Payments <br /> or
              <br /> see instructio
            </h3>
          </Grid>
        </Grid>
      </div>
      <Grid container justifyContent={"center"}>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">37. This is the amount you owe.</label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">38. Estimated tax penalty (see instructions)</label>
          <input type="text" />
        </Grid>
      </Grid>
    </div>
  );
}

export default AmountOne;
