import React from "react";
import { Link, useLocation } from "react-router-dom";

function FormSidebar() {
  const sidebarData = [
    {
      label: "Status",
      Link: "/taxform",
    },
    {
      label: "Digital Assets",
      Link: "/Digital",
    },
    {
      label: "Standard Deduction",
      Link: "/Standard-deduction",
    },
    {
      label: "Dependents",
      Link: "/dependents",
    },
    {
      label: "Income",
      Link: "/income",
    },
    {
      label: "Tax & Credits",
      Link: "/tax",
    },
    {
      label: "Payments",
      Link: "/payment",
    },
    {
      label: "Refund",
      Link: "/refund",
    },
    {
      label: "Amount You Owe",
      Link: "/amount",
    },
    {
      label: "Third Party Designee",
      Link: "/third",
    },
    {
      label: "Sign Here",
      Link: "/signhere",
    },
    {
      label: "Paid Prepare Used Only",
      Link: "/paid",
    },
  ];

  const location = useLocation();

  return (
    <div className="form_sidebar_main">
      <div className="form_sidebar_box">
        {sidebarData.map((e) => {
          return (
            <>
              <Link
                to={e.Link}
                className={`form_inner_bar ${
                  e.Link === location.pathname ? "active" : "form_inner_bar"
                }`}
              >
                <img className="side_icon" width={20} src={e.icon} alt="" />
                <span>{e.label}</span>
              </Link>
            </>
          );
        })}

        <div className="logout_sidebar">
          <img src="./Assets/logout.png" width={20} alt="" />
          <span>log out</span>
        </div>
      </div>
    </div>
  );
}

export default FormSidebar;
