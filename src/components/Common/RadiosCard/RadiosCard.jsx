import React, {useRef} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './RadiosCard.scss';

const RadioMusicCard = ({ radios }) => {

    const testeRef = useRef();
    console.log('ref: ', testeRef.current)

    function teste() {
        testeRef.current.style.backgroundColor = "blue"
    }

    return (<>
        <div id="stations">
            {radios.map(el => (
                <div className="radios-description">
                <span>
                    {((el.favicon.indexOf('.ico') > 0) || (el.favicon == '')) ? <img src="/assets/radios/phone.png"></img> : <img src={el.favicon} alt="" />}
                    <p>{el.name}</p>
                    <ReactAudioPlayer ref={testeRef} onClick={teste} src={el.url} controls style={{position: 'relative', outline: '0', width: '170px', height: '4vh', top: '8px' }} />
                </span>
            </div>
            ))}
        </div>
    </>);
};

export default RadioMusicCard;
