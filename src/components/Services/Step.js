import { Grid } from "@mui/material";
import React from "react";
import "./Services.css";
function Step() {
  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item lg={11.5}>
          <Grid container>
            <Grid item sm={12} lg={5}>
              <img className="step_img" src="./Assets/girlser.svg" alt="girl" />
            </Grid>
            <Grid item sm={12} lg={7} className="step_second">
              <p className="step_heading">STEPS</p>
              <p className="step_top">
                Easy to <span className="step_span">Get Started.</span>
              </p>
              {/* Content start here */}
              <div className="step_content">
                <div>
                  <p className="step_1">01</p>
                </div>
                <div>
                  <p className="step_register">Register</p>
                  <p className="step_para">
                    Create an account with us using Email or Phone Number.
                  </p>
                </div>
              </div>
              <div className="step_content">
                <div>
                  <p className="step_1">02</p>
                </div>
                <div>
                  <p className="step_register">Fill Form</p>
                  <p className="step_para">
                  Enter your tax information online using  Phone Numbers.
                  </p>
                </div>
              </div>
              <div className="step_content">
                <div>
                  <p className="step_1">03</p>
                </div>
                <div>
                  <p className="step_register">Sign</p>
                  <p className="step_para">
                  Electronically sign and file your return using using Email.</p>
                </div>
              </div>
              <div className="step_content">
                <div>
                  <p className="step_1">04</p>
                </div>
                <div>
                  <p className="step_register">Download</p>
                  <p className="step_para">
                  Print your return for recordkeeping using Phone Number.</p>
                </div>
              </div>
             
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Step;
