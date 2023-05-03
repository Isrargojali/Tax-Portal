import React from "react";
import { useNavigate } from "react-router-dom";

function StandardOne() {
  const navigate = useNavigate();

  return (
    <div className="status_form_main">
      <h1>Standard Deduction</h1>
      <p className="standard_heading_blue">Someone can claim:</p>
      <div className="radio_box">
        <input type="checkbox" />
        <label htmlFor="">You as a dependent</label>
      </div>
      <div className="radio_box">
        <input type="checkbox" />
        <label htmlFor="">Your spouse as a dependent</label>
      </div>
      <div className="radio_box">
        <input type="checkbox" />
        <label htmlFor="">
          Spouse itemizes on a separate return or you were a dual-status alie
        </label>
      </div>
      <p className="stand_p">Age/Blindness</p>
      <div className="radio_box">
        <input type="checkbox" />
        <label htmlFor="">Were born before January 2, 1958</label>
      </div>
      <div className="radio_box">
        <input type="checkbox" />
        <label htmlFor="">Are blind</label>
      </div>
      <div className="radio_box">
        <input type="checkbox" />
        <label htmlFor="">Was born before January 2, 1958</label>
      </div>
      <div className="radio_box">
        <input type="checkbox" />
        <label htmlFor="">is blind</label>
      </div>
      <div className="center">
        <button className="next_btn" onClick={() => navigate("/dependents")}>
          next
        </button>
      </div>
    </div>
  );
}

export default StandardOne;
