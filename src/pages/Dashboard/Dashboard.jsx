import React from "react";
import Header from "../Header";
import "./dashboard.css";
import ProfileDetails from "../../components/profileComponet/ProfileDetails";
import EmpolyeeTable from "../../components/EmployeeTable/EmpolyeeTable";
import Dummydata from "../../components/table/Dummydata";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="dashboard bg-indigo-800  ">
        <div>
          <Header
            pagehead="Dashboard"
            pageicon={<i className="material-icons">dashboard</i>}
          />
        </div>
        <div>
          <ProfileDetails />
        </div>
        <div>
          <EmpolyeeTable initialData={Dummydata} title="Today task" />
        </div>
        <div>
          <EmpolyeeTable initialData={Dummydata} title="pending task" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
