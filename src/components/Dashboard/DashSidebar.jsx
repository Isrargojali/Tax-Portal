import React from "react";
import { Link, useLocation } from "react-router-dom";

function DashSidebar() {
  const sidebarData = [
    {
      icon: "./Assets/dashone.png",
      label: "dashboard",
      Link: "/dashboard",
      step: 1,
    },
    {
      icon: "./Assets/dashtwo.png",
      label: "account",
      Link: "/accounts",
      step: 2,
    },
    {
      icon: "./Assets/dashfive.png",
      label: "setting",
      Link: "/setting",

      step: 3,
    },
    {
      icon: "./Assets/dashthree.png",
      label: "notification",
      Link: "/notification",

      step: 4,
    },
    {
      icon: "./Assets/dashfour.png",
      label: "support",
      Link: "/support",

      step: 5,
    },
  ];
  const location = useLocation();

  return (
    <div className="sidebar_main">
      <div className="sidebar_box">
        {sidebarData.map((e) => {
          return (
            <>
              <Link
                to={e.Link}
                className={`inner_bar ${
                  e.Link === location.pathname ? "active" : "inner_bar"
                }`}
              >
                <img className="side_icon" width={20} src={e.icon} alt="" />
                <span>{e.label}</span>
              </Link>
            </>
          );
        })}

        <div className="logout">
          <img src="./Assets/logout.png" width={20} alt="" />
          <span>log out</span>
        </div>
      </div>
    </div>
  );
}

export default DashSidebar;
