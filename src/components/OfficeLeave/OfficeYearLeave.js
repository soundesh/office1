import React, { useState } from "react";
const officeYearLeave = [
  {
    festival: [
      { id: "126", date: "23/05/22", holiday: "deepavali" },
      {
        id: "121",
        date: "2/03/22",
        holiday: "sri krishnar jemaasvvvvtami ",
      },
      { id: "123", date: "2/03/22", holiday: "christmus" },
      { id: "124", date: "2/03/22", holiday: "christmus" },
      { id: "125", date: "2/03/22", holiday: "christmus" },
      { id: "123", date: "2/03/22", holiday: "christmus" },
      { id: "123", date: "2/03/22", holiday: "christmus" },
    ],
  },
  {
    Rh: [
      { id: "124", date: "2/01/22", holiday: "sri krishnar jemaastamivvvvv" },
      { id: "128", date: "23/05/22", holiday: "pongal" },
      { id: "129", date: "2/03/22", holiday: "mattu pongal" },
    ],
  },

  {
    genral: [{ id: "127", date: "2/01/22", holiday: "kannada rajyotsava" }],
  },
  {
    national: [
      { id: "122", date: "23/01/22", holiday: "srikrishnar jemaavvvvstami" },
      { id: "121", date: "12/05/22", holiday: "independance" },
    ],
  },
];

const OfficeYearLeave = () => {
  const [initialState] = useState(officeYearLeave);

  return (
    <div className="flex items-center">
      <div className="boxDataShdow rounded-lg bg-green-300 min-h-52 addEmpForm   h-56 max-w-[240px]">
        {initialState.map((item, index) => {
          if (Object.keys(item)[0][0] === Object.keys(item)[0][index]) {
            return (
              <div key={Object.keys(item)[0][index]}>
                <h1 className="uppercase flex justify-center">
                  {Object.keys(item)} holidays
                </h1>
                {Object.values(item)[0].map((element, index) => {
                  return (
                    <div key={index} className="flex flex-row space-x-4 pl-3 ">
                      <div>{element.date}</div>
                      <div>{element.holiday}</div>
                    </div>
                  );
                })}
              </div>
            );
          }
          return <></>;
        })}
      </div>
      <div className="boxDataShdow rounded-lg bg-blue-300 min-h-52 addEmpForm   h-56 max-w-[240px] ml-1">
        {initialState.map((item, index) => {
          if (Object.keys(item)[0][1] === Object.keys(item)[0][index]) {
            return (
              <div key={Object.keys(item)[0][index]}>
                <h1 className="uppercase flex justify-center">
                  {Object.keys(item)} holidays
                </h1>
                {Object.values(item)[0].map((element, index) => {
                  return (
                    <div key={index} className="flex flex-row space-x-4 pl-3 ">
                      <div>{element.date}</div>
                      <div>{element.holiday}</div>
                    </div>
                  );
                })}
              </div>
            );
          }
          return <></>;
        })}
      </div>

      <div className="boxDataShdow rounded-lg bg-red-300 min-h-52 addEmpForm  h-56 max-w-[240px] ml-1 space-y-2">
        {initialState.map((item, index) => {
          if (Object.keys(item)[0][2] === Object.keys(item)[0][index]) {
            return (
              <div key={Object.keys(item)[0][index]}>
                <h1 className="uppercase flex justify-center">
                  {Object.keys(item)} holidays
                </h1>
                {Object.values(item)[0].map((element, index) => {
                  return (
                    <div key={index} className="flex flex-row space-x-4 pl-2 ">
                      <div>{element.date}</div>
                      <div>{element.holiday}</div>
                    </div>
                  );
                })}
              </div>
            );
          }

          if (Object.keys(item)[0][3] === Object.keys(item)[0][index]) {
            return (
              <div key={Object.keys(item)[0][index]}>
                <h1 className="uppercase flex justify-center">
                  {Object.keys(item)} holidays
                </h1>
                {Object.values(item)[0].map((element, index) => {
                  return (
                    <div key={index} className="flex flex-row space-x-4 pl-2 ">
                      <div>{element.date}</div>
                      <div>{element.holiday}</div>
                    </div>
                  );
                })}
              </div>
            );
          }
          return <></>;
        })}
      </div>
    </div>
  );
};

export default OfficeYearLeave;
