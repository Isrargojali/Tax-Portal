import { Grid } from "@mui/material";
import React from "react";

function IncomeOne() {
  return (
    <div className="status_form_main">
      <div className="icome_heading">
        <h1>Income</h1>
        <Grid container justifyContent={"space-evenly"}>
          <Grid item lg={6}>
            <p>
              Attach Form(s) W-2 here. Also attach Forms W-2G and 1099-R if tax
              was withheld.
            </p>
            <p>If you did not get a Form W-2, see instructions.</p>
          </Grid>
          <Grid item lg={6} className="income_grid">
            <h3>Standard Deduction for:</h3>
            <p>• Single or Married filing separately, $12,950</p>
            <p>
              • Married filing jointly or Qualifying surviving spouse, $25,900
            </p>
            <p>• Head of household, $19,400</p>
            <p>
              • If you checked any box under Standard Deduction, see
              instructions
            </p>
          </Grid>
        </Grid>
      </div>
      <Grid container justifyContent={"center"}>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">
            1a. Total amount from Form(s) W-2, box 1 (see instructions)
          </label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">
            b. Household employee wages not reported on Form(s) W-2
          </label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">
            c. Tip income not reported on line 1a (see instructions)
          </label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">
            d. Medicaid waiver payments not reported on Form(s) W-2 (see
            instructions)
          </label>
          <input type="text" />
        </Grid>
      </Grid>
    </div>
  );
}

export default IncomeOne;
