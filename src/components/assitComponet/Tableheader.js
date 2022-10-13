import React from "react";

const Tableheader = ({ initialState, theadColor }) => {
  return (
    <React.Fragment>
      {Object.keys(initialState).map((item, index) => {
        if (Object.keys(item)[0] === Object.keys(item)[index]) {
          return <th key={Object.values(item)}></th>;
        }
        return (
          <th
            className="bg-indigo-400 font-serif leading-5 min-w-[150px] font-medium italic hover:not-italic"
            key={index}
          >
            <p className="border-2  rounded-lg py-2 grid justify-items-center ">
              {item}
            </p>
          </th>
        );
      })}
    </React.Fragment>
  );
};

export default Tableheader;
