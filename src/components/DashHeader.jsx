import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Form } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import { BiMenuAltLeft, BiSearch } from "react-icons/bi";
import ProfileMenu from './ProfileMenu';
import NotificationMenu from './NotificationMenu';

function DashHeader(props) {

  const [menuCollapse, menuCollapseSet] = useState(false);
  const menuCollapsed = () => {
    menuCollapseSet({ menuCollapse: !menuCollapse });
    props.sidebarCtrlFunc();
  }

  return (
    <div className='dHeader'>
      <div className="logoArea">
        <a><img className='logo' src={logo} alt='' /> </a>
      </div>
      <a onClick={() => menuCollapsed()} className='hamburger'><BiMenuAltLeft size={30} /></a>
      <ProfileMenu />
      <NotificationMenu />
      <div className='hSearchBox'>
        <input type="text" placeholder='Search' name='search' />
        <button><BiSearch /></button>
      </div>
    </div>
  );
}

export default DashHeader;