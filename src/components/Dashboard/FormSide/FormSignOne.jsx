import React from "react";
import { Grid } from "@mui/material";

function FormSignOne() {
  return (
    <div className="status_form_main">
      <div className="digital_heading">
        <h1>Sign Here</h1>
        <p className="sign_heading_blue">
          Joint return? See instructions. Keep a copy for your records.
        </p>
        <p className="digital_heading_para">
          Under penalties of perjury, I declare that I have examined this return
          and <br /> accompanying schedules and statements, and to the best of
          my knowledge <br /> and belief, they are true, correct, and complete.
          Declaration of preparer <br /> (other than taxpayer) is based on all
          information of which preparer has any <br /> knowledge
        </p>
      </div>
      <Grid container justifyContent={"center"} className="refund_cont">
        <Grid item lg={3}>
          <label htmlFor="">Your Signature</label>
          <input type="text" />
        </Grid>
        <Grid item lg={3}>
          <label htmlFor="">Date </label>
          <input type="date" />
        </Grid>
        <Grid item lg={3}>
          <label htmlFor="">Your occupation</label>
          <input type="text" />
        </Grid>
      </Grid>
      <Grid container justifyContent={"space-evenly"}>
        <Grid item lg={12} className="form_sign_color">
          <Grid container>
            <Grid item lg={6}>
              <label htmlFor="">
                If the IRS sent your spouse an Identity <br /> Protection PIN,
                enter it here (see inst.)
              </label>
            </Grid>
            <Grid item lg={6}>
              <input type="text" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr className="sing_form_line" />
      <Grid container justifyContent={"space-evenly"}>
        <Grid item lg={12} className="form_sign_color">
          <Grid container>
            <Grid item lg={6}>
              <label htmlFor="">Phone Numbr</label>
            </Grid>
            <Grid item lg={6}>
              <input type="number" />
            </Grid>
            <Grid item lg={6}>
              <label htmlFor="">Email Address</label>
            </Grid>
            <Grid item lg={6}>
              <input type="email" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default FormSignOne;
