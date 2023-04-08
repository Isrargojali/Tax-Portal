import React from "react";
import { Grid } from "@mui/material";

function AboutContent() {
  const content = [
    {
      cardImage: "./Assets/refund.png",
      contentHeading: "Fastest tax Refund",
      contentPara:
        "Choose direct deposit for your refund and e-file your return to get your fastest refund possible.",
    },
    {
      cardImage: "./Assets/support.png",
      contentHeading: "Help you need",
      contentPara:
        "Everyone gets free, unlimited phone and email support. And if you need more help, we have you covered from Ask a Tax Pro to Audit Defense.",
    },
    {
      cardImage: "./Assets/file.png",
      contentHeading: "File on the go",
      contentPara:
        "Download our free app for tax filing, resources, news, and tips at your fingertips.",
    },
    {
      cardImage: "./Assets/coin.png",
      contentHeading: "Guaranteed maxium refund",
      contentPara:
        "We ensure you will get every dollar back that you’re entitled, or we’ll refund you the applicable amount paid.​",
    },
    {
      cardImage: "./Assets/target.png",
      contentHeading: "100% accuracy",
      contentPara:
        "We stand behind the accuracy of your return and will reimburse you in the case of any penalties.",
    },
    {
      cardImage: "./Assets/badge.png",
      contentHeading: "Zero pocket fee",
      contentPara:
        "You have the option to deduct the cost of your TaxSlayer products and services from your federal refund instead of paying when you file.",
    },
  ];
  return (
    <div>
      <div className="content-container">
        <p className="content-text">
          Committed to giving you the right tools at the right price
        </p>
        <p className="content-two">Everything you need to slay your taxes</p>
        <Grid container justifyContent="space-evenly">
          {content.map((e) => {
            return (
              <Grid item lg={3.5}>
                <div className="content_img">
                  <img className="about_img" src={e.cardImage} alt="" />
                </div>
                <h3 className="content_heading">{e.contentHeading}</h3>
                <p className="content_para">{e.contentPara}</p>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default AboutContent;
