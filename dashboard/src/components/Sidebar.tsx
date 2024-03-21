import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  faChartPie,
  faFolder,
  faCirclePlay,
  faChartBar,
  faCog,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoVideoTool from "../images/logo videoTool.png";

import "../styles/sidebar.css";

const Sidebar: React.FC = () => {
  const { navSelect } = useParams<{ navSelect?: string }>();
  const [selectedLink, setSelectedLink] = useState<string | null>(
    navSelect || null
  );

  const handleLinkButton = (linkName: string) => {
    setSelectedLink(linkName);
  };

  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <div className="container nav-logo">
          <img src={logoVideoTool} alt="" />
        </div>
        <ul>
          <li className="nav-dashboard">
            <Link
              to="/dashboard"
              className={`dashboard ${
                selectedLink === "dashboard" ? "selected" : ""
              }`}
              onClick={() => handleLinkButton("dashboard")}
            >
              <FontAwesomeIcon icon={faChartPie} />
              <p className="nav-text">Dashboard</p>
            </Link>
          </li>
          <li className="nav-videos">
            <Link
              to="/videos"
              className={`videos ${
                selectedLink === "videos" ? "selected" : ""
              }`}
              onClick={() => handleLinkButton("videos")}
            >
              <FontAwesomeIcon icon={faFolder} />
              <p className="nav-text">Videos</p>
            </Link>
          </li>
          <li className="nav-player">
            <Link
              to="/player"
              className={`player ${
                selectedLink === "player" ? "selected" : ""
              }`}
              onClick={() => handleLinkButton("player")}
            >
              <FontAwesomeIcon icon={faCirclePlay} />
              <p className="nav-text">Player</p>
            </Link>
          </li>
          <li className="nav-analytics">
            <Link
              to="/analytics"
              className={`analytics ${
                selectedLink === "analytics" ? "selected" : ""
              }`}
              onClick={() => handleLinkButton("analytics")}
            >
              <FontAwesomeIcon icon={faChartBar} />
              <p className="nav-text">Analytics</p>
            </Link>
          </li>
          <li className="nav-config">
            <Link
              to="/config"
              className={`config ${
                selectedLink === "config" ? "selected" : ""
              }`}
              onClick={() => handleLinkButton("config")}
            >
              <FontAwesomeIcon icon={faCog} />
              <p className="nav-text">Configuraciones</p>
            </Link>
          </li>
          <li className="nav-help">
            <Link
              to="/help"
              className={`config ${selectedLink === "help" ? "selected" : ""}`}
              onClick={() => handleLinkButton("help")}
            >
              <FontAwesomeIcon icon={faCircleQuestion} />
              <p className="nav-text">Ayuda</p>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="nav-plan-storage">
        <p className="title">Mi plan - plus</p>
        <small>El uso se renueva el: 3-may-23</small>
        <div className="storage">
          <p className="title">Almacenamiento:</p>
          <p className="use">23.5 GB / 1TB </p>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-inner" style={{ width: "50%" }}></div>
          <div
            className="progress-bar-remaining"
            style={{ width: "50%" }}
          ></div>
        </div>
        <div className="mensual">
          <p className="title">Banda Mensual:</p>
          <p className="use">3.4 TB / 5 TB</p>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-inner" style={{ width: "68%" }}></div>{" "}
          <div
            className="progress-bar-remaining"
            style={{ width: "32%" }}
          ></div>
        </div>
        <button className="admin-plan">Administrar plan</button>
      </div>
    </div>
  );
};

export default Sidebar;
