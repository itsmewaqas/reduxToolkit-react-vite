import React, { useState, useRef } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { BiBell } from "react-icons/bi";

function NotificationMenu() {

    const [headerMenu, SetheaderMenu] = useState(false);

    const menuHide = useRef(null)
    const closeOpenMenus = (e) => {
        if (menuHide.current && headerMenu && !menuHide.current.contains(e.target)) {
            SetheaderMenu(false)
        }
    }
    document.addEventListener('mousedown', closeOpenMenus)

    return (
        <div className='notificationMenu'>
            <button onClick={() => SetheaderMenu(!headerMenu)}><span>10+</span><BiBell /></button>

            {headerMenu &&
                <ul ref={menuHide}>
                    <Scrollbars style={{ height: 290 }}>
                        <li style={{border:'none'}}>Notification</li>
                        <li><i>A</i><p>ALi<span>Hi, How are you? What about our next me</span></p></li>
                        <li><i>W</i><p>Waqas<span>Hi, How are you? What about our next me</span></p></li>
                        <li><i>Z</i><p>Zubair<span>Hi, How are you? What about our next me</span></p></li>
                        <li><i>J</i><p>Junaid<span>Hi, How are you? What about our next me</span></p></li>
                        <li><i>Q</i><p>Qasid<span>Hi, How are you? What about our next me</span></p></li>
                        <li><i>H</i><p>Hammad<span>Hi, How are you? What about our next me</span></p></li>
                    </Scrollbars>
                </ul>
            }
        </div>
    );
}

export default NotificationMenu;