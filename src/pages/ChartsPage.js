import React from "react";
import ChartDisplay from "../components/ChartDisplay"; // Corrected path

const ChartsPage = ({ data }) => {
  return (
    <div className="container">
      <ChartDisplay data={data} />
    </div>
  );
};

export default ChartsPage;
