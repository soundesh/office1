import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Paper from "@mui/material/Paper";
import CreateIcon from "@mui/icons-material/Create";
import { useState, useEffect } from "react";
import Tableheader from "../assitComponet/Tableheader";
import "./Emptasktable.css";
import IdleAdd from "./IdleAdd";
import SingleDetail from "../assitComponet/SingleDetail";

const Emptasktable = ({
  initialState,
  headerState,
  title,
  CheckDeletecolor,
}) => {
  const [show, setShow] = useState(false);
  const [shownontable, setShownontable] = useState(false);
  const [IdleAddShow, setIdleAddShow] = useState(false);
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

  const infoDataTask = Object.keys(headerState[0]);

  return (
    <div>
      <Paper
        elevation={3}
        className="overflow-auto my-1 py-1 w-full flex flex-row min-h-[23vh] items-center justify-center  space-x-4"
      >
        {/*view detail information table */}
        <div className=" w-full ">
          <Paper elevation={8}>
            <div className="flex justify-center  lg:min-w-[700px] md:min-w-[1000px]  ml-2">
              <div className="py-2 lg:min-w-[50%]">
                {Object.keys(viewData).map((item, index) => {
                  if (index === 0) {
                    return <div key={index}></div>;
                  }
                  if (index > 6) {
                    return <div key={index}></div>;
                  }
                  return (
                    <div key={index}>
                      <div className=" mb-1 min-h-[70px] ">
                        <p className="text-xs text-blue-500 font-serif min-w-[70px] lg:text-lg  md:text-lg ">
                          {infoDataTask[index]}
                        </p>
                        <p className="text-gray-500 text-xs lg:text-sm md:text-sm flex max-w-[300px] px-3 py-1">
                          {Object.values(viewData)[index]}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {edit ? (
                <div className="py-2 ">
                  {Object.keys(viewData).map((item, index) => {
                    if (index === 0) {
                      return <div key={index}></div>;
                    }
                    if (index < 7) {
                      return <div key={index}></div>;
                    }
                    return (
                      <div key={index}>
                        <div className=" mb-1 min-h-[70px]">
                          <p className="text-xs text-blue-500 font-serif min-w-[70px] lg:text-lg  md:text-lg ">
                            {infoDataTask[index]}
                          </p>
                          <p className="text-gray-500 text-xs lg:text-sm md:text-sm flex max-w-[300px] px-3 py-1">
                            {Object.values(viewData)[index]}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="py-2 ">
                  <form
                    method="GET"
                    id="my_form2"
                    onSubmit={ontaskUpdateSubmit}
                  >
                    {Object.keys(viewData).map((item, index) => {
                      if (index === 0) {
                        return <div key={index}></div>;
                      }
                      if (index === 7) {
                        return (
                          <div key={index} className=" mb-1 min-h-[70px]">
                            <p className="text-xs text-blue-500 font-serif min-w-[70px] lg:text-lg  md:text-lg ">
                              {infoDataTask[index]}
                            </p>
                            <p className="text-gray-500 text-xs lg:text-sm md:text-sm flex max-w-[300px] px-3 py-1">
                              <textarea
                                id="empremarks"
                                name="empremarks"
                                type="text"
                                rows="3"
                                cols="30"
                                defaultValue={Object.values(viewData)[index]}
                                form="my_form2"
                                placeholder={infoDataTask[index]}
                                onChange={(e) => {
                                  onChangeUpdate(e);
                                }}
                                className="resize-none border-amber-800 rounded-md border-2 max-w-[100px] lg:min-w-[300px] md:min-w-[200px]"
                                maxLength="70"
                              ></textarea>
                            </p>
                          </div>
                        );
                      }
                      if (index < 8) {
                        return <div key={index}></div>;
                      }

                      if (index === Object.keys(viewData).length - 1) {
                        return (
                          <div key={index} className=" mb-1 min-h-[70px]">
                            <p className="text-xs text-blue-500 font-serif min-w-[70px] lg:text-lg  md:text-lg ">
                              {infoDataTask[index]}
                            </p>
                            <p className="text-gray-500 text-xs lg:text-sm md:text-sm flex  max-w-[300px] px-3 py-1">
                              {Object.values(viewData)[index]}
                            </p>
                          </div>
                        );
                      }
                      return (
                        <div key={index}>
                          <div className=" mb-1 min-h-[70px]">
                            <p className="text-xs text-blue-500 font-serif min-w-[70px] lg:text-lg  md:text-lg ">
                              {infoDataTask[index]}
                            </p>
                            <p className="text-gray-500 text-xs lg:text-sm md:text-sm flex max-w-[300px] px-3 py-1">
                              <input
                                id={Object.keys(viewData)[index]}
                                type="text"
                                name={Object.keys(viewData)[index]}
                                defaultValue={Object.values(viewData)[index]}
                                form="my_form2"
                                placeholder={infoDataTask[index]}
                                size="12"
                                onChange={(e) => {
                                  onChangeUpdate(e);
                                }}
                                className="resize-none border-amber-800 rounded-md border-2 max-w-[100px] md:min-w-[200px] lg:min-w-[300px] p-2"
                              />
                            </p>
                          </div>
                        </div>
                      );
                    })}

                    <div className="flex space-x-2 justify-center">
                      <button
                        type="submit"
                        form="my_form2"
                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </Paper>
        </div>

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
      </Paper>

      {/* add idle work form */}
      {IdleAddShow ? (
        <IdleAdd
          initialState={[initialState[0]]}
          trigger={IdleAddShow}
          settrigger={setIdleAddShow}
        />
      ) : null}

      {/* table non aproved task  */}
      <Paper>
        <form method="GET" id="my_form" onSubmit={addSubmit}></form>
        <form method="GET" id="my_form1" onSubmit={editSubmit}></form>
        {/* title header add and show here*/}

        <Paper elevation={2} className="mb-3 mx-0.5 ">
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
              <div className="flex items-center shadow hover:shadow-lg outline-hidden border-none rounded-lg">
                <Tooltip
                  title="create"
                  onClick={() => {
                    setIdleAddShow(!IdleAddShow);
                  }}
                >
                  <IconButton>
                    <AddCircleOutlineIcon className="text-indigo-400 " />
                  </IconButton>
                </Tooltip>
                <button
                  onClick={() => {
                    setIdleAddShow(!IdleAddShow);
                  }}
                  className="  flex  p-1 rounded-lg   items-center"
                >
                  Idle
                </button>
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
              ? "mt-2 overflow-auto    p-2"
              : " h-[27vh] mt-2  overflow-auto p-2"
          }
        >
          <table className="EmpLeaveTable min-w-[2400px] ">
            <thead className=" py-2 bg-white">
              <tr>
                <th className=" text-sm font-light headerfont">
                  <p className="border-2   rounded-lg py-2 grid justify-items-center ">
                    Edit
                  </p>
                </th>
                <th className=" text-sm font-light headerfont">
                  <p className="border-2 rounded-lg py-2 grid justify-items-center ">
                    cancel
                  </p>
                </th>
                <Tableheader
                  initialState={headerState[0]}
                  theadColor="bg-indigo-400"
                />
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
                            <p className="border-2   rounded-lg py-2 grid justify-items-center text-gray-800 ">
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
    </div>
  );
};

export default Emptasktable;
