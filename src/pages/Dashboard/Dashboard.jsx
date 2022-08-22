import React from "react";
import Header from "../Header";
import "./dashboard.css";
import SortDate from "../../components/SortDate.jsx/SortDate";

import Paper from "@mui/material/Paper";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="dashboard ml--4 ">
        <Paper elevation={3}>
          <Header />
          <hr />
          <div>
            <SortDate />
          </div>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
