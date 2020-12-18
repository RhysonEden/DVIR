import React, { useState } from "react";
import Maindrop from "./Maindrop";
import moment from "moment";
import { getBranchDates } from "../api";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Header = ({
  loc,
  setLoc,
  branches,
  setMessage,
  start,
  setStart,
  end,
  setEnd,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(start);
    console.log(end);
    console.log(loc);
    getBranchDates(loc, start, end).then((res) => {
      setMessage(res.branches);
      console.log(res);
    });
  };

  const changeStart = (e) => {
    console.log(e);
    console.log(e, moment(e).format("YYYY-MM-DD"));
    setStart(moment(e).format("YYYY-MM-DD"));
  };

  const changeEnd = (e) => {
    setEnd(moment(e).format("YYYY-MM-DD"));
  };

  return (
    <div className="masterheader">
      <h2 className="headerop">Daily Vehicle Inspection Reports</h2>
      <h3 className="headeropt">Select Filtering Options Below</h3>

      <div className="headerone">
        <h3>
          <h5>Branch</h5>
          <Maindrop
            branches={branches}
            setMessage={setMessage}
            loc={loc}
            setLoc={setLoc}
          />
        </h3>
      </div>
      <div className="header">
        <h3 className="headerspacing">
          <h5>Start Date:</h5>
          <DatePicker
            className="headerinput"
            // selected={start}
            value={start}
            placeholder={start}
            onChange={changeStart}
          />
          {/* <input
            className="headerinput"
            id="date"
            placeholder="YYYY-MM-DD"
            onChange={changeStart}
          ></input> */}
        </h3>
        <h3 className="headerspacing">
          <h5>End Date:</h5>
          {/* <input
            className="headerinput"
            id="date"
            placeholder="YYYY-MM-DD"
            onChange={changeEnd}
          ></input> */}
          <DatePicker
            className="headerinput"
            value={end}
            // selected={start}
            placeholder={end}
            onChange={changeEnd}
          />
        </h3>
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Header;
