import React from "react";

const MapGraph = () => {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <h2 className="text-center">Map Component</h2>
      {/* Replace this with your map implementation */}
      <p className="text-center">Map visualization will go here.</p>
    </div>
  );
};

const MapPage = () => {
  return (
    <div className="map-page">
      <MapGraph />
    </div>
  );
};

export default MapPage;
