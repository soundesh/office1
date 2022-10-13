import React, { useState, useEffect } from "react";
const initialState1 = [
  {
    id: "126",
    leavedate: "23/09/22",
    leavetype: "festival",
    holiday: "deepavali",
  },
  {
    id: "121",
    leavedate: "2/03/22",
    leavetype: "festival",

    holiday: "sri krishnar jemaasvvvvtami ",
  },
  {
    id: "123",
    leavedate: "2/09/22",
    leavetype: "festival",
    holiday: "christmus",
  },
  {
    id: "124",
    leavedate: "2/03/22",
    leavetype: "festival",
    holiday: "christmus",
  },
  {
    id: "125",
    leavedate: "2/03/22",
    leavetype: "festival",
    holiday: "christmus",
  },
  {
    id: "123",
    leavedate: "30/03/22",
    leavetype: "festival",
    holiday: "christmus",
  },
  {
    id: "123",
    leavedate: "2/04/22",
    leavetype: "festival",
    holiday: "christmus",
  },

  {
    id: "124",
    leavedate: "2/01/22",
    leavetype: "RH",
    holiday: "sri krishnar jemaastamivvvvv",
  },
  { id: "128", leavedate: "23/05/22", leavetype: "RH", holiday: "pongal" },
  { id: "129", leavedate: "2/03/22", leavetype: "RH", holiday: "mattu pongal" },

  {
    id: "127",
    leavedate: "2/01/22",
    leavetype: "general",
    holiday: "kannada rajyotsava",
  },

  {
    id: "122",
    leavedate: "23/01/22",
    leavetype: "national",
    holiday: "srikrishnar jemaavvvvstami",
  },
  {
    id: "121",
    leavedate: "12/05/22",
    leavetype: "national",
    holiday: "independance",
  },
];
const ThismonthLeave = () => {
  const [allData, setAllData] = useState(initialState1);
  const [filteredData, setFilteredData] = useState(allData);

  useEffect(() => {
    const sortemonth = allData.filter((item) => {
      var dateA = item.leavedate.split("/")[1];
      var dateB = new Date().getMonth().toString().padStart(2, "0");
      return dateA === dateB;
    });
    sortemonth.sort(function compare(a, b) {
      var dateA = a.leavedate.split("/")[0];
      var dateB = b.leavedate.split("/")[0];
      return dateA - dateB;
    });
    setFilteredData(sortemonth);
  }, [setFilteredData]);
  return (
    <div className="items-center min-h-52 bg-white  flex flex-column  items-center justify-center">
      <h2 className="mt-1 text-xl   border-y-4 hover:border-b-4  py-1 rounded-lg   focus:border-blue-500  px-2 bg-green-300 hover:border-red-300 ">
        {new Date().toLocaleString("default", { month: "long" })} Month Leave
      </h2>
      <div>
        <div className="bg-white  p-2 ">
          {filteredData.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex flex-row space-x-4">
                  <div className="min-w-[70px]">{item.leavedate}</div>
                  <div> {item.leavetype}</div>
                  <div>{item.holiday}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThismonthLeave;
