import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie, faFolder, faCirclePlay, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';
import logoVideoTool from '../images/logo videoTool.png';

import '../styles/sidebar.css';

const Sidebar: React.FC = () => {

  return (
    <div className='sidebar'>
      <nav className="sidebar-nav">
        <div className="container nav-logo">
          <img src={logoVideoTool} alt="" />
        </div>
        <ul>
          <li className='nav-dashboard'>
            <a href="/dashboard"> <FontAwesomeIcon icon={faChartPie} />
              <p className="nav-text">Dashboard</p>
            </a>
          </li>
          <li className='nav-videos'>
            <a href="/videos"> <FontAwesomeIcon icon={faFolder} />
              <p className="nav-text">Videos</p>
            </a>
          </li>
          <li className='nav-player'>
            <a href="/player"> <FontAwesomeIcon icon={faCirclePlay} />
              <p className="nav-text">Player</p>
            </a>
          </li>
          <li className='nav-analytics'>
            <a href="/analytics"> <FontAwesomeIcon icon={faChartBar} />
              <p className="nav-text">Analytics</p>
            </a>
          </li>
          <li className='nav-config'>
            <a href="/config"> <FontAwesomeIcon icon={faCog} />
              <p className="nav-text">Configuraciones</p>
            </a>
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
          <div className="progress-bar-inner" style={{ width: '50%' }}></div> {/* Ejemplo de barra de progreso al 50% */}
        </div>
        <div className="mensual">
          <p className="title">Banda Mensual:</p>
          <p className="use">3.4 TB / 5 TB</p>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-inner" style={{ width: '68%' }}></div> {/* Ejemplo de barra de progreso al 68% */}
        </div>
        <button className="admin-plan">
          Administrar plan
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
