import React from "react";
import Formatdate from "../components/Formatdate";

const Header = () => {
  return (
    <React.Fragment>
      <div>
        <div className="pl-5">
          <h6>welcome avinash</h6>
        </div>
        <div className="flex flex-row items-center   flex-wrap justify-between p-2 mr-5">
          <div className="flex flex-row flex-wrap items-center flex-wrap justify-between p-2">
            <span className=" h-5">
              <i class="material-icons">dashboard </i>
            </span>
            <h6>dashboard |</h6>
          </div>
          <div>
            <p>
              <Formatdate />
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
