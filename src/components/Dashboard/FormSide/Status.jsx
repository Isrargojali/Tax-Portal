import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Dashboard.css";
import StatusOne from "./StatusOne";
import StatusTwo from "./StatusTwo";

function Status() {
  const [formStep, setFormStep] = useState(1);
  const handleContinue = () => {
    setFormStep(formStep + 1);
  };

  const handleBack = () => {
    setFormStep((prevStep) => prevStep - 1);
  };

  const navigate = useNavigate();

  return (
    <>
      {formStep === 1 && (
        <div className="status_form_main">
          <div className="status_heading">
            <h1>Personal information</h1>
            <p>
              If you checked the MFS box, enter the name of your spouse. If you
              checked the HOH or QSS box, enter the child’s name if the
              qualifying person is a child but not your dependent:
            </p>
          </div>
          <hr />
          <div className="status_form_container">
            <form action="submit" className="status_form">
              <label htmlFor="">First Name</label>
              <input type="text" />
              <label htmlFor="">Middle Name</label>
              <input type="text" />
              <label htmlFor="">
                SSN The IRIS requires your Social Security Number for
                e-filling.*
              </label>
              <input className="no_input " type="text" />-
              <input className="no_input" type="text" />-
              <input className="no_input" type="text" />
              <label htmlFor="">Date of Birth</label>
              <input type="date" id="birthday" />
              <label htmlFor="">Occupation</label>
              <input type="text" />
            </form>
          </div>
          <div className="center">
            <button className="next_btn" onClick={handleContinue}>
              next
            </button>
          </div>
          {/* end here */}
        </div>
      )}
      {formStep === 2 && (
        <>
          <StatusOne />
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
          <StatusTwo />
          <div className="center">
            <button className="next_btn" onClick={handleBack}>
              back
            </button>
            <button className="next_btn" onClick={() => navigate("/Digital")}>
              next
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Status;
