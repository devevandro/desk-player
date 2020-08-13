import React from 'react';
import RadioIcon from '@material-ui/icons/Radio';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import {makeStyles} from '@material-ui/core/styles';
import './SideNav.scss';

const SideNav = () => {
    //código para moficar a cor dos icones
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > svg': {
                margin: theme.spacing(2),
            },
        },
    }));

    function filesOpen() {
        console.log('teste btn');
    }

    return (<>
        <div id="left-side">
            <div className="icon-radio">
                <button className="opacity">
                    <MusicVideoIcon style={{color: '#ffffff', fontSize: 30}} />
                    <p>Player</p>
                </button>

                <button className="opacity">
                    <RadioIcon style={{color: "#ffffff", fontSize: 30}} />
                    <p>Rádio</p>
                </button>
            </div>

            <div className="select">
                <input type="file" multiple style={{display: 'none'}} />
                <button type="button" onClick={filesOpen}><PlaylistAddIcon style={{fontSize: 50, color: '#ffffff'}} /></button>
                <p>Nova Lista</p>
            </div>

            <div className="logo">
                <img src="/assets/icons/logo.png" alt="logo aplicação" />
            </div>
        </div>
    </>);
}

export default SideNav;
