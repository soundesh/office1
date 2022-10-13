import React from "react";
import Header from "../../pages/Header";
import OfficeYearLeave from "../../components/OfficeLeave/OfficeYearLeave";
import { Paper } from "@material-ui/core";
import Hrholidaytable from "../../components/Hrtable/hrholidaytable/Hrholidaytable";
import ThismonthLeave from "../../components/Hrcomponents/HrHolidays/ThismonthLeave";
import CreateLeaveholidays from "../../components/Hrtable/hrholidaytable/CreateLeaveholidays";
const Hrholidays = () => {
  return (
    <div className="overflow-auto bg-slate-100">
      <div>
        <Header
          pagehead="holidays"
          pageicon={<i className="material-icons">dashboard</i>}
        />
      </div>
      <div className="flex flex row">
        <div className="ml-3.5">
          <Hrholidaytable />
        </div>
        <div className="ml-1 ">
          <div className="mb-1 ">
            <ThismonthLeave />
          </div>
          <div>
            <OfficeYearLeave />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hrholidays;
