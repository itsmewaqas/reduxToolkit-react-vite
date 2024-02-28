import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Form } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import { BiMenuAltLeft, BiSearch } from "react-icons/bi";
import ProfileMenu from './ProfileMenu';
import NotificationMenu from './NotificationMenu';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, selectLanguage } from '../redux/reducer/themeSlices';

function DashHeader(props) {

  const dispatch = useDispatch();

  const data = useSelector((state) => state);
  console.log("data", data);

  const [menuCollapse, menuCollapseSet] = useState(false);



  const menuCollapsed = () => {
    menuCollapseSet({ menuCollapse: !menuCollapse });
    props.sidebarCtrlFunc();
  }

  const [modeSelect, setModeSelect] = useState('light');
  const [selectlang, setselectlang] = useState('en');

  const modeHandel = () => {
    dispatch(selectTheme(modeSelect))
  }
  console.log('modeSelect', modeSelect)


  const langHandel = () => {
    setselectlang(values);
    dispatch(selectLanguage(values))
  }
  
  const initalState = {
    selectlang:'',
  }

  const [values, setValues] = useState(initalState);

  const handleChnage = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
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

      <button onClick={() => modeHandel(setModeSelect(modeSelect == 'light' ? 'dark' : 'light'))}>
        {data.themeSlices.themeSlices}
      </button>


      <select name="selectlang"  onChange={handleChnage}>
        <option hidden selected>select</option>
        <option value="en">en</option>
        <option value="ar">ar</option>
      </select>

      <button onClick={() => langHandel()}>lang</button>

    </div>
  );
}

export default DashHeader;