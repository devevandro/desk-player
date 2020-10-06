import React, { useState, useEffect, createRef } from 'react';
import PlayRadio from '../PlayRadio/PlayRadio.jsx'; /* 
import SearchIcon from '@material-ui/icons/Search'; */
import RadioIcon from '@material-ui/icons/Radio';
import './RadiosCard.scss';

const RadioMusicCard = ({ radios, icone }) => {
    const [search] = useState('');
    const [filteredRadios, setFilteredRadios] = useState([]);
    const [name, setName] = useState('');
    const [getUrl, setGetUrl] = useState('');
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
            {filteredRadios.map((el, index) => {
                    return <>
                        <div key={index} className={name === el.name ? 'radios-description-opacity' : 'radios-description'} onClick={() => {setGetUrl(el.url_resolved); setName(el.name)}}>
                            <div className={'radios-cards'}>
                                {(icone === 'rap') && <img src={'assets/icons/rap.png'} />}
                                {(icone === 'samba') && <img src={'assets/icons/cavaquinho.png'} />}
                                {(icone === 'brasil') && <img src={'assets/icons/brasil.png'} />}
                                {(icone === 'sertanejo') && <img src={'assets/icons/sertanejo.png'} />}
                                {(icone === 'usa') && <img src={'assets/icons/usa.png'} />}
                                {(icone === 'diversos') && <img src={'assets/icons/auto.png'} />}
                                <p>{el.name}</p>
                            </div>
                        </div>
                    </>
                })}
            <PlayRadio url={getUrl} getName={name} />
        </div>

        {/* <div id="search">
            <SearchIcon />
            <input type="text" placeholder="nome da radio" onChange={e => setSearch(e.target.value)} />
        </div> */}
    </>)
};

export default RadioMusicCard;
