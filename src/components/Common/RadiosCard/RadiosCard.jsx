import React, { useState, useEffect, createRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ReactHlsPlayer from 'react-hls-player';
import SearchIcon from '@material-ui/icons/Search';
import RadioIcon from '@material-ui/icons/Radio';
import './RadiosCard.scss';

const RadioMusicCard = ({ radios, icone }) => {
    const [search, setSearch] = useState('');
    const [filteredRadios, setFilteredRadios] = useState([]);
    const testeRef = createRef();
    console.log('ref: ', testeRef);

    useEffect(() => {
        setFilteredRadios(
            radios.filter(el => {
                return el.name.toLowerCase().includes(search.toLowerCase());
            })
        );
    }, [search, radios]);

    return (<>
        <div id="stations">
            {
                filteredRadios.map((el, index) => {
                    return <>
                        <div key={index} className="radios-description">
                            <div className="radios-cards">
                                {(icone === 'rap') && <img src={'/assets/icons/rap.png'} /> }
                                {(icone === 'samba') && <img src={'/assets/icons/cavaquinho.png'} /> }
                                {(icone === 'brasil') && <img src={'/assets/icons/brasil.png'} /> }
                                {(icone === 'sertanejo') && <img src={'/assets/icons/sertanejo.png'} /> }
                                {(icone === 'usa') && <img src={'/assets/icons/usa.png'} /> }
                                {(icone === 'diversos') && <RadioIcon /> }
                                <p>{el.name}</p>
                                {
                                    (el.url_resolved.indexOf('.m3u8') > 0) ? <ReactHlsPlayer url={el.url_resolved} controls={true} style={{ position: 'relative', outline: '0', width: '190px', height: '4vh', top: '3px' }} /> : <ReactAudioPlayer className="player" src={el.url_resolved} controls style={{ position: 'relative', outline: '0', width: '190px', height: '4vh', top: '3px' }} />
                                }

                            </div>
                        </div>
                    </>
                })
            }
        </div>

        {/* <div id="search">
            <SearchIcon />
            <input type="text" placeholder="nome da radio" onChange={e => setSearch(e.target.value)} />
        </div> */}
    </>)
};

export default RadioMusicCard;
