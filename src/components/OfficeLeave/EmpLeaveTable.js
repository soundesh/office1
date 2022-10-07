import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Paper from "@mui/material/Paper";
import CreateIcon from "@mui/icons-material/Create";
import { useState, useEffect } from "react";
import "./EmpLeaveTable.css";

const EmpLeaveTable = ({
  initialState,
  headerState,
  title,
  CheckDeletecolor,
}) => {
  const [show, setShow] = useState(false);
  const [allData, setAllData] = useState(initialState);
  const [filteredData, setFilteredData] = useState(allData);
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
  const [addInput, setAddInput] = useState(() => {
    const data = Object.keys(initialState[0]);
    var newObj = {};
    for (var i = 0; i < data.length; i++) {
      newObj[data[i]] = "";
    }
    return newObj;
  });

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
  };

  const OnhandleEdit = (item) => {
    setEdit(!edit);
    if (item) {
      setApplyLeave({
        ...ApplyLeave,
        date: item.date,
        Days: item.Days,
        to: item.to,
        from: item.from,
        leaveType: item.leaveType,
        reason: item.reason,
        reasonleave: item.reasonleave,
      });
    }
  };
  console.log(ApplyLeave);

  const addSubmit = (e) => {
    e.preventDefault();
    console.log(addInput);
    setAdd(!added);
  };
  const UpdateSubmit = (e) => {
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
  const TodayDate = today();

  const totalDayLeave = () => {
    const value3 = "0";
    const value1 = new Date(ApplyLeave.from);
    const value2 = new Date(ApplyLeave.to);
    if (value1 !== " " && value2 !== " ") {
      var diff = value2.getTime() - value1.getTime();

      var daydiff = diff / (1000 * 60 * 60 * 24);
      if (daydiff + 1 <= 0) {
        ApplyLeave.Days = "0";
        return value3;
      }
      ApplyLeave.Days = daydiff + 1;
      return daydiff + 1;
    }
    ApplyLeave.Days = 0;
    return value3;
  };

  const onChangeapplyLeave = (e) => {
    const { name, value } = e.target;
    setApplyLeave({
      ...ApplyLeave,
      [name]: value,
      date: today(),
    });
  };

  const onsubmitApplyLeave = (e) => {
    e.preventDefault();
    console.log(ApplyLeave.Days);
    if (isNaN(ApplyLeave.Days) || ApplyLeave.Days === "0") {
      window.alert("please click valid calender date");
    } else {
      console.log("validate");
    }
  };
  return (
    <Paper>
      {viewDetail ? (
        <Paper elevation={5}>
          <div className="max-h-[24vh]  bg-cyan-200 px-16 py-2">
            <div className="flex flex-row  ">
              <div className="flex flex-row">
                {Object.keys(viewData).map((item, index) => {
                  if (index === 0) {
                    return <div key={index}></div>;
                  }
                  if (index <= 5) {
                    return (
                      <div key={index} className="flex flex-row   ">
                        <Paper
                          elevation={8}
                          className="min-w-[200px] flex justify-center p-1 m-1"
                        >
                          <div className="flex items-center flex-row py-1 px-2 ">
                            <h3> {item}</h3>
                            <div className="min-w-[70px] flex justify-center px-1">
                              : {viewData[item]}
                            </div>
                          </div>
                        </Paper>
                      </div>
                    );
                  }
                  return <div key={index}></div>;
                })}
              </div>
            </div>
            <div className="flex flex-row ">
              {Object.keys(viewData).map((item, index) => {
                if (index === 0) {
                  return <div key={index}></div>;
                }
                if (index === 10) {
                  return <div key={index}></div>;
                }
                if (index > 5 && index <= 9) {
                  return (
                    <div key={index} className="flex flex-row">
                      <Paper
                        elevation={8}
                        className="min-w-[200px] flex justify-center p-1 m-1"
                      >
                        <div className="flex items-center flex-row py-1 px-2 ">
                          <h3> {item}</h3>
                          <div className="min-w-[70px] flex justify-center px-1">
                            : {viewData[item]}
                          </div>
                        </div>
                      </Paper>
                    </div>
                  );
                }
                return <div key={index}></div>;
              })}
            </div>

            <div className="flex flex-row ">
              {Object.keys(viewData).map((item, index) => {
                if (index === 0) {
                  return <div key={index}></div>;
                }
                if (index === 10) {
                  return <div key={index}></div>;
                }
                if (index >= 11) {
                  return (
                    <div key={index} className="flex flex-row">
                      <Paper
                        elevation={8}
                        className="min-w-[200px] flex justify-center p-1 m-1"
                      >
                        <div className="flex items-center flex-row py-1 px-2 ">
                          <h3> {item}</h3>
                          <div className="min-w-[70px] flex justify-center px-1">
                            : {viewData[item]}
                          </div>
                        </div>
                      </Paper>
                    </div>
                  );
                }
                return <div key={index}></div>;
              })}
            </div>
            <div className="flex flex-row border-t-none m-1 max-h-[4vh] items-center justify-start ">
              {Object.keys(viewData).map((item, index) => {
                if (index === 10) {
                  return (
                    <div key={index}>
                      <Paper
                        elevation={8}
                        className="min-w-[200px] flex justify-center p-1 m-1"
                      >
                        <div className="flex items-center flex-row py-1 px-2 ">
                          <h3> {item}</h3>
                          <div className="min-w-[70px] flex justify-center px-1">
                            : {viewData[item]}
                          </div>
                        </div>
                      </Paper>
                    </div>
                  );
                }
                return <div key={index}></div>;
              })}
            </div>
          </div>
        </Paper>
      ) : (
        " "
      )}
      {added ? (
        <div className="flex flex-row space-x-10 border p-3 max-h-[24.5vh]  items-center justify-center border-blue-200">
          <div>
            <form
              onSubmit={onsubmitApplyLeave}
              className="flex flex row items-center space-x-10  "
            >
              <div className="space-y-1 ">
                <div className="space-x-1 flex hover:bg-red-300 rounded-full bg-blue-200 justify-center p-3">
                  <label htmlFor="to">Apply Date :</label>
                  <input
                    type="text"
                    name="Date"
                    value={TodayDate}
                    readOnly
                    size={10}
                    className="outline-none"
                    onChange={(e) => {
                      onChangeapplyLeave(e);
                    }}
                  />
                </div>
                <div className="space-x-1  hover:bg-red-300 rounded-full justify-center bg-blue-200 pt-1 p-3">
                  <label htmlFor="leaveType">Leave type:</label>
                  <select
                    name="leaveType"
                    id="leaveType"
                    className="w-20 justify-center pl-2"
                    onChange={(e) => {
                      onChangeapplyLeave(e);
                    }}
                  >
                    <option value="select">select</option>
                    <option value="CL">CL</option>
                    <option value="EL">EL</option>
                    <option value="CompOff">Comp OFF</option>
                    <option value="RH">RH</option>
                  </select>
                </div>

                <div className="space-x-1 flex hover:bg-red-300 rounded-full justify-center bg-blue-200 pt-1 p-3">
                  <label htmlFor="to">Reason :</label>
                  <input
                    type="text"
                    name="reason"
                    size="10"
                    onChange={(e) => {
                      onChangeapplyLeave(e);
                    }}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="space-x-1  hover:bg-red-300 rounded-full bg-blue-200 justify-center  pt-1 p-3">
                  <label htmlFor="to">From Date :</label>
                  <input
                    type="date"
                    name="from"
                    className="outline-none"
                    onChange={(e) => {
                      onChangeapplyLeave(e);
                    }}
                  />
                </div>
                <div className="space-x-1  hover:bg-red-300 rounded-full bg-blue-200 justify-center pt-1 p-3">
                  <label htmlFor="to">Last Date :</label>
                  <input
                    type="date"
                    name="to"
                    className="outline-none"
                    onChange={(e) => {
                      onChangeapplyLeave(e);
                    }}
                  />
                </div>

                <div className="space-x-1 flex hover:bg-red-300 rounded-full bg-blue-200 justify-center  pt-1 p-3">
                  <h1>Total Day : {totalDayLeave() || 0} </h1>
                </div>
              </div>

              <div className="space-y-1 flex flex-column">
                <div className="space-x-1 flex flex-column items-center justify-content  hover:bg-red-300 rounded-lg bg-blue-200 px-2 pb-2">
                  <label htmlFor="reasonleave">reason for leave</label>
                  <textarea
                    id="reasonleave"
                    name="reasonleave"
                    rows="4"
                    cols="25"
                    placeholder="reason in detailed"
                    className="resize-none rounded-md "
                    maxLength="70"
                    onChange={(e) => {
                      onChangeapplyLeave(e);
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="hover:bg-red-300 rounded-full bg-blue-200  flex justify-center py-2 px-1 items-center"
                >
                  Add Leave
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {edit ? (
        " "
      ) : (
        <div className="flex flex-row  space-x-10 border p-3 max-h-[24.5vh]  items-center justify-center border-blue-200">
          <div>
            <form
              onSubmit={onsubmitApplyLeave}
              className="flex flex row items-center space-x-10  "
            >
              <div className="space-y-1 ">
                <div className="space-x-1 flex hover:bg-red-300 rounded-full bg-blue-200 justify-center p-3">
                  <label htmlFor="to">Apply Date :</label>
                  <input
                    type="text"
                    name="Date"
                    value={TodayDate}
                    readOnly
                    size={10}
                    className="outline-none"
                    onChange={(e) => {
                      onChangeapplyLeave(e);
                    }}
                  />
                </div>
                <div className="space-x-1  hover:bg-red-300 rounded-full justify-center bg-blue-200 pt-1 p-3">
                  <label htmlFor="leaveType">Leave type:</label>
                  <select
                    name="leaveType"
                    id="leaveType"
                    value={ApplyLeave.leaveType}
                    className="w-20 justify-center pl-2"
                    onChange={(e) => {
                      onChangeapplyLeave(e);
                    }}
                  >
                    <option value="select">select</option>
                    <option value="CL">CL</option>
                    <option value="EL">EL</option>
                    <option value="CompOff">Comp OFF</option>
                    <option value="RH">RH</option>
                  </select>
                </div>

                <div className="space-x-1 flex hover:bg-red-300 rounded-full justify-center bg-blue-200 pt-1 p-3">
                  <label htmlFor="to">Reason :</label>
                  <input
                    type="text"
                    name="reason"
                    size="10"
                    value={ApplyLeave.reason}
                    onChange={(e) => {
                      onChangeapplyLeave(e);
                    }}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="space-x-1  hover:bg-red-300 rounded-full bg-blue-200 justify-center  pt-1 p-3">
                  <label htmlFor="to">From Date :</label>
                  <input
                    type="date"
                    name="from"
                    value={ApplyLeave.from}
                    className="outline-none"
                    onChange={(e) => {
                      onChangeapplyLeave(e);
                    }}
                  />
                </div>
                <div className="space-x-1  hover:bg-red-300 rounded-full bg-blue-200 justify-center pt-1 p-3">
                  <label htmlFor="to">Last Date :</label>
                  <input
                    type="date"
                    name="to"
                    value={ApplyLeave.to}
                    className="outline-none"
                    onChange={(e) => {
                      onChangeapplyLeave(e);
                    }}
                  />
                </div>

                <div className="space-x-1 flex hover:bg-red-300 rounded-full bg-blue-200 justify-center  pt-1 p-3">
                  <h1>Total Day : {totalDayLeave() || 0} </h1>
                </div>
              </div>

              <div className="space-y-1 flex flex-column">
                <div className="space-x-1 flex flex-column items-center justify-content  hover:bg-red-300 rounded-lg bg-blue-200 px-2 pb-2">
                  <label htmlFor="reasonleave">reason for leave</label>
                  <textarea
                    id="reasonleave"
                    name="reasonleave"
                    rows="4"
                    cols="30"
                    value={ApplyLeave.reasonleave}
                    placeholder="reason in detailed"
                    className="resize-none rounded-md "
                    onChange={(e) => {
                      onChangeapplyLeave(e);
                    }}
                    maxLength="70"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="hover:bg-red-300 rounded-full bg-blue-200  flex justify-center py-2 px-1 items-center"
                >
                  Add Leave
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <form method="GET" id="my_form" onSubmit={addSubmit}></form>
      <form method="GET" id="my_form1" onSubmit={UpdateSubmit}></form>
      <Paper elevation={2} className="mb-3 mx-0.5 ">
        <div className="flex flex-row items-center justify-between mx-2 -mb-2">
          <div className="flex flex-row items-center space-x-4">
            <h1 className="font-sans md:font-serif  text-base  leading-5 uppercase">
              {title}
            </h1>

            <label htmlFor="search">
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
            </label>
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
          show ? "mt-2  overflow-auto p-2" : " h-[35vh] mt-2 overflow-auto p-2"
        }
      >
        <table className="EmpLeaveTable min-w-[2000px]">
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
            {filteredData.map((item, index) => {
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
                  <td className="flex flex-row">
                    <div className="border-2 rounded-lg   ">
                      <Tooltip title="edit" onClick={() => OnhandleEdit(item)}>
                        <IconButton form="my_form1" type="submit">
                          <CreateIcon sx={{ color: `${CheckDeletecolor}` }} />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </td>
                  <td>
                    <div className="border-2  max-w-[50px]  ">
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
  );
};

export default EmpLeaveTable;
