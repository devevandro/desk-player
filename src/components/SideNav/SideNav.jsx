import React from 'react';
import './SideNav.scss';

const SideNav = () => {

    return (<>
        <div id="left-side">
            <div className="icon-radio">
                <button className="opacity">
                    <img src="/assets/icons/music.png" alt="icone música" />
                    <p>Player</p>
                </button>

                <button>
                    <img src="/assets/icons/radio.png" alt="icone música" />
                    <p>Rádio</p>
                </button>
            </div>

            <div className="select">
                <button type="button"><img src="/assets/icons/selecionar.png" alt="botão selecionar" /></button>
            </div>

            <div className="logo">
                <img src="/assets/icons/logo.png" alt="logo aplicação" />
            </div>
        </div>
    </>);
}

export default SideNav;
