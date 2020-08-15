import React, { useState } from 'react';
import SideNav from '../../Components/SideNav/SideNav.jsx';
import Player from '../../Components/Player/Player.jsx';
import Radio from '../../Components/Radio/Radio.jsx';
import RadioIcon from '@material-ui/icons/Radio';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import { makeStyles } from '@material-ui/core/styles';
import './Home.scss';

const Home = () => {
    const [selected, setSelected] = useState(0);

    //código para moficar a cor dos icones
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > svg': {
                margin: theme.spacing(2),
            },
        },
    }));

    return (<>
        <div id="main">
            <div className="controls">
                <button className="btn-minimize"><img src="/assets/icons/icon-minus.png" alt="" /></button>
                <button className="btn-close"><img src="/assets/icons/icon-close.png" alt="" /></button>
            </div>

            <SideNav />

            <div id="btn-choose">
                <div className="icon-musics">
                    <MusicVideoIcon style={{ color: '#ffffff', fontSize: 30 }} />
                    <button onClick={() => setSelected(1)}>Player</button>
                </div>

                <div className="icon-radio">
                    <RadioIcon style={{ color: "#ffffff", fontSize: 30 }} />
                    <button onClick={() => setSelected(2)}>Rádio</button>
                </div>
            </div>

            {selected != 0 && <>
                {selected === 1 && <>
                    <div className="musics">
                        <Player />
                    </div>
                </> || selected === 2 && <>
                    <div className="radiosStations">
                        <Radio />
                    </div>
                </> || selected === 3 && <>
                </>}
            </>}

            <div className="description">
                <p>Powered by ElectronJS and ReactJS</p>
            </div>
        </div>
    </>);
}

export default Home;
