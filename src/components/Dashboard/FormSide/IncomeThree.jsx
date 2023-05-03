import { Grid } from "@mui/material";
import React from "react";

function IncomeThree() {
  return (
    <div className="status_form_main">
      <Grid container justifyContent={"space-evenly"}>
        <Grid item lg={12}>
          <Grid
            container
            className="income_three_container"
            justifyContent={"space-evenly"}
          >
            <Grid item lg={5}>
              <label htmlFor="">2a. Tax-exempt interest</label>
              <input type="text" />
            </Grid>
            <Grid item lg={5}>
              <label htmlFor="">2b. Taxable interest</label>
              <input type="text" />
            </Grid>
            <Grid item lg={5}>
              <label htmlFor="">3a. Qualified dividends</label>
              <input type="text" />
            </Grid>
            <Grid item lg={5}>
              <label htmlFor="">3b. Ordinary dividends</label>
              <input type="text" />
            </Grid>
            <Grid item lg={5}>
              <label htmlFor="">4a. IRA distributions</label>
              <input type="text" />
            </Grid>
            <Grid item lg={5}>
              <label htmlFor="">4b.Taxable amount</label>
              <input type="text" />
            </Grid>
            <Grid item lg={5}>
              <label htmlFor="">5a. Pensions and annuities</label>
              <input type="text" />
            </Grid>
            <Grid item lg={5}>
              <label htmlFor="">5b. Taxable amount</label>
              <input type="text" />
            </Grid>
            <Grid item lg={5}>
              <label htmlFor="">6a.Social security benefits</label>
              <input type="text" />
            </Grid>
            <Grid item lg={5}>
              <label htmlFor="">6b. Taxable amount</label>
              <input type="text" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default IncomeThree;
