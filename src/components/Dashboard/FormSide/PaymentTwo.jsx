import React from "react";
import { Grid } from "@mui/material";
function PaymentTwo() {
  return (
    <div className="status_form_main">
      <Grid container justifyContent={"center"}>
        <Grid item lg={12} className="payment_text">
          <label htmlFor="">
            29. American opportunity credit from Form 8863, line 8
          </label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="payment_text">
          <label htmlFor="">30. Reserved for future use</label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="payment_text">
          <label htmlFor="">
            32. Add lines 27, 28, 29, and 31. These are your total other
            payments and refundable
          </label>
          <input type="text" />
        </Grid>
        <Grid item lg={12} className="payment_text">
          <label htmlFor="">
            33. Add lines 25d, 26, and 32. These are your total payments
          </label>
          <input type="text" />
        </Grid>
      </Grid>
    </div>
  );
}

export default PaymentTwo;
