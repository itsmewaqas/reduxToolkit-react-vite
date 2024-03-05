import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Form } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import { BiMenuAltLeft, BiSearch, BiSun, BiMoon } from "react-icons/bi";
import ProfileMenu from './ProfileMenu';
import NotificationMenu from './NotificationMenu';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, selectLanguage } from '../redux/reducer/themeSlices';

function DashHeader(props) {

  const dispatch = useDispatch();

  const data = useSelector((state) => state);

  const [menuCollapse, menuCollapseSet] = useState(false);

  const menuCollapsed = () => {
    menuCollapseSet({ menuCollapse: !menuCollapse });
    props.sidebarCtrlFunc();
  }

  const toggleTheme = () => {
    dispatch(selectTheme())
  }

  const [selectlang, setselectlang] = useState('en');

  const toggleLang = (e) => {
    const newLang = e.target.value;
    setselectlang(newLang);
    dispatch(selectLanguage());
  };

  useEffect(() => {
  }, []);


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
      <button onClick={toggleTheme} className='themeToggle'>
        {data.themeSlices.themeSlices == 'light' ? <BiSun /> :
          data.themeSlices.themeSlices == 'dark' ? <BiMoon /> : <BiSun />}
      </button>
      <select className='langMenu' name="selectlang" value={selectlang} onChange={toggleLang}>
        <option hidden selected>Select Language</option>
        <option value="en">en</option>
        <option value="ar">ar</option>
      </select>
    </div>
  );
}

export default DashHeader;