import React from 'react';
import Menubar from '../Menubar/Menubar';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';

export const Layout = () => {

  return (
    <div className="layout-container">
    <div className="wrapper">
      <Menubar />
      <Main />
      <Sidebar />
    </div>
  </div>
  )
}
