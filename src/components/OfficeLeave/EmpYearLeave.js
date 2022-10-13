import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
const empyearleave = [
  { id: "123", leavetype: "cl", Numdays: "8" },

  { id: "124", leavetype: "comp off", Numdays: "3" },

  { id: "125", leavetype: "HL", Numdays: "2" },
  { id: "123", leavetype: "EL", Numdays: "2" },
];

const EmpYearLeave = () => {
  const [initialState] = useState(empyearleave);

  return (
    <div className="boxDataShdow rounded-lg min-h-56 h-56 max-w-[330px]  min-w-[200px] bg-white">
      <h1 className="hover:bg-red-300 rounded-full bg-blue-200 py-1.5 flex justify-center items-center ">
        Available Leaves
      </h1>
      <div className="my-1 flex justify-center mt-1">
        <table>
          <thead>
            <tr className="bg-white">
              <th>
                <p className="border-2 border-teal-400 hover:bg-teal-500   rounded-full  py-0.5 px-1 grid justify-items-center ">
                  Leaves
                </p>
              </th>
              <th>
                <p className="border-2 border-teal-400 hover:bg-teal-500   rounded-full  py-0.5 px-2 grid justify-items-center ">
                  Days
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {initialState.map((item, index) => {
              return (
                <tr key={index} className="bg-sky-50">
                  {Object.keys(item).map((data, index) => {
                    if (Object.keys(item)[0] === Object.keys(item)[index]) {
                      return <React.Fragment key={index}></React.Fragment>;
                    }
                    return (
                      <Tooltip
                        key={index}
                        title={`${Object.keys(item)[index]}`}
                      >
                        <td>
                          <p className="border-2 border-teal-400 hover:bg-teal-500   rounded-full  py-0.5 px-1 grid justify-items-center ">
                            {item[data]}
                          </p>
                        </td>
                      </Tooltip>
                    );
                  })}
                  <td className="flex flex-row"></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <div className=" hover:bg-red-300 rounded-full bg-blue-300 flex justify-center items-center">
        <div className="mt-1 -mb-1">
          <label htmlFor={labeled}>{labeled}:</label>
          <select name={labeled} id={labeled} className={`w-16`}>
            <optgroup label="Swedish Cars">
              <option value="volvo">2022</option>
              <option value="saab">2023</option>
            </optgroup>
            <optgroup label="German Cars">
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </optgroup>
          </select>
        </div>
      </div> */}
    </div>
  );
};

export default EmpYearLeave;
