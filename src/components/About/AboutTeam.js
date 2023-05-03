import React from "react";
import "./About.css";
import { Grid } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function AboutTeam() {
  return (
    <div className="about_team_section">
      <Grid container>
        <Grid item lg={11.5} sm={11.5} textAlign="center">
          <p className="team_heading">OUR TEAM</p>
          <p className="team_top">Meet These Fine Folks.</p>
          <p className="team_para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
        <Grid item lg={11.9} sm={11.5}>
          <Grid container justifyContent="space-evenly">
            <Grid item lg={3}>
              <img className="team_img" src="./Assets/men2.jpg" alt="" />
              <p className="team_founder">FOUNDER</p>
              <p className="team_name">Adam Cuppy</p>
              <div className="team_icon_top">
                <TwitterIcon className="team_icon" />
                <LinkedInIcon className="team_icon" />
                <GitHubIcon className="team_icon" />
              </div>
            </Grid>
            <Grid item lg={3}>
              <img className="team_img" src="./Assets/men2.jpg" alt="" />
              <p className="team_founder">CEO</p>
              <p className="team_name">Charlotte Hale</p>
              <div className="team_icon_top">
                <TwitterIcon className="team_icon" />
                <LinkedInIcon className="team_icon" />
                <GitHubIcon className="team_icon" />
              </div>
            </Grid>
            <Grid item lg={3}>
              <img className="team_img" src="./Assets/men2.jpg" alt="" />
              <p className="team_founder">PROJECT MANAGER</p>
              <p className="team_name">Silvester Wize</p>
              <div className="team_icon_top">
                <TwitterIcon className="team_icon" />
                <LinkedInIcon className="team_icon" />
                <GitHubIcon className="team_icon" />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutTeam;
