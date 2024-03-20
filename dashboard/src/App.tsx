import React from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

import './App.css';


const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content-wrapper">
        <Content />
      </div>
    </div>
  );
};

export default App;
