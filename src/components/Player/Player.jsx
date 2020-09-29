import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import * as mm from 'music-metadata';
import * as musicMetadata from 'music-metadata-browser';
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
    const [file, setFile] = useState([]);
    const [teste, setTeste] = useState([]);

    useEffect(() => {
        file.map(el => {
            musicMetadata.parseBlob(el).then(metadata => {
                setTeste(metadata.common.title);
                console.log("\n get:", metadata.common.title, "\n", metadata.common.artist, "\n", secondsToTime(metadata.format.duration));
            });
        })
    }, [file]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //convet time music
    function padZero(v) {
        return (v < 10) ? "0" + v : v;
    }

    //convet time music
    function secondsToTime(t) {
        return padZero(parseInt((t / (60)) % 60)) + ":" + padZero(parseInt((t) % 60));
    }

    return (<>
        <div id="disco">
            <img src="/assets/icons/disc.png" alt="" />
            {/* <img src="build/assets/icons/disc.png" alt="" /> */}
        </div>

        {<div id="musics">
            <Dropzone multiple={true} accept={["audio/*"]} onDrop={(files) => { setFile(files) }}>
                {({ getRootProps, getInputProps }) => (
                    <div className="container">
                        <div
                            {...getRootProps({
                                className: 'dropzone',
                                onDrop: event => event.stopPropagation()
                            })}
                        >
                            <input {...getInputProps()} />
                            <p>Clique ou arraste suas musicas aqui</p>
                        </div>
                    </div>
                )}
            </Dropzone>

            {
                file.map((el, i) => {
                    return <>
                        <div className="music-card">
                            <span className="qntd">{++i}</span>
                            <ul>
                                <li>{teste}</li>
                            </ul>
                        </div>
                    </>
                })
            }
        </div>}

        <div className="progress">
            <span id="time-left">00:00</span>
            <input type="range" name="" id="" />
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
                        <VolumeDown style={{ color: '#ffffff' }} />
                    </Grid>
                    <Grid item xs>
                        <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" style={{ color: '#ffffff' }} />
                    </Grid>
                    <Grid item>
                        <VolumeUp style={{ color: '#ffffff' }} />
                    </Grid>
                </Grid>
            </div>
        </div>
    </>);
}

export default Player;
