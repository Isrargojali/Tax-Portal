import React from "react";
import { Grid } from "@mui/material";
function IncomeFive() {
  return (
    <div className="status_form_main">
      <Grid container justifyContent={"center"}>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">
            11. Subtract line 10 from line 9. This is your adjusted gross income
          </label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">
            12. Standard deduction or itemized deductions (from Schedule A)
          </label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">
            13. Qualified business income deduction from Form 8995 or Form
            8995-A
          </label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">14. Add lines 12 and 13</label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="income_text">
          <label htmlFor="">
            15. Subtract line 14 from line 11. If zero or less,enter -0-. This
            is your taxable income
          </label>
          <input type="text" />
        </Grid>
      </Grid>
    </div>
  );
}

export default IncomeFive;
