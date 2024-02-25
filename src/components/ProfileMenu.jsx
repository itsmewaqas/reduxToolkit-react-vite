import React, { useState,useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { BiUser,BiLock,BiLogInCircle } from "react-icons/bi";

function ProfileMenu() {
 
    let navigate = useNavigate();

    const logOut = () => {
        navigate('/');
        localStorage.clear();
        window.location.reload();
    }

    const userObj = { name: 'Muhammad Waqas', email: 'muhammadwaqas642@gmail.com' };

    const [headerMenu, SetheaderMenu] = useState(false);

    const menuHide = useRef(null)
    const closeOpenMenus = (e) => {
        if (menuHide.current && headerMenu && !menuHide.current.contains(e.target)) {
            SetheaderMenu(false)
        }
    }
    document.addEventListener('mousedown', closeOpenMenus)

    return (
        <div className='profileMenu'>
            <button onClick={() => SetheaderMenu(!headerMenu)}>{userObj.name[0]}</button>
            {headerMenu &&
                <ul ref={menuHide}>
                    <li><i>{userObj.name[0]}</i>{userObj.name}<span>{userObj.email}</span></li>
                    <li onClick={() => console.log('call profile update method')}><BiUser /> Profile Update</li>
                    <li onClick={() => console.log('call password change method')}><BiLock /> Password Change</li>
                    <li onClick={() => logOut()}><BiLogInCircle /> Logout</li>
                </ul>
            }
        </div>
    );
}

export default ProfileMenu;