import React from 'react';
import './SideNav.scss';

const SideNav = () => {

    return (<>
        <div id="left-side">
            <div className="logo">
                <img src="assets/icons/auto-falante.png" alt="logo aplicação" />
                <p>DeskSounds</p>
                <span className="descript">By React & Electron JS</span>
            </div>
        </div>
    </>);
}

export default SideNav;
