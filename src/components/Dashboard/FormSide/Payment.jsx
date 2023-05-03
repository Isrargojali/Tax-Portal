import React, { useState } from "react";
import DashboardNav from "../DashboardNav";
import FormSidebar from "./FormSidebar";
import { Grid } from "@mui/material";
import PaymentOne from "./PaymentOne";
import PaymentTwo from "./PaymentTwo";
function Payment() {
  const [formStep, setFormStep] = useState(1);
  const handleContinue = () => {
    setFormStep(formStep + 1);
  };

  const handleBack = () => {
    setFormStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <DashboardNav />
      <div className="tax_form_main">
        <Grid container justifyContent={"space-between"}>
          <Grid item lg={1}>
            <FormSidebar />
          </Grid>
          <Grid item lg={9.5}>
            {formStep === 1 && (
              <>
                <PaymentOne />
                <div className="center">
                  <button className="next_btn" onClick={handleContinue}>
                    next
                  </button>
                </div>
              </>
            )}
            {formStep === 2 && (
              <>
                <PaymentTwo />
                <div className="center">
                  <button className="next_btn" onClick={handleBack}>
                    back
                  </button>
                  <button className="next_btn" onClick={handleContinue}>
                    next
                  </button>
                </div>
              </>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Payment;
