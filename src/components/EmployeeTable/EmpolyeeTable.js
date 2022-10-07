import React, { useState } from "react";
import "./EmpolyeeTable.css";
import Tooltip from "@mui/material/Tooltip";
const EmpolyeeTable = ({ initialData, title }) => {
  const [initialState] = useState(initialData);
  return (
    <div className="w-[99.5%] ml-[0.25%]">
      <h1 className="flex justify-center bg-green-400 h-8 items-center">
        {title}
      </h1>
      <div className="mb-1 h-56 overflow-auto ">
        <table className="Emptable">
          <thead className=" py-2">
            <tr>
              {Object.keys(initialState[0]).map((item, index) => {
                if (Object.keys(item)[0] === Object.keys(item)[index]) {
                  return <React.Fragment key={index}></React.Fragment>;
                }
                return (
                  <th
                    className="bg-indigo-400 font-serif leading-5 font-medium italic hover:not-italic"
                    key={index}
                  >
                    <p className="border-2   rounded-lg py-1 grid justify-items-center ">
                      {item}
                    </p>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {initialState.map((item, index) => {
              return (
                <tr key={index}>
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
                          <p className="border-2   rounded-lg py-2 grid justify-items-center ">
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
    </div>
  );
};

export default EmpolyeeTable;
