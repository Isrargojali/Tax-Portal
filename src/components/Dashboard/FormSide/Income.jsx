import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import DashboardNav from "../DashboardNav";
import FormSidebar from "./FormSidebar";
import IncomeOne from "./IncomeOne";
import InccomeTwo from "./InccomeTwo";
import IncomeThree from "./IncomeThree";
import IncomeFour from "./IncomeFour";
import IncomeFive from "./IncomeFive";
import "../Dashboard.css";
function Income() {
  const [formStep, setFormStep] = useState(1);
  const handleContinue = () => {
    setFormStep(formStep + 1);
  };

  const handleBack = () => {
    setFormStep((prevStep) => prevStep - 1);
  };
  const navigate = useNavigate();

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
                <IncomeOne />
                <div className="center">
                  <button className="next_btn" onClick={handleContinue}>
                    next
                  </button>
                </div>
              </>
            )}
            {formStep === 2 && (
              <>
                <InccomeTwo />
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
            {formStep === 3 && (
              <>
                <IncomeThree />
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
            {formStep === 4 && (
              <>
                <IncomeFour />
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
            {formStep === 5 && (
              <>
                <IncomeFive />
                <div className="center">
                  <button className="next_btn" onClick={handleBack}>
                    back
                  </button>
                  <button className="next_btn" onClick={() => navigate("/tax")}>
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

export default Income;
