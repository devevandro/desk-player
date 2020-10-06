import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ReactHlsPlayer from 'react-hls-player';
import './PlayRadio.scss';

const PlayRadio = ({url, getName}) => {

    return <>
        <div id="container">
        {(url.indexOf('.m3u8') > 0) ? <ReactHlsPlayer className="players" url={url} controls={true} autoPlay={true}/> : <ReactAudioPlayer className="players" src={url} controls={true} autoPlay={true}/>}
        <p>{getName ? 'Tocando:': "Clique em uma rádio para iniciar"} {getName}</p>
        </div>
    </>
}

export default PlayRadio;
