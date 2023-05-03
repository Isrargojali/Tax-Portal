import { Grid } from "@mui/material";
import React from "react";

function PaymentOne() {
  return (
    <div className="status_form_main">
      <div className="digital_heading">
        <h1>Payments</h1>
        <p className="digital_heading_blue">
          If you have a qualifying child, attach Sch. EIC (27).
        </p>
        <p className="payment_p"> 25. Federal income tax withheld from:</p>
      </div>
      <Grid container justifyContent={"start"} className="payment_container">
        <Grid item lg={12}>
          <Grid container>
            <Grid item lg={4}>
              <label htmlFor="">a Form(s) W-2</label>
            </Grid>
            <Grid item lg={4}>
              <input type="text" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12}>
          <Grid container>
            <Grid item lg={4}>
              <label htmlFor="">b Form(s) 1099</label>
            </Grid>
            <Grid item lg={4}>
              <input type="text" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12}>
          <Grid container>
            <Grid item lg={4}>
              <label htmlFor="">c Other forms (see instructions)</label>
            </Grid>
            <Grid item lg={4}>
              <input type="text" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12}>
          <Grid container>
            <Grid item lg={4}>
              <label htmlFor="">d Add lines 25a through 25c</label>
            </Grid>
            <Grid item lg={4}>
              <input type="text" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Grid two */}
      <Grid container justifyContent={"space-evenly"}>
        <Grid item lg={12}>
          <Grid
            container
            className="income_three_container"
            justifyContent={"space-evenly"}
          >
            <Grid item lg={8}>
              <label htmlFor="">
                {" "}
                2022 estimated tax payments and amount applied from 2021 return
              </label>
              <input type="text" />
            </Grid>
            <Grid item lg={8}>
              <label htmlFor="">Earned income credit (EIC)</label>
              <input type="text" />
            </Grid>
            <Grid item lg={8}>
              <label htmlFor="">
                Additional child tax credit from Schedule 8812
              </label>
              <input type="text" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default PaymentOne;
