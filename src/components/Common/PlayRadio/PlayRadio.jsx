import React, { useState } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import Grid from '@material-ui/core/Grid';
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import ReactPlayer from 'react-player'
import './PlayRadio.scss';

const PlayRadio = ({ url }) => {
    const [vol, setVol] = useState(false);
    const [numberVolume, setNumberVolume] = useState(false);
    const [play, setPlay] = useState(false);
    let [number, setNumber] = useState(20);
    let [valorVolume, setValorVolume] = useState(0.2);

    function handleVolumeUp() {
        setValorVolume(valorVolume += 0.1);
        setNumber(number += 10);
        setNumberVolume(true);
        setVol(false);

        setTimeout(() => {
            setNumberVolume(false);
        }, 3000);
    }

    function handleVolumeDown() {
        setValorVolume(valorVolume -= 0.1);
        setNumber(number -= 10);
        setNumberVolume(true);

        if(valorVolume < 0.1) {
            setVol(true);
        }

        setTimeout(() => {
            setNumberVolume(false);
        }, 3000);
    }

    function handlePlay() {
        setPlay(true);
    }

    function handlePause() {
        setPlay(false);
    }

    return (<>
        <div id="container">
            <ReactPlayer html5={true} url={url} playing={play} volume={valorVolume} muted={vol} />

            {!play ? <PlayArrowIcon className="play" onClick={handlePlay} /> : <PauseIcon className="play" onClick={handlePause} />}

            {!vol
                ?
                <Grid item>
                    <VolumeUp onClick={() => setVol(true)} className='volume' />
                </Grid>
                :
                <Grid item>
                    <VolumeOffIcon onClick={() => setVol(false)} className='volume' />
                </Grid>
            }

            <div className={valorVolume < 0.1 ? 'disable' : 'minus'} onClick={handleVolumeDown}>-</div>
            <div className={valorVolume > 0.9 ? 'disable' : 'plus'} onClick={handleVolumeUp}>+</div>
        </div>

        {numberVolume == false ? '' : <div className='show'><p>{number}%</p></div>}
    </>);
}

export default PlayRadio;
