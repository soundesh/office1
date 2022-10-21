import React from "react";
import Paper from "@mui/material/Paper";

const SingleDetail = ({ title, singleData }) => {
  return (
    <div className="flex items-center flex-row py-1 px-2 ">
      <h3 className="text-blue-500 font-serif font-medium ">{title}</h3>

      <div className="text-gray-500   flex min-w-[150px] px-1 ">
        : {singleData}
      </div>
    </div>
  );
};

export default SingleDetail;
