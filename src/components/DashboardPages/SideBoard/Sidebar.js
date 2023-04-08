import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { color } from '@mui/system';
function Sidebar() {
  return (
    <div className="sidebar">
      <p>OMB No. 1545-0074 
IRS Use Only—Do not write or staple in this space.</p>
      <ul>
        <li>Status</li>
        <li>Digital Assets</li>
        <li>Standard Deduction</li>
        <li>Dependents</li>
        <li>Income</li>
        <li>Tax & Credits </li>
        <li>Payments</li>
        <li>Refund</li>
        <li>Amount You Owe</li>
        <li>Third Party Designee</li>
        <li>Sign Here</li>
        <li>Paid Prepare Used Only</li>
      </ul>
      <div className='sidebar_icon'>
        <LogoutIcon style={{color:"#5500ff"}}/>
        <h5>Log Out</h5>
      </div>
    </div>
  );
}

export default Sidebar;