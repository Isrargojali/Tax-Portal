import { Grid } from "@mui/material";
import "./About.css";

function AboutTeam() {
  return (
    <div>
      <Grid container>
        <Grid item lg={11.5} sm={11.5} textAlign="center">
          <p className="ourvalue_heading">OUR VALUES</p>
          <p className="ourvalue_top">We follow these.</p>
          <p className="value_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </Grid>
        <Grid item lg={11.9} sm={11.5}>
          <Grid container justifyContent="space-evenly">
            <Grid item lg={3}>
              <img className="value_img" src="./Assets/team.svg" alt="" />
              <h3 className="value_h3">24/7 Support</h3>
              <p className="valuecard_para">
                Lorem ipsum donor amet siti ceali placeholder text alipiscing
                elit sed do eiusmod temport
              </p>
            </Grid>
            <Grid item lg={3}>
              <img className="value_img" src="./Assets/team1.svg" alt="" />
              <h3 className="value_h3">Strong Teams</h3>
              <p className="valuecard_para">
                Lorem ipsum donor amet siti ceali placeholder text alipiscing
                elit sed do eiusmod temport
              </p>
            </Grid>
            <Grid item lg={3}>
              <img className="value_img" src="./Assets/team2.svg" alt="" />
              <h3 className="value_h3">Customer Satisfaction</h3>
              <p className="valuecard_para">
                Lorem ipsum donor amet siti ceali placeholder text alipiscing
                elit sed do eiusmod temport
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutTeam;
