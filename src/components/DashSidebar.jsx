import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { BiShow, BiUserCircle, BiTask, BiCube, BiIdCard } from "react-icons/bi";

function DashSidebar(props) {

  const menulist = [
    {
      menuTitle: 'Overview',
      menuURL: 'Overview',
    },
    {
      menuTitle: 'Users',
      menuURL: 'Users',
    },
    {
      menuTitle: 'Tasks',
      menuURL: 'Tasks',
    },
    {
      menuTitle: 'Component',
      menuURL: 'Component',
    },
    {
      menuTitle: 'Profile',
      menuURL: 'Profile',
    }
  ];

  const [selectedMenu, selectedMenuSet] = useState('Overview');

  const renderIcon = (icon) => {
    switch (icon) {
      case "Overview":
        return <BiShow />;
      case "Users":
        return <BiUserCircle />;
      case "Tasks":
        return <BiTask />;
      case "Component":
        return <BiCube />;
      case "Profile":
        return <BiIdCard />;
      default:
        return <BiArrowFromBottom />
    }
  }

  return (
    <div className={props.sidebarCtrl}>
      <ul className='sidebar' id='scrollable'>
        {menulist?.map((item, index) => (
          <li key={index.toString()}>
            <NavLink to={item.menuURL}
              className={selectedMenu === item.menuTitle ? 'active' : ''}
              onClick={() => selectedMenuSet(item.menuURL)}>
              <i>{renderIcon(item.menuURL)}</i>
              <title className={props.titleCtrl}>{item.menuTitle}</title></NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashSidebar;


