import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import foldersJson from "../data/folders.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

import "../styles/content_table.css";

const ContentTable: React.FC = () => {
  interface Folder {
    id: number;
    folder_name: string;
    video_count: number;
    size: string;
    last_update: string;
  }

  const [folders, setFolders] = useState<Folder[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const transformedFolders = foldersJson.folders.map((folder: any) => ({
          id: folder.id,
          folder_name: folder.folder_name,
          video_count: folder.video_count,
          size: folder.size,
          last_update: folder.last_update,
        }));

        // Asignar los datos transformados a setFolders
        setFolders(transformedFolders);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table-container ">
      <table>
        <thead>
          <tr>
            <th className="column-rest">
              {" "}
              <p className="checkbox">
                <input type="checkbox" id="checkbox1" />
                <label htmlFor="checkbox1"></label>
              </p>
            </th>
            <th className="column-name">
              <p className="text">Nombre</p>
            </th>
            <th className="column-rest">
              <p className="text">Videos</p>
            </th>
            <th className="column-rest">
              <p className="text">Tama&ntilde;o</p>
            </th>
            <th className="column-rest">
              <p className="text">&#218;ltima modificaci&oacute;n</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {folders.map((folder) => (
            <tr key={folder.id} className="content-row">
              <td className="content-table-checkbox">
                <p className="checkbox">
                  <input type="checkbox" name="" id="" />
                </p>
              </td>
              <td className="content-table-name">
                <Link
                  to={`/videos/${folder.id}/${encodeURIComponent(
                    folder.folder_name
                  )}`}
                >
                  <p className="container">
                    <FontAwesomeIcon icon={faFolder} />
                    <span className="text">{folder.folder_name}</span>
                  </p>
                </Link>
              </td>
              <td className="content-table-video_count">
                <p className="text">{folder.video_count}</p>
              </td>
              <td className="content-table-size">
                <p className="text">{folder.size}</p>
              </td>
              <td className="content-table-update">
                <p className="text">{folder.last_update}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentTable;
