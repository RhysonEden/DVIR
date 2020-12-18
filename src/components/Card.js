import React from "react";

const Card = ({ branches, setMessage }) => {
  if (branches.length <= 0) {
    return <div className="apptwo">No Records Found</div>;
  } else {
    return (
      <div className="app">
        {branches.map((report, index) => (
          <div id={index} key={index} className="branchcard">
            <h3>Branch:{report.branch}</h3>
            <h3>Tech Name: {report.technician}</h3>
            <h3>Submission Date: {report.submission}</h3>
            <h3>Vehicle Type: {report.type}</h3>
            <h3>Vehicle Number: {report.number}</h3>
            <h3>
              Defects: <span className="red">{report.defects} </span>
            </h3>
            <h3>Trailer Type: {report.trailer}</h3>
            <h3>Brakes: {report.brakes}</h3>
            <h3>{report.coupling}</h3>
            <h3>
              Remarks: <span className="red">{report.remarks}</span>
            </h3>
            <h3>{report.options}</h3>
          </div>
        ))}
      </div>
    );
  }
};

export default Card;
