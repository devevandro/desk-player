import React, { useState, useEffect } from 'react';
import RadioBrowser from 'radio-browser';
import RadiosCard from '../Common/RadiosCard/RadiosCard';
import Pagination from '../Common/Pagination/Pagination';
import './MyRadios.scss';

const RadiosBrasil = () => {
    const [cuurrentPage, setCurrentPage] = useState(1);
    const [radiosPerPage] = useState(16);
    const [radio, setRadio] = useState([]);

    //minhas rádios preferidas
    useEffect(() => {
        function getRadiosLocale() {
            const radios = [
                {
                    name: "Generations Hip Hop Soul Radio",
                    prefixo: "00,0",
                    url: "https://gene-wr08.ice.infomaniak.ch/gene-wr08.mp3",
                    favicon: "/assets/radios/hip-hop-soul.jpg"
                },

                {
                    name: "Rádio Graúna FM",
                    prefixo: '95.3',
                    url: "https://ice.fabricahost.com.br/graunafm",
                    favicon: "/assets/radios/grauna.png"
                },

                {
                    name: "Rádio Massa - Londrina",
                    prefixo: '97.7',
                    url: "https://stm01.virtualcast.com.br:8118/live",
                    favicon: "/assets/radios/massa-fm.png"
                },

                {
                    name: "Integração FM",
                    prefixo: "105.1",
                    url: "https://sslplayer.reverso.srv.br/proxy/7816/;?1596640058988",
                    favicon: "/assets/radios/integracao.png"
                },
                {
                    name: "Geração Hip-Hop Brasil",
                    prefixo: "00",
                    url: "https://srv3.geracaoradios.com/radio/8030/radio?1596417040399",
                    favicon: "/assets/radios/geracao-hip-hop.jpg"
                },

                {
                    name: "Rap e Compromisso",
                    prefixo: "00",
                    url: "https://node-15.zeno.fm/kpa9wqn67vzuv?1596416841654=&rj-tok=AAABc7Hk-ykAbekSirhM4lvs7w&rj-ttl=5",
                    favicon: "/assets/radios/rap-compromisso.jpg"
                },

                {
                    name: "Radio Yara FM",
                    prefixo: "88.7",
                    url: "https://ssl.xcast.com.br:10528/;?1596576359222",
                    favicon: "/assets/radios/yara-fm.png"
                },

                {
                    "name": "Radio FM 104",
                    "prefixo": "104.1",
                    "url": "https://player.transmissaodigital.com/proxy/7208",
                    "favicon": "/assets/radios/fm-104.png"
                },

                {
                    "name": "Radio T FM",
                    "prefixo": "97.5",
                    "url": "https://live.paineldj.com.br/proxy/tandira?mp=/live",
                    "favicon": "/assets/radios/radio-t.jpg"
                },

                {
                    "name": "Radio RC FM",
                    "prefixo": "98.1",
                    "url": "http://s01.transmissaodigital.com:7434/stream?1597161337451",
                    "favicon": "/assets/radios/rc-fm.jpg"
                },

                {
                    "name": "Radio Igapó FM",
                    "prefixo": "104.5",
                    "url": "http://r13.ciclano.io:8882/live?1596577327840",
                    "favicon": "/assets/radios/igapo.png"
                },

                {
                    "name": "Vale do Sol FM",
                    "prefixo": "100.5",
                    "url": "http://paineldj.com.br:11738/;",
                    "favicon": "/assets/radios/vale-do-sol.png"
                },

                {
                    name: "Rainha da Paz FM",
                    prefixo: "87.9",
                    url: "http://s02.transmissaodigital.com:7074/stream?1596641841576",
                    favicon: "/assets/radios/rainha-da-paz.png"
                },

                {
                    "name": "Paiquerê FM",
                    "prefixo": "98.9",
                    "url": "http://stm01.virtualcast.com.br:8294/live",
                    "favicon": "/assets/radios/paiquere-fm.png"
                },

                {
                    name: "FM o Dia - Rio de Janeiro",
                    prefixo: "100.5",
                    url: "http://c2901-slbps-sambavideos.akamaized.net/radio/FMoDiaAudio_14d480346fa04ebcb4f03173f2dae707/livestream/master.m3u8",
                    favicon: "/assets/radios/fm-o-dia.png"
                },

                {
                    name: "Rádio Rap Nacional",
                    prefixo: "100.5",
                    url_resolved: "http://node-17.zeno.fm/spzru5axm8quv?rj-ttl=5&rj-tok=AAABc_J2iqAAsB7n7uHuQJG-PA",
                    favicon: "/assets/radios/radio-rap.png"
                }];

            setRadio(radios);
        };

        getRadiosLocale();
    }, []);

    /*pegando as radioss atuais*/
    const indexOfLastRadio = cuurrentPage * radiosPerPage;
    const indexOfFirstRadio = indexOfLastRadio - radiosPerPage;
    const currentRadios = radio.slice(indexOfFirstRadio, indexOfLastRadio);

    /*mudando a página*/
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (<>
        <div className="radios">
            <RadiosCard radios={currentRadios} />
        </div>

        <div className="pagination">
            <Pagination radiosPerPage={radiosPerPage} totalRadios={radio.length} paginate={paginate} />
        </div>
    </>);
};

export default RadiosBrasil;
