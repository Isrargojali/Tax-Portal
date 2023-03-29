import React from "react";
import { Grid } from "@mui/material";
import "./pages.css"

function StatusPage() {
  const data = [
    {
      btnText: "Married filing separately (MFS)",
    },
    {
      btnText: "Head of household (HOH)",
    },
    {
      btnText: "Qualifying surviving spouse (QSS)",
    },
  ];
  return (
    <div>
      <h1>status</h1>
      <div className="status_btn">
        <Grid container>
          <Grid item lg={12}>
            <Grid container justifyContent={"space-between"}>
              <Grid item lg={5.9}>
                <button className="status_btns">single</button>
              </Grid>
              <Grid item lg={5.9}>
                <button className="status_btns">married</button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={12}>
            {data.map((e) => {
                return (
                  <Grid container>
                <Grid item lg={12}>
                    <div className="status_checkbox">
                  <span >{e.btnText}</span><input type="checkbox" />

                    </div>
                </Grid>
            </Grid>
              );
            })}
            
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default StatusPage;
