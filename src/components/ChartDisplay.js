import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const ChartDisplay = ({ data }) => {
  // Function to count the occurrences of each vehicle make
  const countMakes = (data) => {
    const makeCount = {};
    data.forEach((row) => {
      const make = row.Make;
      makeCount[make] = makeCount[make] ? makeCount[make] + 1 : 1;
    });
    return makeCount;
  };

  // Check if data is valid before proceeding
  if (!data || data.length === 0) {
    return <p className="text-center p-5"> <b>No data available to display chart.</b></p>;
  }

  // Get the counts for each make
  const makeCount = countMakes(data);
  const makeLabels = Object.keys(makeCount);
  const makeData = Object.values(makeCount);

  // Chart data configuration
  const chartData = {
    labels: makeLabels,
    datasets: [
      {
        label: "Vehicle Makes",
        data: makeData,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Vehicle Make",
        },
      },
      y: {
        title: {
          display: true,
          text: "Count",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <h2 className="text-center p-5 "><b>Vehicle Make Distribution</b></h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartDisplay;
