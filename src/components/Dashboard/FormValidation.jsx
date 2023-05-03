import React from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function FormValidation() {
  const navigate = useNavigate();
  const formData = [
    {
      lable: "Filling Status",
    },
    {
      lable: "Digital Assets",
    },
    {
      lable: "Standard Deduction",
    },
    {
      lable: "Dependents",
    },
    {
      lable: "Income",
    },
    {
      lable: "Tax & Credits",
    },
    {
      lable: "Payments",
    },
    {
      lable: "Refunds",
    },
    {
      lable: "Amount You Owe",
    },
    {
      lable: "Third Party  Designee",
    },
    {
      lable: "Sign Here",
    },
    {
      lable: "Paid Prepare Use Only",
    },
  ];
  return (
    <div className="form_main">
      <div className="form_header">
        <div className="item form_heading">
          <h1>U.S. Individual Income Tax Return</h1>
          <p>Department of the Treasury—Internal Revenue Service</p>
        </div>
        <div className="item form_date">
          <span>2022</span>
        </div>
      </div>
      <Grid container justifyContent={"space-between"}>
        {formData.map((e) => {
          return (
            <Grid item lg={5.7}>
              <div className="form_box">
                <span>{e.lable}</span>
                <input type="checkbox" />
              </div>
            </Grid>
          );
        })}
        <Grid item lg={12}>
          <div className="center">
            <button className="next_btn" onClick={() => navigate("/taxform")}>
              next
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default FormValidation;
