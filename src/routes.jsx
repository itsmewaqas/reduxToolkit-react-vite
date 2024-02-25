import React, { useState, useEffect } from 'react';
import {
  Routes,
  useLocation,
  Route
} from "react-router-dom";

import OuterDashboard from './components/OuterDashboard.jsx'
import Login from './outerRoutes/Login.jsx';
import Signup from './outerRoutes/Signup.jsx';
import ForgotPassword from './outerRoutes/ForgotPassword.jsx';

import InnerDashboard from './components/InnerDashboard.jsx';
import Overview from './innerRoutes/Overview.jsx';
import Users from './innerRoutes/Users.jsx';
import Tasks from './innerRoutes/Tasks.jsx';
import Component from './innerRoutes/Component.jsx';
import Profile from './innerRoutes/Profile.jsx';
import NoMatch from './NoMatch.jsx';

function Routers(props) {

  const [auth, Setauth] = useState(
    { email: 'm.waqas@test.com', password: 'waqas123' }
  );

  useEffect(() => {
  }, [])

  return (
    <div>
      <Routes>
        {auth == null || auth == undefined || auth.length == 0 ?
          <Route path="/" element={<OuterDashboard />}>
            <Route exact path="/" element={<Login />} /> 
            <Route path="/Signup" element={<Signup />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
          :
          <Route path="/" element={<InnerDashboard />}>
            <Route exact path="/" element={<Overview />} />
            <Route path="Overview" element={<Overview />} />
            <Route path="Users" element={<Users />} />
            <Route path="Tasks" element={<Tasks />} />
            <Route path="Component" element={<Component />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        }
      </Routes>
    </div>
  );
}

export default Routers;
