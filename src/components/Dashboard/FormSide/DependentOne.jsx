import React from "react";
import { useNavigate } from "react-router-dom";
import "../Dashboard.css";
function DependentOne() {
  const navigate = useNavigate();

  return (
    <div className="status_form_main">
      <h1>Dependents</h1>
      <div className="dependet_heading">
        <p className="digital_heading_blue">
          If more than four dependents, see instructions and check here
        </p>
        <input className="depend_box" type="checkbox" />
      </div>
      <div className="tabel_container">
        <table className="depend_tabel">
          <tr>
            <th>First name</th>
          </tr>
          <tr>
            <input type="text" />
          </tr>
          <tr>
            <input type="text" />
          </tr>
          <tr>
            <input type="text" />
          </tr>
          <tr>
            <input type="text" />
          </tr>
        </table>
        <table className="depend_tabel">
          <tr>
            <th>Last name</th>
          </tr>
          <tr>
            <input type="text" />
          </tr>
          <tr>
            <input type="text" />
          </tr>
          <tr>
            <input type="text" />
          </tr>
          <tr>
            <input type="text" />
          </tr>
        </table>
        <table className="depend_tabel">
          <tr>
            <th>Social security no</th>
          </tr>
          <tr>
            <input type="text" />
          </tr>
          <tr>
            <input type="text" />
          </tr>
          <tr>
            <input type="text" />
          </tr>
          <tr>
            <input type="text" />
          </tr>
        </table>
        <table className="depend_tabel">
          <tr>
            <th>Relationship to You</th>
          </tr>
          <tr>
            <input type="text" />
          </tr>
          <tr>
            <input type="text" />
          </tr>
          <tr>
            <input type="text" />
          </tr>
          <tr>
            <input type="text" />
          </tr>
        </table>
        <table className="depend_tabel_last">
          <tr>
            <th>Child tax credit</th>
          </tr>
          <tr>
            <input type="text" />
          </tr>
          <tr>
            <input type="text" />
          </tr>
          <tr>
            <input type="text" />
          </tr>
          <tr>
            <input type="text" />
          </tr>
        </table>
        <table className="depend_tabel_last">
          <tr>
            <th>Credit for dependents</th>
          </tr>
          <tr>
            <input type="text" />
          </tr>
          <tr>
            <input type="text" />
          </tr>
          <tr>
            <input type="text" />
          </tr>
          <tr>
            <input type="text" />
          </tr>
        </table>
      </div>
      <div className="center">
        <button className="next_btn" onClick={() => navigate("/income")}>
          next
        </button>
      </div>
    </div>
  );
}

export default DependentOne;
