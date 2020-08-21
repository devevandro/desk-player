import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ReactHlsPlayer from 'react-hls-player';
import './RadiosCard.scss';

const RadioMusicCard = ({ radios }) => {

    return (<>
        <div id="stations">
            {radios.map(el => (
                <div className="radios-description">
                    <span>
                        {((el.favicon.indexOf('.ico') > 0) || (el.favicon === '')) ? <img src="/assets/radios/phone.png" alt="icone rádios"/> : <img src={el.favicon} alt="icone rádios" />}
                        <p>{el.name}</p>
                        {
                        (el.url_resolved.indexOf('.m3u8') > 0) ? <ReactHlsPlayer url={el.url_resolved} controls={true} style={{position: 'relative', outline: '0', width: '180px', height: '4vh', top: '8px'}} /> : <ReactAudioPlayer className="player" src={el.url_resolved} controls style={{position: 'relative', outline: '0', width: '170px', height: '4vh', top: '8px' }} />
                        }

                    </span>
                </div>
            ))}
        </div>
    </>);
};

export default RadioMusicCard;
