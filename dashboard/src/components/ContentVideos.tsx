import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import videosJson from "../data/videos.json";
import "../styles/videos.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPlayCircle,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

interface Video {
  folder_id: number;
  video_name: string;
  size: string;
  length: string;
  last_update: string;
}

const Videos: React.FC = () => {
  const { id, folderName } = useParams<{
    id: string | undefined;
    folderName: string | undefined;
  }>();
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id !== undefined) {
          const filteredVideos = videosJson.videos.filter(
            (video: Video) => video.folder_id === parseInt(id, 10)
          );
          setVideos(filteredVideos);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="videos-container">
      <header className="videos-info">
        <Link to="/videos" className="videos-back">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <h2 className="videos-folderName">
          Videos / <b>{folderName}</b>{" "}
        </h2>
      </header>

      <form action="#" id="content-form">
        <div className="search-container">
          <input
            type="search"
            name="search-folder"
            id="content-search"
            placeholder="| Buscar video"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>
      </form>
      <div className="videos-table-containter">
        <table>
          <thead>
            <tr>
              <th className="videos-column-rest">
                <p className="checkbox">
                  <input type="checkbox" name="" id="" />
                </p>
              </th>
              <th className="videos-column-name">
                <p className="text">Nombre</p>
              </th>
              <th className="videos-column-rest">
                <p className="text">Tama&ntilde;o</p>
              </th>
              <th className="videos-column-rest">
                <p className="text">Duraci&oacute;n</p>
              </th>
              <th className="videos-column-rest">
                <p className="text">&#218;ltima modificaci&oacute;n</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {videos.map((video) => (
              <tr key={video.folder_id} className="video-content-row">
                <td className="video content-table-checkbox">
                  <p className="checkbox">
                    <input type="checkbox" name="" id="" />
                  </p>
                </td>
                <td className="video-content-table-name">
                  <p className="container">
                    <FontAwesomeIcon icon={faPlayCircle} />
                    <span className="text">{video.video_name}</span>
                  </p>
                </td>
                <td className="video-content-table-size">
                  <p className="text">{video.size}</p>
                </td>
                <td className="video-content-table-length">
                  <p className="text">{video.length}</p>
                </td>
                <td className="video content table-update">
                  <p className="text">{video.last_update}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    // <div>
    //   <h1>Videos de {folderName}</h1>
    //   <div>
    //     {videos.map((video, index) => (
    //       <div key={index}>
    //         <h2>{video.video_name}</h2>
    //         <p>Size: {video.size}</p>
    //         <p>Last Update: {video.last_update}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Videos;
