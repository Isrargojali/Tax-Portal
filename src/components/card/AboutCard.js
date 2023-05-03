import React from "react";
import "./AboutCard.css";
import AboutContent from "./AboutContent";

function About() {
  const data = [
    {
      cardHeading: "Simple Free",
      cardPara:
        "Simple tax situations (basic 1040). Includes one free federal and one state return.",
      cardBtn: "File For Free",
      cardAmount: "0$",
    },
    {
      cardHeading: "Classic",
      cardPara:
        "All forms, deductions, and credits. The best value for any tax situation and all returns",
      cardBtn: "Start For Free",
      cardAmount: "30$",
    },
    {
      cardHeading: "Premium",
      cardPara:
        "Ask a Tax Pro and live chat, plus skip-the-line phone & email suppot.and all returns",
      cardBtn: "start For Free",
      cardAmount: "50$",
    },
    {
      cardHeading: "Self-Employed",
      cardPara:
        "Personal and business income and expenses, 1099, and Schedule C.and all returns",
      cardBtn: "start For Free",
      cardAmount: "60$",
    },
  ];
  return (
    <div>
      <div className="card-top">
        <div className="about_section">
          {data.map((e) => {
            return (
              <div className="about_card">
                <div className="card_img">
                  <img className="about_img" src={e.cardImage} alt="" />
                </div>

                <h1 className="card_heading">{e.cardHeading}</h1>
                <p>{e.cardPara}</p>
                <h2 className="dollar">{e.cardAmount}</h2>
                <button className="card_button">{e.cardBtn}</button>
              </div>
            );
          })}
        </div>
      </div>
      <AboutContent />
    </div>
  );
}

export default About;
