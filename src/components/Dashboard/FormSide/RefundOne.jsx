import React from "react";
import { Grid } from "@mui/material";
function RefundOne() {
  return (
    <div className="status_form_main">
      <div className="digital_heading">
        <h1>Refund</h1>
        <p className="digital_heading_blue">
          Direct deposit? See instructions.
        </p>
        <Grid container justifyContent={"center"}>
          <Grid item lg={12} className="income_text">
            <label htmlFor="">
              34. If line 33 is more than line 24, subtract line 24 from line
              33. <br />
              This is the amount you overpaid
            </label>
            <input type="text" />
          </Grid>
          <Grid item lg={12} className="income_text">
            <label htmlFor="">
              35a. Amount of line 34 you want refunded to you. If Form 8888 is{" "}
              <br />
              attached, check here
            </label>
            <input type="text" />
          </Grid>
          <Grid container justifyContent={"center"} className="refund_cont">
            <Grid item lg={3}>
              <label htmlFor="">35b. Routing number</label>
              <input type="text" />
            </Grid>
            <Grid item lg={3}>
              <label htmlFor="">35c. Type </label>
              <input type="text" />
            </Grid>
            <Grid item lg={3}>
              <label htmlFor="">35b. Account number</label>
              <input type="text" />
            </Grid>
          </Grid>
          <Grid item lg={12} className="income_text">
            <label htmlFor="">
              36. Amount of line 34 you want applied to your 2023 estimated tax
            </label>
            <input type="text" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default RefundOne;
