import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import OverviewPage from "./pages/OverviewPage";
import ChartsPage from "./pages/ChartsPage";
import MapPage from "./pages/MapPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/charts" element={<ChartsPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  );
};

export default App;
