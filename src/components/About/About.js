import { Grid } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import "./About.css";
import Footer from "../footer/Footer";
import AboutValue from "./AboutValue";
import AboutTeam from "./AboutTeam";

function About() {
  return (
    <>
      <Navbar />
      <div className="about_container">
        <Grid container justifyContent="center">
          <Grid item lg={11.5}> 
     
          
          <Grid  className="conatine_one" container> 
              <Grid item sm={12} lg={6}>
                <p className="about_p">ABOUT TAX PAYER CENTRAL</p>
                <p className="about_h1">
                  We are a modern
                  <br /> agency to help you <br />
                  fill 1040 Form.
                </p>
                <p className="para_about">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Grid>
              <Grid item sm={12} lg={6}>
                <img className="about_img_one" src="./Assets/about.avif" alt="" />
              </Grid>
            </Grid>
       
         
          <Grid container className="conatine_two">
              <Grid item sm={12} lg={6}>
                <img className="about_img_one" src="./Assets/about2.avif" alt="" />
              </Grid>
              <Grid item sm={12} lg={6}>
                <p className="about_p_two">OUR VISION</p>
                <p className="about_h1_two">
                We aim to make <br/>people life easier.
                </p>
                <p className="about_two">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Grid>
            </Grid>
     
          
          </Grid>
        </Grid>
      </div>
      <AboutValue/>
      <AboutTeam/>
      <Footer/>
    </>
  );
}

export default About;
