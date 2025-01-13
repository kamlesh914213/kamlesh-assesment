import { useState, useEffect } from "react";
import Data from "./data.csv";
import Papa from "papaparse";
import ChartDisplay from "./ChartDisplay";

function DataText() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(Data);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csvData = decoder.decode(result.value);
      const parsedData = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
      }).data;
      setData(parsedData);
    };
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 ev-text">EV Data Overview</h1>

      {/* Table */}
      <div className="table-responsive">
        {data.length ? (
          <table className="table table-bordered table-hover table-striped">
            <thead className="table-dark">
              <tr>
                <th>VIN (1-10)</th>
                <th>County</th>
                <th>City</th>
                <th>State</th>
                <th>Postal Code</th>
                <th>Model Year</th>
                <th>Make</th>
                <th>Model</th>
                <th>Electric Vehicle Type</th>
                <th>Clean Alternative Fuel Vehicle (CAFV) Eligibility</th>
                <th>Electric Range</th>
                <th>Base MSRP</th>
                <th>Legislative District</th>
                <th>DOL Vehicle ID</th>
                <th>Vehicle Location</th>
                <th>Electric Utility</th>
                <th>2020 Census Tract</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row["VIN (1-10)"]}</td>
                  <td>{row.County}</td>
                  <td>{row.City}</td>
                  <td>{row.State}</td>  
                  <td>{row["Postal Code"]}</td>
                  <td>{row["Model Year"]}</td>
                  <td>{row.Make}</td>
                  <td>{row.Model}</td>
                  <td>{row["Electric Vehicle Type"]}</td>
                  <td>{row["Clean Alternative Fuel Vehicle (CAFV) Eligibility"]}</td>
                  <td>{row["Electric Range"]}</td>
                  <td>{row["Base MSRP"]}</td>
                  <td>{row["Legislative District"]}</td>
                  <td>{row["DOL Vehicle ID"]}</td>
                  <td>{row["Vehicle Location"]}</td>
                  <td>{row["Electric Utility"]}</td>
                  <td>{row["2020 Census Tract"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading data, please wait...</p>
        )}
      </div>

      {/* Chart Section */}
      <ChartDisplay data={data.length ? data : []} />
      </div>
  );
}

export default DataText;
