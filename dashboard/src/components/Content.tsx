import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faTrash,
  faFolder,
  faCirclePlay,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import ContentTable from "./ContentTable";

import "../styles/content.css";

const Content: React.FC = () => {
  const [selectedLeftButton, setSelectedLeftButton] = useState<string | null>(
    null
  );
  const [selectedRightButton, setSelectedRightButton] = useState<string | null>(
    null
  );

  const handleButtoLeftnClick = (buttonName: string) => {
    setSelectedLeftButton(
      buttonName === selectedLeftButton ? null : buttonName
    );
  };

  const handleButtonRightClick = (buttonName: string) => {
    setSelectedRightButton(
      buttonName === selectedRightButton ? null : buttonName
    );
  };

  return (
    <div className="content-container">
      <div className="container-main">
        <div className="container-left-buttons">
          <button
            className={`library ${
              selectedLeftButton === "library" ? "selected" : ""
            }`}
            onClick={() => handleButtoLeftnClick("library")}
          >
            <FontAwesomeIcon icon={faBook} />
            <p className="text">Library</p>
          </button>
          <button
            className={`trash ${
              selectedLeftButton === "trash" ? "selected" : ""
            }`}
            onClick={() => handleButtoLeftnClick("trash")}
          >
            <FontAwesomeIcon icon={faTrash} />
            <p className="text">Papelera</p>
          </button>
        </div>

        <div className="container container-right-buttons">
          <button
            className={`new-folder ${
              selectedRightButton === "new-folder" ? "selected" : ""
            }`}
            onClick={() => handleButtonRightClick("new-folder")}
          >
            <FontAwesomeIcon icon={faFolder} />
            <p className="text">Nueva carpeta</p>
          </button>
          <button
            className={`new-video ${
              selectedRightButton === "new-video" ? "selected" : ""
            }`}
            onClick={() => handleButtonRightClick("new-video")}
          >
            <FontAwesomeIcon icon={faCirclePlay} />
            <p className="text">Nuevo video</p>
          </button>
        </div>
      </div>

      <form action="#" id="content-form">
        <div className="search-container">
          <input
            type="search"
            name="search-folder"
            id="content-search"
            placeholder="| Buscar carpeta"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>
      </form>
      <ContentTable />
    </div>
  );
};

export default Content;
