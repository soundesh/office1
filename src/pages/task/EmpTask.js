import React from "react";
import Header from "../Header";
import Emptasktable from "../../components/emptask/Emptasktable";
const inititalState1 = [
  {
    id: "1233",
    taskdate: "06/10/2022",
    taskgiven: "anand kumar naveen",
    project: "office ui office ui office ui office",
    task: "dashboard screen office ui office ui office",
    taskassigned: "soundesh",
    empremarks: " officedashboard screen office ui office ui office",
    Approverremarks: "creating dash boarddashboard screen office ui ",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "No",
  },

  {
    id: "1231",
    taskdate: "07/10/2021",
    taskgiven: "anand",
    project: "office ui",
    task: "dashboard screen",
    taskassigned: "soundesh",
    empremarks: "creating dash board",
    Approverremarks: "creating dash board",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "No",
  },

  {
    id: "1232",
    taskdate: "06/04/2022",
    taskgiven: "anand",
    project: "office ui",
    task: "dashboard screen",
    taskassigned: "soundesh",
    empremarks: "creating dash board",
    Approverremarks: "creating dash board",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "yes",
  },

  {
    id: "12331",
    taskdate: "25/12/2020",
    taskgiven: "anand",
    project: "office ui",
    task: "dashboard screen",
    taskassigned: "soundesh",
    empremarks: "creating dash board",
    Approverremarks: "creating dash board",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "yes",
  },

  {
    id: "123312",
    taskdate: "08/10/2022",
    taskgiven: "anand",
    project: "office ui",
    task: "dashboard screen",
    taskassigned: "soundesh",
    empremarks: "creating dash board",
    Approverremarks: "creating dash board",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "No",
  },

  {
    id: "1233",
    taskdate: "14/10/2022",
    taskgiven: "anand",
    project: "office ui",
    task: "dashboard screen",
    taskassigned: "soundesh",
    empremarks: "creating dash board",
    Approverremarks: "creating dash board",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "yes",
  },
];
const headerstate = [
  {
    id: "1233",
    "Task date": "",
    "Task Given": "",
    Project: "",
    Task: "",
    "Task Assigned": "",
    "Employee Remarks": "",
    "Approver Remarks": "",
    "Worked Hours": "",
    "Clocked Hours": "",
    "Utilised Hours": "",
    Efficiency: "",
    Status: "",
  },
];

const EmpTask = () => {
  return (
    <div className="ml-1">
      <div>
        <Header
          pagehead="employee task"
          pageicon={<i className="fa fa-users" aria-hidden="true"></i>}
        />
      </div>
      <div>
        <Emptasktable
          initialState={inititalState1}
          title="Not Approved task"
          headerState={headerstate}
          CheckDeletecolor="pink"
        />
      </div>
    </div>
  );
};

export default EmpTask;
