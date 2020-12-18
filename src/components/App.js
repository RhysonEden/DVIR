import React, { useState, useEffect } from "react";
import Card from "./Card";
import Header from "./Header";
import { getSomething } from "../api";
import moment from "moment";
import DatePicker from "react-datepicker";

const App = () => {
  const [branches, setMessage] = useState([]);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [loc, setLoc] = useState("");

  useEffect(() => {
    getSomething().then((res) => {
      setMessage(res.branches);
      setStart(moment().format("YYYY-MM-DD"));
      setEnd(moment().format("YYYY-MM-DD"));
    });
  }, []);

  return (
    <div className="main">
      <Header
        branches={branches}
        setMessage={setMessage}
        start={start}
        setStart={setStart}
        end={end}
        setEnd={setEnd}
        loc={loc}
        setLoc={setLoc}
      />
      <Card branches={branches} setMessage={setMessage} />
    </div>
  );
};

export default App;
