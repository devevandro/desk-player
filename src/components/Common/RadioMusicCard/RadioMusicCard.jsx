import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './RadioMusicCard.scss';

const RadioMusicCard = ({ info }) => {

    return (<>
        <div id="teste">
        <span><img src={(info.favicon === '') ? "/assets/radios/phone.png" : info.favicon} alt="" /></span>
        <span className="radioDescription">{info.name}</span>
        <ReactAudioPlayer src={info.url} controls style={{ outline: '0', width: '170px', height: '4vh' }} />
        </div>
    </>)
};


export default RadioMusicCard;
