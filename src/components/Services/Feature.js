import React from 'react'
import "./Services.css"
import { Grid } from '@mui/material'
function Feature() {
  const feature = [
    {
      featureImage: "./Assets/refund.png",
      featuretHeading: "Fastest tax Refund",
      featurePara:
        "Choose direct deposit for your refund and e-file your return to get your fastest refund possible.",
    },
    {
      featureImage: "./Assets/support.png",
      featuretHeading: "Help you need",
      featurePara:
        "Everyone gets free, unlimited phone and email support. And if you need more help, we have you covered from Ask a Tax Pro to Audit Defense.",
    },
    {
      featureImage: "./Assets/file.png",
      featuretHeading: "File on the go",
      featurePara:
        "Download our free app for tax filing, resources, news, and tips at your fingertips.",
    },
    {
      featureImage: "./Assets/coin.png",
      featuretHeading: "Guaranteed maxium refund",
      featurePara:
        "We ensure you will get every dollar back that you’re entitled, or we’ll refund you the applicable amount paid.​",
    },
    {
      featureImage: "./Assets/target.png",
      featuretHeading: "100% accuracy",
      featurePara:
        "We stand behind the accuracy of your return and will reimburse you in the case of any penalties.",
    },
    {
      featureImage: "./Assets/badge.png",
      featuretHeading: "Zero pocket fee",
      featurePara:
        "You have the option to deduct the cost of your TaxSlayer products and services from your federal refund instead of paying when you file.",
    },
  ];
  return (
    <div>
      <div className="feture_container">
          <p className='feaure_heading'>FEATURES</p>
          <p className='feaure_top'>We have Amazing <span className='feature_span'> Service.</span></p>
      <p className='feture_para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Grid container justifyContent="space-evenly" className='feature'>
          {feature.map((e) => {
            return (
              <Grid item lg={3.5}>
                <div className="content_img">
                  <img className="feature_img" src={e.featureImage} alt="" />
                </div>
                <h3 className="feature_heading">{e.featuretHeading}</h3>
                <p className="feature_para">{e.featurePara}</p>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  )
}

export default Feature
