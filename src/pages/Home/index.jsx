import React from 'react';
import SideNav from '../../Components/SideNav/SideNav.jsx';
import Player from '../../Components/Player/Player.jsx';
import Radio from '../../Components/Radio/Radio.jsx';
import './Home.scss';

const Home = () => {

    return (<>
        <div id="main">
            <div className="controls">
                <button className="btn-minimize"><img src="/assets/icons/icon-minus.png" alt="" /></button>
                <button className="btn-close"><img src="/assets/icons/icon-close.png" alt="" /></button>
            </div>

            <SideNav />

            {/* <div className="musics">
                <Player />
            </div> */}

            <div className="radiosStations">
                <Radio />
            </div>

            <div className="description">
                <p>Powered by ElectronJS and ReactJS</p>
            </div>
        </div>
    </>);
}

export default Home;
