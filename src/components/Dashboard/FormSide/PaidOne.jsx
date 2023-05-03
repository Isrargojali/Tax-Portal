import { Grid } from "@mui/material";
import React from "react";
import Checkbox from "@mui/material/Checkbox";

function PaidOne() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="status_form_main">
      <div className="digital_heading">
        <h1>Paid Prepare Used Only</h1>
        <p className="digital_heading_blue">
          Joint return? See instructions. Keep a copy for your records.
        </p>
      </div>
      <Grid container justifyContent={"space-evenly"}>
        <Grid item lg={10} className="paid_container">
          <Grid container>
            <Grid item lg={3}>
              <label htmlFor="">Preparer’s name </label>
              <input type="text" />
            </Grid>
            <Grid item lg={3}>
              <label htmlFor="">Preparer’s signature</label>
              <input type="text" />
            </Grid>
            <Grid item lg={3}>
              <label htmlFor="">Date</label>
              <input type="date" />
            </Grid>
            <Grid item lg={3}>
              <label htmlFor="">PTIN</label>
              <input type="text" />
            </Grid>
            <Grid container className="paid_chkbox">
              <Grid item lg={2}>
                <label htmlFor="">Self-employed</label>
              </Grid>

              <Grid item lg={2}>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            justifyContent={"space-evenly"}
            className="padi_container_three"
          >
            <Grid item lg={3}>
              <label htmlFor="">Firm’s name</label>
            </Grid>
            <Grid item lg={8}>
              <input type="text" />
            </Grid>
            <Grid item lg={3}>
              <label htmlFor="">Phone no.</label>
            </Grid>
            <Grid item lg={8}>
              <input type="tel" />
            </Grid>
            <Grid item lg={3}>
              <label htmlFor="">Firm’s address</label>
            </Grid>
            <Grid item lg={8}>
              <input type="text" />
            </Grid>
            <Grid item lg={3}>
              <label htmlFor="">Firm’s EIN</label>
            </Grid>
            <Grid item lg={8}>
              <input type="text" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className="paid_btn">
        <button className="paid_button">submit</button>
      </div>
    </div>
  );
}

export default PaidOne;
