import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import LoginHeader from './LoginHeader';
import LoginFooter from './LoginFooter';

function OuterDashboard(props) {

  return (
    <div className='loginWrapper'>
      <header>
        <LoginHeader />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <LoginFooter />
      </footer>
    </div>
  );
}

export default OuterDashboard;