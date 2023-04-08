import React from "react";
import Navbar from "../Navbar/Navbar";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Grid from '@mui/material/Grid';
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="center" justifyContent="center" style={{marginTop:"5rem"}} className="home-bag">
        <Grid item lg={5}>
        <p className="home_p">
              Pay Tax Any Where <br />{" "}
              <span className="home_text">Any Time </span>
            </p>
            <p className="home-para">
              Our Services are free and will help you in all
            </p>
            <button className="home-btn-two" onClick={() => navigate('/video')}>
            <PlayCircleIcon /> Play Video
          </button>
        </Grid>
        <Grid item lg={5}>
        <img className="home-img" src="./Assets/wome.png" alt="home" />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
