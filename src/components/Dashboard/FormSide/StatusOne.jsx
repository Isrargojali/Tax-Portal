import { Grid } from "@mui/material";
import React from "react";

function StatusOne() {
  return (
    <div>
      <div className="status_form_main">
        <div className="status_heading">
          <h1>Personal information</h1>
          <p className="status_heading_blue">Whats your mailing address?</p>
        </div>
        <hr />

        <form action="submit" className="status_form">
          <datalist id="countries">
            {[
              "USA",
              "Canada",
              "Mexico",
              "Brazil",
              "Argentina",
              "Chile",
              "Peru",
              "Colombia",
            ].map((country) => (
              <option key={country} value={country} />
            ))}
          </datalist>
          <label htmlFor="">Country</label>
          <input list="countries" type="text" id="country" name="country" />
          <label htmlFor="">Address (Street number & name)</label>
          <input type="text" />
          <label htmlFor="">Apartment (provide apartment number only)</label>
          <input className="no_input " type="text" />
          <label htmlFor="">ZIP Code</label>
          <input type="TEXT" className="no_input " /> -
          <input type="TEXT" className="no_input " />
          <label htmlFor="">City town,or post office</label>
          <input type="text" />
          <datalist id="countries">
            {[
              "USA",
              "Canada",
              "Mexico",
              "Brazil",
              "Argentina",
              "Chile",
              "Peru",
              "Colombia",
            ].map((country) => (
              <option key={country} value={country} />
            ))}
          </datalist>
          <label htmlFor="">State*</label>
          <input list="countries" type="text" id="country" name="country" />
          <datalist id="countries">
            {[
              "USA",
              "Canada",
              "Mexico",
              "Brazil",
              "Argentina",
              "Chile",
              "Peru",
              "Colombia",
            ].map((country) => (
              <option key={country} value={country} />
            ))}
          </datalist>
          <label htmlFor="">Residency Status </label>
          <input list="countries" type="text" id="country" name="country" />
          <div className="spouse_box">
            <Grid container justifyContent={"space-between"}>
              <Grid item lg={8}>
                <p>
                  Presidential Election Campaign Check here if you, or your
                  spouse if filing jointly, want $3 to go to this fund. Checking
                  a box below will not change your tax or refund.
                </p>
              </Grid>
              <Grid item lg={1}>
                <input type="checkbox" />
                <label>yes</label>
              </Grid>
              <Grid item lg={1}>
                <input type="checkbox" />
                <label>No</label>
              </Grid>
            </Grid>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StatusOne;
