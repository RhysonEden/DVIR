import React, { useState } from "react";
import { getBranch } from "../api";

const Maindrop = ({ branches, setMessage, loc, setLoc }) => {
  const [items] = useState([
    { label: "Select Branch", value: "" },
    { label: "Atlanta", value: "ATLANTA" },
    { label: "Birmingham", value: "BIRMINGHAM" },
    { label: "Charlotte", value: "CHARLOTTE NC" },
    { label: "Columbia", value: "COLUMBIA" },
    { label: "Greensboro", value: "GREENSBORO" },
    { label: "SE Construction", value: "CONSTRUCTION SE" },
    { label: "Fort Lauderdale", value: "Ft. Lauderdale" },
    { label: "Fort Myers", value: "FORT MYERS" },
    { label: "Jacksonville", value: "JACKSONVILLE" },
    { label: "Knoxville", value: "KNOXVILLE" },
    { label: "Nashville", value: "NASHVILLE" },
    { label: "Pensacola", value: "PENSACOLA" },
    { label: "Raleigh", value: "RALEIGH" },
    { label: "Sanford", value: "SANFORD" },
    { label: "Savannah", value: "SAVANNAH" },
    { label: "Tallahassee", value: "TALLAHASSEE" },
    { label: "Tampa", value: "TAMPA SERVICE" },
  ]);

  const handleChange = (e) => {
    e.preventDefault();
    let branch = e.target.value;
    console.log(branch);
    setLoc(branch);
    getBranch(branch).then((res) => {
      setMessage(res.branches);
      // setMessage("Test");
    });
  };

  return (
    <div className="items">
      <select className="list" onChange={handleChange}>
        {items.map((item) => (
          <option className="labels" key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Maindrop;
