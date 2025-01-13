import React from "react";
import MapGraph from "../components/MapGraph"; // Adjust path to parent directory

const MapPage = () => {
  const locations = [
    { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
    { lat: 34.0522, lng: -118.2437, label: "Los Angeles" },
  ];

  return (
    <div className="container">
      <MapGraph locations={locations} />
    </div>
  );
};

export default MapPage;
