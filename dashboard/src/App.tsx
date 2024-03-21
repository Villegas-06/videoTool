import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Videos from "./components/ContentVideos";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/videos" element={<Content />} />
            <Route path="/videos/:id/:folderName" element={<Videos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
