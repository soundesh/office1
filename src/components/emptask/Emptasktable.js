import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Paper from "@mui/material/Paper";
import CreateIcon from "@mui/icons-material/Create";
import { useState, useEffect } from "react";
import "./Emptasktable.css";

import SelectorFrom from "../assitComponet/SelectorFrom";

const Emptasktable = ({
  initialState,
  headerState,
  title,
  CheckDeletecolor,
}) => {
  const [show, setShow] = useState(false);
  const [allData, setAllData] = useState(initialState);
  const [filteredData, setFilteredData] = useState(allData);
  const [ApprovedData, setApprovedData] = useState([initialState[0]]);
  const [updateTask, setUpdateTask] = useState([initialState[0]]);
  const [updateTaskData, setUpdateTaskData] = useState(initialState[0]);
  const [nonApprovedData, setNonApprovedData] = useState([initialState[0]]);
  const [edit, setEdit] = useState(true);
  const [added, setAdd] = useState([]);

  const [viewDetail, setViewDetail] = useState();
  const [ApplyLeave, setApplyLeave] = useState({
    date: " ",
    to: " ",
    from: " ",
    leaveType: " ",
    reason: "",
    Days: " ",
    reasonleave: "",
  });
  const [viewData, setViewData] = useState(initialState[0]);
  const [editData, setEditData] = useState([initialState[0]]);
  const [addInput] = useState(() => {
    const data = Object.keys(initialState[0]);
    var newObj = {};
    for (var i = 0; i < data.length; i++) {
      newObj[data[i]] = "";
    }
    return newObj;
  });
  useEffect(() => {
    const nonApproved = filteredData.filter((item) => {
      return item.status !== "yes";
    });
    const Approved = filteredData.filter((item) => {
      return item.status === "yes";
    });
    setNonApprovedData(nonApproved);
    setApprovedData(Approved);
  }, [filteredData]);

  // start handle funstions
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    const result = allData.filter((item) => {
      const data = () => {
        for (const user in item) {
          if (item[user].includes(value)) {
            return item;
          }
        }
      };
      return data();
    });
    setFilteredData(result);
    return;
  };
  //delete item in table
  const onhandleDelete = (deleteItem) => {
    if (window.confirm("please conform to delete")) {
      const data = allData.filter((item) => {
        return Object.values(item)[0] !== Object.values(deleteItem)[0];
      });
      setAllData(data);
      setFilteredData(data);
      console.log("You pressed OK!");
    }
  };
  const onhandleadd = () => {
    setAdd(true);
    setViewDetail(false);
  };

  const onRowshow = (e, item) => {
    e.preventDefault();
    setViewDetail(true);
    setAdd(false);
    setViewData(item);
  };

  const onRowshowclose = (e, item) => {
    e.preventDefault();
    setViewDetail(false);
    setAdd(true);
    setEdit(true);
  };

  const OnhandleEdit = (item) => {
    setEditData([item]);
    setEdit(!edit);
    setUpdateTask([item]);
    setUpdateTaskData(item);
  };

  const addSubmit = (e) => {
    e.preventDefault();
    console.log("add input ", addInput);
    setAdd(!added);
  };

  const onChangeUpdate = (e) => {
    const { name, value } = e.target;
    setUpdateTaskData({ ...updateTaskData, [name]: value });
  };

  const ontaskUpdateSubmit = (e) => {
    e.preventDefault();
    console.log("emp task update ", updateTaskData);
  };

  const editSubmit = (e) => {
    e.preventDefault();
  };

  function today() {
    let d = new Date();
    let currDate = d.getDate();
    let currMonth = d.getMonth() + 1;
    let currYear = d.getFullYear();
    return (
      (currDate < 10 ? "0" + currDate : currDate) +
      "/" +
      (currMonth < 10 ? "0" + currMonth : currMonth) +
      "/" +
      currYear
    );
  }

  const onChangeapplyLeave = (e) => {
    const { name, value } = e.target;
    setApplyLeave({
      ...ApplyLeave,
      [name]: value,
      date: today(),
    });
  };

  const yearData = () => {
    let year = [
      2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028,
      2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040,
      2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050,
    ];
    const yearData = year.filter((item) => {
      let d = new Date();
      let currYear = d.getFullYear();
      return item <= currYear;
    });
    return yearData.reverse();
  };

  const project = ["Office ui", "office data", "3d cad website"];

  // const filterYear = () => {
  //   const yearfilter = allData.filter((item) => {
  //     Object.keys(item).map((element) => {
  //       if (Object.keys(item)[1] === element) {
  //         const data = item[element].split("/");
  //         console.log(data);
  //       }
  //     });
  //   });
  // };
  // console.log(filterYear());
  const onchangefilter = (e) => {};

  return (
    <div>
      <div className="flex flex-row itmes-center space-x-1 ">
        <Paper
          elevation={3}
          className="overflow-auto py-1 max-w-[450px] flex flex-row items-center  p-1 space-x-1 justify-center"
        >
          <div className="flex flex-row  space-x-1  addEmpForm items-center hover:bg-red-300 rounded-lg bg-teal-300 justify-center  pt-2 p-2">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <SelectorFrom
              labeled="Year"
              OptionData={yearData()}
              sizewidth="15"
              Date="18 oct 2021"
              onChange={onchangefilter}
            />
          </div>
          <div className="flex flex-row  space-x-1  addEmpForm items-center hover:bg-red-300 rounded-lg bg-rose-300 justify-center  pt-2 p-2">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <SelectorFrom
              labeled="Week"
              OptionData={yearData()}
              sizewidth="12"
              Date="45"
              onChange={onchangefilter}
            />
          </div>
          <div className="flex flex-row  space-x-1  addEmpForm items-center hover:bg-red-300 rounded-lg bg-yellow-400 justify-center  pt-2 p-2">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <SelectorFrom
              labeled="Month"
              OptionData={yearData()}
              sizewidth="15"
              Date="december"
              onChange={onchangefilter}
            />
          </div>
        </Paper>

        <Paper
          elevation={3}
          className="overflow-auto py-1 flex flex-row items-center  p-1  space-x-1 justify-center"
        >
          <div className="space-x-1  hover:bg-red-300  addEmpForm flex flex-row rounded-lg bg-blue-200 justify-center  pt-1 p-2">
            <Paper>
              <label htmlFor="to" className="mr-1">
                From :
              </label>

              <input
                type="date"
                name="from"
                className="outline-none"
                onChange={(e) => {
                  onChangeapplyLeave(e);
                }}
              />
            </Paper>
          </div>
          <div className="space-x-1  hover:bg-red-300 flex  addEmpForm flex-row rounded-lg bg-blue-200 justify-center pt-1 p-2">
            <Paper>
              <label htmlFor="to" className="mr-1">
                Last :
              </label>
              <input
                type="date"
                name="to"
                className="outline-none"
                onChange={(e) => {
                  onChangeapplyLeave(e);
                }}
              />
            </Paper>
          </div>
        </Paper>

        <Paper
          elevation={3}
          className="flex flex-row p-1 space-x-1    min-w-[385px]  justify-center"
        >
          <div className=" flex flex-row min-w-[170px]  addEmpForm  space-x-1  items-center hover:bg-red-300 rounded-lg bg-teal-300 justify-center  px-2">
            <SelectorFrom
              labeled="Project"
              OptionData={project}
              sizewidth="14"
              Date="18 oct 2021"
            />
          </div>
          <div className="flex flex-row  space-x-1  addEmpForm items-center hover:bg-red-300 rounded-lg bg-rose-300 justify-center px-2 ">
            <SelectorFrom
              labeled="Task Assigned"
              OptionData={project}
              sizewidth="12"
              Date="45"
            />
          </div>
        </Paper>
      </div>

      <Paper
        elevation={3}
        className="overflow-auto my-1 py-1 w-full flex flex-row min-h-[23vh] items-center justify-center  space-x-4"
      >
        {viewDetail
          ? [viewData].map((item, index) => {
              return (
                <div key={index}>
                  <Paper elevation={5}>
                    <div className="min-h-[24vh] bg-indigo-300 pt-2 min-w-[1200px]">
                      <div className="flex flex-column  min-w-[880px] ">
                        <div className="flex flex-row">
                          <Paper
                            elevation={8}
                            className="min-w-[200px] flex justify-center p-1 m-1"
                          >
                            <div className="flex items-center flex-row py-1 px-2 ">
                              <h3>Date </h3>
                              <div className="min-w-[70px] flex justify-center px-1">
                                : {item.taskdate}
                              </div>
                            </div>
                          </Paper>
                          <Paper
                            elevation={8}
                            className="min-w-[300px] flex justify-center p-1 m-1"
                          >
                            <div className="flex items-center flex-row py-1 px-2 ">
                              <h3>Task given</h3>
                              <div className="flex justify-center px-1">
                                : {item.taskgiven}
                              </div>
                            </div>
                          </Paper>
                          <Paper
                            elevation={8}
                            className="max-w-[400px] flex justify-center p-1 m-1"
                          >
                            <div className="flex items-center flex-row py-1 px-2 ">
                              <h3> Project</h3>
                              <div className=" flex justify-center px-3">
                                : {item.project}
                              </div>
                            </div>
                          </Paper>

                          <Paper
                            elevation={8}
                            className="max-w-[400px] flex justify-start p-1 m-1"
                          >
                            <div className="flex items-center flex-row py-1 px-2  ">
                              <h3> Task</h3>
                              <div className=" flex justify-center px-3">
                                : {item.task}
                              </div>
                            </div>
                          </Paper>
                        </div>
                      </div>
                      <div className="min-h-[8vh]   flex flex-row min-w-[100%]">
                        <Paper
                          elevation={8}
                          className="flex justify-center p-1 m-1"
                        >
                          <div className="flex items-center min-w-[50%] flex-row py-1 px-2 ">
                            <h3> Employee Remarks </h3>
                            <div className=" flex justify-center px-3">
                              : {item.empremarks}
                            </div>
                          </div>
                        </Paper>
                        <Paper
                          elevation={8}
                          className=" flex justify-start p-1 m-1"
                        >
                          <div className="flex items-center min-w-[50%]  flex-row py-1 px-2 ">
                            <h3>Approver Remarks </h3>
                            <div className=" flex justify-center px-3">
                              : {item.Approverremarks}
                            </div>
                          </div>
                        </Paper>
                      </div>

                      <div className=" min-h-[8vh]   flex flex-row min-w-[100%]">
                        <Paper
                          elevation={8}
                          className="flex justify-center p-1 m-1"
                        >
                          <div className="flex items-center min-w-[50%] flex-row py-1 px-2 ">
                            <h3>worked hours </h3>

                            <div className=" flex justify-center px-3">
                              : {item.worked}
                            </div>
                          </div>
                        </Paper>

                        <Paper
                          elevation={8}
                          className=" flex justify-start p-1 m-1"
                        >
                          <div className="flex items-center min-w-[50%]  flex-row py-1 px-2 ">
                            <h3>clocked hours </h3>
                            <div className=" flex justify-center px-3">
                              : {item.clocked}
                            </div>
                          </div>
                        </Paper>
                        <Paper
                          elevation={8}
                          className="flex justify-center p-1 m-1"
                        >
                          <div className="flex items-center min-w-[50%] flex-row py-1 px-2 ">
                            <h3>utilised hours </h3>

                            <div className=" flex justify-center px-3">
                              : {item.utilised}
                            </div>
                          </div>
                        </Paper>

                        <Paper
                          elevation={8}
                          className=" flex justify-start p-1 m-1"
                        >
                          <div className="flex items-center min-w-[50%]  flex-row py-1 px-2 ">
                            <h3> efficiency percent </h3>
                            <div className=" flex justify-center px-3">
                              : {item.efficiency}
                            </div>
                          </div>
                        </Paper>
                      </div>
                    </div>
                  </Paper>
                </div>
              );
            })
          : " "}

        {/*         
  {
    id: "1233",
    taskdate: "06/10/2022",
    taskgiven: "anand",
    project: "office ui",
    task: "dashboard screen",
    empremarks: "creating dash board",
    Approverremarks: "creating dash board",
    worked: "3",
    clocked: "8",
    utilised: "8.30",
    efficiency: "efficiency:100%",
    status: "No",
  }, */}

        {/* upadate today task managed */}
        {added ? (
          <div className="bg-green-300">
            <div>
              {updateTask.map((item, index) => {
                return (
                  <div key={index}>
                    <Paper elevation={5}>
                      <div className="min-h-[18vh] bg-green-300 pt-2 min-w-[1200px] flex flex-column  items-center">
                        <div className="flex flex-column   min-w-[880px] ">
                          <div className="flex flex-row">
                            <Paper
                              elevation={8}
                              className="min-w-[200px] flex justify-center p-1 m-1"
                            >
                              <div className="flex items-center flex-row py-1 px-2 ">
                                <h3>Date </h3>
                                <div className="min-w-[70px] flex justify-center px-1">
                                  : {item.taskdate}
                                </div>
                              </div>
                            </Paper>
                            <Paper
                              elevation={8}
                              className="min-w-[300px] flex justify-center p-1 m-1"
                            >
                              <div className="flex items-center flex-row py-1 px-2 ">
                                <h3>Task given</h3>
                                <div className="flex justify-center px-1">
                                  : {item.taskgiven}
                                </div>
                              </div>
                            </Paper>
                            <Paper
                              elevation={8}
                              className="max-w-[400px] flex justify-center p-1 m-1"
                            >
                              <div className="flex items-center flex-row py-1 px-2 ">
                                <h3> Project</h3>
                                <div className=" flex justify-center px-3">
                                  : {item.project}
                                </div>
                              </div>
                            </Paper>

                            <Paper
                              elevation={8}
                              className="max-w-[400px] flex justify-start p-1 m-1"
                            >
                              <div className="flex items-center flex-row py-1 px-2  ">
                                <h3> Task</h3>
                                <div className=" flex justify-center px-3">
                                  : {item.task}
                                </div>
                              </div>
                            </Paper>
                          </div>
                        </div>

                        {/* form*/}
                        <form
                          method="GET"
                          id="my_form2"
                          onSubmit={ontaskUpdateSubmit}
                        >
                          <div className="flex flex-row">
                            <div className=" min-h-[8vh]   flex flex-row ">
                              <Paper
                                elevation={8}
                                className="flex justify-center p-1 m-1"
                              >
                                <div className=" addEmpForm flex items-centerflex-row py-1 px-2 ">
                                  <label htmlFor=" worked">worked hours </label>
                                  <input
                                    id=" worked"
                                    type="text"
                                    name=" worked"
                                    form="my_form2"
                                    placeholder=" worked hours "
                                    size="12"
                                    onChange={(e) => {
                                      onChangeUpdate(e);
                                    }}
                                    className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                                  />
                                </div>
                              </Paper>

                              <Paper
                                elevation={8}
                                className=" flex justify-start p-1 m-1"
                              >
                                <div className=" addEmpForm flex items-center  flex-row py-1 px-2 ">
                                  <label htmlFor="clocked">
                                    clocked hours{" "}
                                  </label>
                                  <input
                                    id="clocked"
                                    type="text"
                                    name="clocked"
                                    form="my_form2"
                                    placeholder="clocked hours"
                                    onChange={(e) => {
                                      onChangeUpdate(e);
                                    }}
                                    size="12"
                                    className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                                  />
                                </div>
                              </Paper>

                              <Paper
                                elevation={8}
                                className="flex justify-center p-1 m-1"
                              >
                                <div className=" addEmpForm flex items-center  flex-row py-1 px-2 ">
                                  <label htmlFor=" utilised">
                                    utilised hours{" "}
                                  </label>
                                  <input
                                    id=" utilised"
                                    type="text"
                                    name=" utilised"
                                    form="my_form2"
                                    placeholder=" utilised hours"
                                    size="12"
                                    onChange={(e) => {
                                      onChangeUpdate(e);
                                    }}
                                    className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                                  />
                                </div>
                              </Paper>

                              <Paper
                                elevation={8}
                                className="flex justify-center p-1 m-1"
                              >
                                <div className=" addEmpForm flex items-center flex-row py-1 px-1  ">
                                  <label htmlFor="empremarks">
                                    Employee Remarks
                                  </label>
                                  <textarea
                                    id="empremarks"
                                    name="empremarks"
                                    type="text"
                                    rows="2"
                                    cols="30"
                                    form="my_form2"
                                    placeholder="employee remarks about project task"
                                    onChange={(e) => {
                                      onChangeUpdate(e);
                                    }}
                                    className="resize-none border-purple-800 rounded-md border-2 -ml-10"
                                    maxLength="70"
                                  ></textarea>
                                </div>
                              </Paper>

                              <Paper
                                elevation={8}
                                className="flex justify-center p-1 m-1"
                              >
                                <div className="flex addEmpForm items-center flex-row py-1 px-1  ">
                                  <button
                                    type="submit"
                                    form="my_form2"
                                    className="bg-green-300 py-3 px-1 text-white hover:bg-red-300"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </Paper>
                            </div>
                          </div>
                        </form>
                      </div>
                    </Paper>
                  </div>
                );
              })}
            </div>
            <div className="bg-green-300">
              <Paper>
                <div className="bg-green-300">
                  <form
                    method="GET"
                    id="my_form2"
                    onSubmit={ontaskUpdateSubmit}
                  >
                    <div className="flex flex-row">
                      <div className=" min-h-[8vh]   flex flex-row ">
                        <Paper
                          elevation={8}
                          className="flex justify-center p-1 m-1"
                        >
                          <div className=" addEmpForm flex py-1 px-2 items-center ">
                            <h1 className="bg-cyan-200 flex justify-center mr-2 px-1">
                              Add idle work
                            </h1>
                            <SelectorFrom
                              labeled="Project"
                              OptionData={project}
                              sizewidth="5"
                              Date="18 oct 2021"
                            />
                          </div>
                        </Paper>

                        <Paper
                          elevation={8}
                          className="flex justify-center p-1 m-1"
                        >
                          <div className=" addEmpForm flex items-centerflex-row py-1 px-2 ">
                            <label htmlFor=" worked">worked Hours</label>
                            <input
                              id=" worked"
                              type="text"
                              name=" worked"
                              form="my_form2"
                              placeholder=" worked hours "
                              size="4"
                              onChange={(e) => {
                                onChangeUpdate(e);
                              }}
                              className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                            />
                          </div>
                        </Paper>

                        <Paper
                          elevation={8}
                          className=" flex justify-start p-1 m-1"
                        >
                          <div className=" addEmpForm flex items-center  flex-row py-1 px-2 ">
                            <label htmlFor="clocked">clocked Hours</label>
                            <input
                              id="clocked"
                              type="text"
                              name="clocked"
                              form="my_form2"
                              placeholder="clocked hours"
                              onChange={(e) => {
                                onChangeUpdate(e);
                              }}
                              size="4"
                              className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                            />
                          </div>
                        </Paper>

                        <Paper
                          elevation={8}
                          className="flex justify-center p-1 m-1"
                        >
                          <div className=" addEmpForm flex items-center  flex-row py-1 px-2 ">
                            <label htmlFor=" utilised">utilised Hours</label>
                            <input
                              id=" utilised"
                              type="text"
                              name=" utilised"
                              form="my_form2"
                              placeholder=" utilised hours"
                              size="4"
                              onChange={(e) => {
                                onChangeUpdate(e);
                              }}
                              className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                            />
                          </div>
                        </Paper>

                        <Paper
                          elevation={8}
                          className="flex justify-center p-1 m-1"
                        >
                          <div className=" addEmpForm flex items-center flex-row py-1 px-1  ">
                            <label htmlFor="empremarks" className="w-20">
                              Employee Remarks
                            </label>
                            <textarea
                              id="empremarks"
                              name="empremarks"
                              type="text"
                              rows="2"
                              cols="30"
                              form="my_form2"
                              placeholder="employee remarks about project task"
                              onChange={(e) => {
                                onChangeUpdate(e);
                              }}
                              className="resize-none border-purple-800 rounded-md border-2 "
                              maxLength="70"
                            ></textarea>
                          </div>
                        </Paper>

                        <Paper
                          elevation={8}
                          className="flex justify-center p-1 m-1"
                        >
                          <div className="flex addEmpForm items-center flex-row py-1 px-1  ">
                            <button
                              type="submit"
                              form="my_form2"
                              className="bg-indigo-300 py-3 px-1 text-white hover:bg-red-300"
                            >
                              Submit
                            </button>
                          </div>
                        </Paper>
                      </div>
                    </div>
                  </form>
                </div>
              </Paper>
            </div>
          </div>
        ) : null}
      </Paper>
      <Paper>
        <form method="GET" id="my_form" onSubmit={addSubmit}></form>
        <form method="GET" id="my_form1" onSubmit={editSubmit}></form>

        <Paper elevation={2} className="mb-3 mx-0.5 ">
          {edit
            ? null
            : updateTask.map((item, index) => {
                return (
                  <div key={index}>
                    <Paper elevation={5}>
                      <div className="min-h-[24vh] bg-green-300 pt-2 min-w-[1200px] flex flex-column  items-center">
                        <div className="flex flex-column bg-green-300  min-w-[880px] ">
                          <div className="flex flex-row">
                            <Paper
                              elevation={8}
                              className="min-w-[200px] flex justify-center p-1 m-1"
                            >
                              <div className="flex items-center flex-row py-1 px-2 ">
                                <h3>Date </h3>
                                <div className="min-w-[70px] flex justify-center px-1">
                                  : {item.taskdate}
                                </div>
                              </div>
                            </Paper>
                            <Paper
                              elevation={8}
                              className="min-w-[300px] flex justify-center p-1 m-1"
                            >
                              <div className="flex items-center flex-row py-1 px-2 ">
                                <h3>Task given</h3>
                                <div className="flex justify-center px-1">
                                  : {item.taskgiven}
                                </div>
                              </div>
                            </Paper>
                            <Paper
                              elevation={8}
                              className="max-w-[400px] flex justify-center p-1 m-1"
                            >
                              <div className="flex items-center flex-row py-1 px-2 ">
                                <h3> Project</h3>
                                <div className=" flex justify-center px-3">
                                  : {item.project}
                                </div>
                              </div>
                            </Paper>

                            <Paper
                              elevation={8}
                              className="max-w-[400px] flex justify-start p-1 m-1"
                            >
                              <div className="flex items-center flex-row py-1 px-2  ">
                                <h3> Task</h3>
                                <div className=" flex justify-center px-3">
                                  : {item.task}
                                </div>
                              </div>
                            </Paper>
                          </div>
                        </div>

                        {/* form*/}
                        <form
                          method="GET"
                          id="my_form2"
                          onSubmit={ontaskUpdateSubmit}
                        >
                          <div className="flex flex-row">
                            <div className="bg-green-300 min-h-[8vh]   flex flex-row ">
                              <Paper
                                elevation={8}
                                className="flex justify-center p-1 m-1"
                              >
                                <div className=" addEmpForm flex items-centerflex-row py-1 px-2 ">
                                  <label htmlFor=" worked">worked hours </label>
                                  <input
                                    id=" worked"
                                    type="text"
                                    name=" worked"
                                    form="my_form2"
                                    placeholder=" worked hours "
                                    size="12"
                                    onChange={(e) => {
                                      onChangeUpdate(e);
                                    }}
                                    className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                                  />
                                </div>
                              </Paper>

                              <Paper
                                elevation={8}
                                className=" flex justify-start p-1 m-1"
                              >
                                <div className=" addEmpForm flex items-center  flex-row py-1 px-2 ">
                                  <label htmlFor="clocked">
                                    clocked hours{" "}
                                  </label>
                                  <input
                                    id="clocked"
                                    type="text"
                                    name="clocked"
                                    form="my_form2"
                                    placeholder="clocked hours"
                                    onChange={(e) => {
                                      onChangeUpdate(e);
                                    }}
                                    size="12"
                                    className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                                  />
                                </div>
                              </Paper>

                              <Paper
                                elevation={8}
                                className="flex justify-center p-1 m-1"
                              >
                                <div className=" addEmpForm flex items-center  flex-row py-1 px-2 ">
                                  <label htmlFor=" utilised">
                                    utilised hours{" "}
                                  </label>
                                  <input
                                    id=" utilised"
                                    type="text"
                                    name=" utilised"
                                    form="my_form2"
                                    placeholder=" utilised hours"
                                    size="12"
                                    onChange={(e) => {
                                      onChangeUpdate(e);
                                    }}
                                    className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                                  />
                                </div>
                              </Paper>

                              <Paper
                                elevation={8}
                                className="flex justify-center p-1 m-1"
                              >
                                <div className=" addEmpForm flex items-center flex-row py-1 px-1  ">
                                  <label htmlFor="empremarks">
                                    Employee Remarks
                                  </label>
                                  <textarea
                                    id="empremarks"
                                    name="empremarks"
                                    type="text"
                                    rows="2"
                                    cols="30"
                                    form="my_form2"
                                    placeholder="employee remarks about project task"
                                    onChange={(e) => {
                                      onChangeUpdate(e);
                                    }}
                                    className="resize-none border-purple-800 rounded-md border-2 -ml-10"
                                    maxLength="70"
                                  ></textarea>
                                </div>
                              </Paper>

                              <Paper
                                elevation={8}
                                className="flex justify-center p-1 m-1"
                              >
                                <div className="flex addEmpForm items-center flex-row py-1 px-1  ">
                                  <button
                                    type="submit"
                                    form="my_form2"
                                    className="bg-green-300 py-3 px-1 text-white hover:bg-red-300"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </Paper>
                            </div>
                          </div>
                        </form>
                      </div>
                    </Paper>
                  </div>
                );
              })}
          <div className="flex flex-row items-center justify-between mx-2 -mb-2">
            <div className="flex flex-row items-center space-x-4">
              <h1 className="font-sans md:font-serif  text-base  leading-5 uppercase">
                {title}
              </h1>
              <label htmlFor="search"></label>
              <Tooltip title="search">
                <input
                  id="search"
                  type="text"
                  placeholder="search"
                  size="12"
                  className="px-3 py-1  m-2 outline-none border-2 rounded-full border-indigo-400"
                  onChange={(event) => handleSearch(event)}
                />
              </Tooltip>
            </div>

            <div className="mr-3.5 flex flex-row items-center space-x-4 ">
              <div>
                <Tooltip title="create" onClick={onhandleadd}>
                  <IconButton>
                    <AddCircleOutlineIcon className="text-indigo-400 " />
                  </IconButton>
                </Tooltip>
              </div>
              <div>
                <Tooltip title="show">
                  <button
                    className="  flex  p-1 rounded-lg shadow hover:shadow-lg outline-hidden border-none  items-center"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    <p>show</p>
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
        </Paper>

        <div
          className={
            show
              ? "mt-2  overflow-x-auto  p-2"
              : " h-[27vh] mt-2 overflow-x-auto  p-2"
          }
        >
          <table className="EmpLeaveTable min-w-[1800px]">
            <thead className=" py-2">
              <tr>
                <th className="bg-indigo-400 font-serif leading-5 font-medium italic hover:not-italic">
                  <p className="border-2   rounded-lg py-2 grid justify-items-center ">
                    Edit
                  </p>
                </th>
                <th className="bg-indigo-400 font-serif leading-5 font-medium italic hover:not-italic">
                  <p className="border-2 rounded-lg py-2 grid justify-items-center ">
                    cancel
                  </p>
                </th>
                {Object.keys(initialState[0]).map((item, index) => {
                  if (Object.keys(item)[0] === Object.keys(item)[index]) {
                    return <th key={Object.values(item)}></th>;
                  }
                  return (
                    <th
                      className="bg-indigo-400 font-serif leading-5 font-medium italic hover:not-italic"
                      key={index}
                    >
                      <p className="border-2   rounded-lg py-2 grid justify-items-center ">
                        {item}
                      </p>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {nonApprovedData.map((item, index) => {
                return (
                  <tr
                    key={index}
                    onClick={(e) => {
                      onRowshow(e, item);
                    }}
                    onDoubleClick={(e) => {
                      onRowshowclose(e, item);
                    }}
                  >
                    <td>
                      <div className="border-2   rounded-lg  ">
                        <Tooltip
                          title="edit"
                          onClick={() => OnhandleEdit(item)}
                        >
                          <IconButton form="my_form1" type="submit">
                            <CreateIcon sx={{ color: `${CheckDeletecolor}` }} />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                    <td>
                      <div className="border-2   rounded-lg  ">
                        <Tooltip
                          title="Delete"
                          className="border-0"
                          onClick={() => onhandleDelete(item)}
                        >
                          <IconButton>
                            <DeleteOutlineIcon
                              sx={{ color: `${CheckDeletecolor}` }}
                            />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                    {Object.keys(item).map((data, index) => {
                      if (Object.keys(item)[0] === Object.keys(item)[index]) {
                        return <td key={Object.values(item)}></td>;
                      }
                      return (
                        <Tooltip
                          key={index}
                          title={`${Object.keys(item)[index]}`}
                        >
                          <td>
                            <p className="border-2   rounded-lg py-2 grid justify-items-center ">
                              {item[data]}
                            </p>
                          </td>
                        </Tooltip>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Paper>
      <Paper>
        <div
          className={
            show
              ? "mt-2  overflow-auto p-2"
              : " h-[26vh] mt-1 overflow-auto p-2"
          }
        >
          <h1 className="font-sans md:font-serif  text-base  leading-5 uppercase">
            Approved task
          </h1>
          <div>
            <table className="EmpLeaveTable min-w-[1800px]  ">
              <thead className=" py-2">
                <tr>
                  {Object.keys(initialState[0]).map((item, index) => {
                    if (Object.keys(item)[0] === Object.keys(item)[index]) {
                      return <th key={Object.values(item)}></th>;
                    }
                    return (
                      <th
                        className="bg-indigo-300 font-serif leading-5 font-medium italic hover:not-italic"
                        key={index}
                      >
                        <p className="border-2   rounded-lg py-2 grid justify-items-center ">
                          {item}
                        </p>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody className="overflow-auto">
                {ApprovedData.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      onClick={(e) => {
                        onRowshow(e, item);
                      }}
                      onDoubleClick={(e) => {
                        onRowshowclose(e, item);
                      }}
                    >
                      {Object.keys(item).map((data, index) => {
                        if (Object.keys(item)[0] === Object.keys(item)[index]) {
                          return <td key={Object.values(item)}></td>;
                        }
                        return (
                          <Tooltip
                            key={index}
                            title={`${Object.keys(item)[index]}`}
                          >
                            <td>
                              <p className="border-2   rounded-lg py-2 grid justify-items-center ">
                                {item[data]}
                              </p>
                            </td>
                          </Tooltip>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Emptasktable;
