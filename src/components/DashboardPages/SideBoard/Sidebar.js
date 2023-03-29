import React, { useState } from "react";
import StatusPage from "../StatusPage";
import LogoutIcon from "@mui/icons-material/Logout";


const Sidebar = () => {
  const [content, setContent] = useState("content1");

  const handleContentChange = (value) => {
    setContent(value);
  };

  return (
    <div className="sidebar_line">
      <ul>
      <li onClick={() => handleContentChange("content1")}>OMB No. 1545-0074 <br/>
IRS Use Only—Do not write or staple in this space.</li>
        <li onClick={() => handleContentChange("content1")}>Status</li>
        <li onClick={() => handleContentChange("content2")}>Digital Assets</li>
        <li onClick={() => handleContentChange("content3")}>Standard Deduction</li>
        <li onClick={() => handleContentChange("content3")}>Tax & Credits</li>
        <li onClick={() => handleContentChange("content4")}>Payments</li>
        <li onClick={() => handleContentChange("content5")}>Refund</li>
        <li onClick={() => handleContentChange("content7")}>Amount You Owe</li> 
        <li onClick={() => handleContentChange("content7")}>Third Party Designee</li> 
        <li onClick={() => handleContentChange("content7")}>Sign Here</li> 
        <li onClick={() => handleContentChange("content7")}>Paid Prepare Used Only</li> 
      
      </ul>
      <div className="sidebar-logout">
      <LogoutIcon className="sidebar-icon"/>
      <p> Log Out</p>
      </div>
      <div className="content-container">
        {content === "content1" && <StatusPage />} 
      </div>
    </div>
  );
};

export default Sidebar;
