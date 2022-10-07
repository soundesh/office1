import React from "react";
import Formatdate from "../components/Formatdate";

import Paper from "@mui/material/Paper";

const Header = ({ pagehead, pageicon }) => {
  return (
    <React.Fragment>
      <Paper elevation={5}>
        <div className="text-red-900 mb-1">
          <div className="pl-10 align-center ">
            <h6>welcome avinash</h6>
          </div>
          <div className="flex flex-row items-center   flex-wrap justify-between p-2 ">
            <div className="flex flex-row flex-wrap items-center flex-wrap justify-between p-2 space-x-1">
              <span className=" h-5">{pageicon}</span>
              <h6> {pagehead} |</h6>
            </div>
            <div className="border-2 px-2 border-indigo-300 rounded-full">
              <p>
                <Formatdate />
              </p>
            </div>
          </div>
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default Header;
