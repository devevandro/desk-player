import React, { useState } from 'react';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';/* 
import PauseCircleOutlineIcon from './node_modules/@material-ui/icons/PauseCircleOutline'; */
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import './Player.scss';

//código para os icones de música
const useStyles = makeStyles((theme) => ({
    root: {
        '& > svg': {
            margin: theme.spacing(2),
        },
    },
}));

const useStylesVolume = makeStyles((theme) => ({
    root: {
        width: 200,
        '& > svg': {
            margin: theme.spacing(2)
        },
    },
}));

const Player = () => {
    const classes = useStyles();
    const classe = useStylesVolume();
    const [value, setValue] = useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (<>
        <div id="disco">
            <img src="/assets/icons/disc.png" alt="" />
        </div>

        {<div id="musics">
            {/* {
                musica.map((el, i) => {
                    return <>
                        <div className="music-card">
                            <span className="qntd">{++i}</span>
                            <span className="name">{el.nome}</span>
                            <span className="artist">{el.artista}</span>
                            <span className="time">{el.time}</span>
                            <div className="white-line"></div>
                        </div>
                    </>
                })
            } */}
        </div>}

        <div className="progress">
            <span id="time-left">00:00</span>
            <input type="range" name="" id=""/>
        </div>

        <div id="music-controls">
            <div className={classes.root}>
                <button><SkipPreviousIcon style={{ fontSize: 60, color: '#ffffff' }} /></button>
                <button><PlayCircleOutlineIcon style={{ fontSize: 60, color: '#ffffff' }} /></button>
                <button><SkipNextIcon style={{ fontSize: 60, color: '#ffffff' }} /></button>
            </div>
        </div>

        <div id="volume">
            <div className={classe.root}>
                <Grid container spacing={2}>
                    <Grid item>
                        <VolumeDown style={{color: '#ffffff'}}/>
                    </Grid>
                    <Grid item xs>
                        <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" style={{color: '#ffffff'}} />
                    </Grid>
                    <Grid item>
                        <VolumeUp style={{color: '#ffffff'}} />
                    </Grid>
                </Grid>
            </div>
        </div>
    </>);
}

export default Player;
