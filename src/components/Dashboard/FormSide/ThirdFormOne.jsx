import { Grid } from "@mui/material";
import React from "react";

function ThirdFormOne() {
  return (
    <div className="status_form_main">
      <div className="digital_heading">
        <h1>Third Party Designee</h1>
        <p className="payment_p">
          {" "}
          Do you want to allow another person to discuss this return with the
          IRS? <br />
          (See instructions){" "}
        </p>
      </div>
      <Grid container justifyContent={"center"}>
        <Grid item lg={5}>
          <button className="third_form_one_button">yes</button>
          <button className="third_form_one_button">No</button>
        </Grid>
      </Grid>
      <Grid container justifyContent={"start"} className="third_form_container">
        <Grid item lg={12}>
          <p className="third_form_P"> If Yes, Complete below:</p>
          <Grid container>
            <Grid item lg={4}>
              <label htmlFor="">Designee’s name</label>
            </Grid>
            <Grid item lg={4}>
              <input type="text" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12}>
          <Grid container>
            <Grid item lg={4}>
              <label htmlFor="">Phone number</label>
            </Grid>
            <Grid item lg={4}>
              <input type="text" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12}>
          <Grid container>
            <Grid item lg={4}>
              <label htmlFor="">Personal identification number </label>
            </Grid>
            <Grid item lg={4}>
              <input type="text" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ThirdFormOne;
