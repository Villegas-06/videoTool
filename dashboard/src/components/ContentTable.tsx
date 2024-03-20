import React, { useState, useEffect } from "react";
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
            <th>
              {" "}
              <input className="column-rest" type="checkbox" name="" id="" />
            </th>
            <th className="column-name">Nombre</th>
            <th className="column-rest">Videos</th>
            <th className="column-rest">Tama&ntilde;o</th>
            <th className="column-rest">&#218;ltima modificaci&oacute;n</th>
          </tr>
        </thead>
        <tbody>
          {folders.map((folder) => (
            <tr key={folder.id}>
              <td className="content-table-checkbox">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="content-table-name">
                <FontAwesomeIcon icon={faFolder} />
                <p className="text">{folder.folder_name}</p></td>
              <td className="content-table-video_count">
                {folder.video_count}
              </td>
              <td className="content-table-size">{folder.size}</td>
              <td className="content-table-update">{folder.last_update}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentTable;
