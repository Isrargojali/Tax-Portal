import React from "react";
function StatusTwo() {
  return (
    <div className="status_form_main">
      <div className="status_heading">
        <h1>Personal information</h1>
        <p className="status_heading_blue">Whats your Filling Status?</p>

        <div>
          <div className="radio_box">
            <input type="radio" />
            <label htmlFor="">Single</label>
          </div>
          <div className="radio_box">
            <input type="radio" />
            <label htmlFor="">Married Filling Jointly</label>
          </div>
          <div className="radio_box">
            <input type="radio" />
            <label htmlFor="">Married filing separately (MFS)</label>
          </div>
          <div className="radio_box">
            <input type="radio" />
            <label htmlFor="">Head of household (HOH)</label>
          </div>
          <div className="radio_box">
            <input type="radio" />
            <label htmlFor="">Qualifying surviving spouse (QSS)</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusTwo;
