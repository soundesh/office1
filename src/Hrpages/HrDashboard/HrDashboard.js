import React from "react";
import Header from "../../pages/Header";
import "./Hrdashboard.css";
import Navpages from "./Navpages";

const HrDashboard = () => {
  return (
    <div className="bg-slate-200">
      <div>
        <Header
          pagehead="Hr Dashboard"
          pageicon={<i className="material-icons">dashboard</i>}
        />
      </div>

      <div>
        <Navpages />
      </div>
    </div>
  );
};

export default HrDashboard;
