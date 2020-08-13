import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Radios from '../Common/Pagination/Radios.jsx';
import RadioMusicCard from '../Common/RadioMusicCard/RadioMusicCard.jsx';
import RadioBrowser from 'radio-browser';
import Hls from 'hls.js';
import './Radio.scss';

const Radio = () => {
    let hls = null;
    const [radioStaion, setRadioStation] = useState([]);
    const [radio, setRadio] = useState([]);

    useEffect(() => {
        function getMusics() {
            let filters = {
                by: 'country',
                searchterm: 'Brazil'
                /* limit: 1,
                by: 'tag',
                searchterm: 'jazz' */
            };

            RadioBrowser.getStations((filters)).then((data) => {
                setRadioStation(data);
            }).catch(error => console.log(error));
        }

        getMusics();
    });

    useEffect(() => {
        function getRadiosLocale() {
            const radios = [
                {
                    nome: "Generations Hip Hop Soul Radio",
                    prefixo: "00,0",
                    url: "https://gene-wr08.ice.infomaniak.ch/gene-wr08.mp3",
                    img: "/assets/radios/hip-hop-soul.jpg"
                },

                {
                    nome: "Rádio Graúna FM",
                    prefixo: '95.3',
                    url: "https://ice.fabricahost.com.br/graunafm",
                    img: "/assets/radios/grauna.png"
                },

                {
                    nome: "Rádio Massa - Londrina",
                    prefixo: '97.7',
                    url: "https://stm01.virtualcast.com.br:8118/live",
                    img: "/assets/radios/massa-fm.png"
                },

                {
                    nome: "Integração FM",
                    prefixo: "105.1",
                    url: "https://sslplayer.reverso.srv.br/proxy/7816/;?1596640058988",
                    img: "/assets/radios/integracao.png"
                },
                {
                    nome: "Geração Hip-Hop Brasil",
                    prefixo: "00",
                    url: "https://srv3.geracaoradios.com/radio/8030/radio?1596417040399",
                    img: "/assets/radios/geracao-hip-hop.jpg"
                },

                {
                    nome: "Rap e Compromisso",
                    prefixo: "00",
                    url: "https://node-15.zeno.fm/kpa9wqn67vzuv?1596416841654=&rj-tok=AAABc7Hk-ykAbekSirhM4lvs7w&rj-ttl=5",
                    img: "/assets/radios/rap-compromisso.jpg"
                },

                {
                    nome: "Radio Yara FM",
                    prefixo: "88.7",
                    url: "https://ssl.xcast.com.br:10528/;?1596576359222",
                    img: "/assets/radios/yara-fm.png"
                },

                {
                    "nome": "Radio FM 104",
                    "prefixo": "104.1",
                    "url": "https://player.transmissaodigital.com/proxy/7208",
                    "img": "/assets/radios/fm-104.png"
                },

                {
                    "nome": "Radio T FM",
                    "prefixo": "97.5",
                    "url": "https://live.paineldj.com.br/proxy/tandira?mp=/live",
                    "img": "/assets/radios/radio-t.jpg"
                },

                {
                    "nome": "Radio RC FM",
                    "prefixo": "98.1",
                    "url": "http://s01.transmissaodigital.com:7434/stream?1597161337451",
                    "img": "/assets/radios/rc-fm.jpg"
                },

                {
                    "nome": "Radio Igapó FM",
                    "prefixo": "104.5",
                    "url": "http://r13.ciclano.io:8882/live?1596577327840",
                    "img": "/assets/radios/igapo.png"
                },

                {
                    "nome": "Vale do Sol FM",
                    "prefixo": "100.5",
                    "url": "http://paineldj.com.br:11738/;",
                    "img": "/assets/radios/vale-do-sol.png"
                },

                {
                    nome: "Rainha da Paz FM",
                    prefixo: "87.9",
                    url: "http://s02.transmissaodigital.com:7074/stream?1596641841576",
                    img: "/assets/radios/rainha-da-paz.png"
                },

                {
                    "nome": "Paiquerê FM",
                    "prefixo": "98.9",
                    "url": "http://stm01.virtualcast.com.br:8294/live",
                    "img": "/assets/radios/paiquere-fm.png"
                },

                {
                    "nome": "FM o Dia - Rio de Janeiro",
                    "prefixo": "100.5",
                    "url": "http://c2901-slbps-sambavideos.akamaized.net/radio/FMoDiaAudio_14d480346fa04ebcb4f03173f2dae707/livestream/master.m3u8",
                    "img": "/assets/radios/fm-o-dia.png"
                }];

                setRadio(radios);
        };

        getRadiosLocale();
    }, []);

    return (<>
        {
            radioStaion.map((el) => {
                return <>
                    <div id="radios">
                        <RadioMusicCard info={el} />
                    </div>
                </>
            })
        }
    </>)
};

export default Radio;
