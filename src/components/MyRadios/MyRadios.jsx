import React, { useState, useEffect } from 'react';
import RadiosCard from '../Common/RadiosCard/RadiosCard';
import Paginate from '../Common/Pagination/Paginate';
import './MyRadios.scss';

const MyRadios = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [radiosPerPage] = useState(9);
    const [radio, setRadio] = useState([]);

    //minhas rádios preferidas
    useEffect(() => {
        function getRadiosLocale() {
            const radios = [
                {
                    name: "105 FM",
                    url_resolved: "https://digitalpay1.app:9019/live",
                    favicon: "/assets/radios/hip-hop-105-fm.png"
                },

                {
                    name: "Rádio Graúna FM",
                    prefixo: '95.3',
                    url_resolved: "https://ice.fabricahost.com.br/graunafm",
                    favicon: "/assets/radios/grauna.png"
                },

                {
                    name: "Rádio Massa - Londrina",
                    prefixo: '97.7',
                    url_resolved: "https://stm01.virtualcast.com.br:8118/live",
                    favicon: "/assets/radios/massa-fm.png"
                },

                {
                    name: "Integração FM",
                    url_resolved: "https://ssl.stm-ip.com/proxy/7816/;?1598757855865"
                },

                {
                    name: "Vale do Sol FM",
                    prefixo: "103.33",
                    url_resolved: "https://cantador.app:9097/live?1598368048631",
                    favicon: "/assets/radios/voz-do-vale.png"
                },

                {
                    name: "Rádio Evangelizar",
                    prefixo: "00",
                    url_resolved: "https://shout87.crossradio.com.br:18000/stream/1;",
                    favicon: "/assets/radios/evangelizar.png"
                },

                {
                    name: "Rap e Compromisso",
                    prefixo: "00",
                    url_resolved: "https://node-15.zeno.fm/kpa9wqn67vzuv?1596416841654=&rj-tok=AAABc7Hk-ykAbekSirhM4lvs7w&rj-ttl=5",
                    favicon: "/assets/radios/rap-compromisso.jpg"
                },

                {
                    name: "Radio Yara FM",
                    prefixo: "88.7",
                    url_resolved: "https://ssl.xcast.com.br:10528/;?1596576359222",
                    favicon: "/assets/radios/yara-fm.png"
                },

                {
                    "name": "Radio FM 104",
                    "prefixo": "104.1",
                    "url_resolved": "https://player.transmissaodigital.com/proxy/7208",
                    "favicon": "/assets/radios/fm-104.png"
                },

                {
                    "name": "Radio T FM",
                    "prefixo": "97.5",
                    "url_resolved": "https://live.paineldj.com.br/proxy/tandira?mp=/live",
                    "favicon": "/assets/radios/radio-t.jpg"
                },

                {
                    "name": "Radio RC FM",
                    "prefixo": "98.1",
                    "url_resolved": "http://s01.transmissaodigital.com:7434/stream?1597161337451",
                    "favicon": "/assets/radios/rc-fm.jpg"
                },

                {
                    "name": "Radio Igapó FM",
                    "prefixo": "104.5",
                    "url_resolved": "http://r13.ciclano.io:8882/live?1596577327840",
                    "favicon": "/assets/radios/igapo.png"
                },

                {
                    "name": "Vale do Sol FM",
                    "prefixo": "100.5",
                    "url_resolved": "http://paineldj.com.br:11738/;",
                    "favicon": "/assets/radios/vale-do-sol.png"
                },

                {
                    name: "Rainha da Paz FM",
                    prefixo: "87.9",
                    url_resolved: "http://s02.transmissaodigital.com:7074/stream?1596641841576",
                    favicon: "/assets/radios/rainha-da-paz.png"
                },

                {
                    "name": "Paiquerê FM - Londrina",
                    "prefixo": "98.9",
                    "url_resolved": "http://stm01.virtualcast.com.br:8294/live",
                    "favicon": "/assets/radios/paiquere-fm.png"
                },

                {
                    name: "FM o Dia - Rio de Janeiro",
                    prefixo: "100.5",
                    url_resolved: "http://c2901-slbps-sambavideos.akamaized.net/radio/FMoDiaAudio_14d480346fa04ebcb4f03173f2dae707/livestream/master.m3u8",
                    favicon: "/assets/radios/fm-o-dia.png"
                },

                {
                    name: "Rádio Escuta - Assis",
                    prefixo: "100.5",
                    url_resolved: "http://s69.tecinfinity.com.br:7864/stream?1598542440840",
                    favicon: "/assets/radios/escuta-fm.jpg"
                },

                {
                    name: "Rádio Pajuçara - Maceió",
                    prefixo: "100.5",
                    url_resolved: "https://slrp.sambavideos.sambatech.com/radio/pajucara4_7fbed8aac5d5d915877e6ec61e3cf0db/livestream/chunklist.m3u8",
                    favicon: "/assets/radios/escuta-fm.jpg"
                },

                {
                    name: "Rádio Nova 105 - Amapá",
                    prefixo: "100.5",
                    url_resolved: "http://sv12.hdradios.net:7070/live",
                    favicon: "/assets/radios/escuta-fm.jpg"
                },

                {
                    name: "Rádio Ocidental FM - Acre",
                    prefixo: "100.5",
                    url_resolved: "http://stream.helplay.com.br:8003/stream",
                    favicon: "/assets/radios/escuta-fm.jpg"
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
    const indexOfLastRadio = currentPage * radiosPerPage;
    const indexOfFirstRadio = indexOfLastRadio - radiosPerPage;
    const currentRadios = radio.slice(indexOfFirstRadio, indexOfLastRadio);
    const howManyPages = Math.ceil(radio.length/radiosPerPage);

    return (<>
        <div className="radios">
            <RadiosCard radios={currentRadios} icone={'diversos'} />
        </div>

        <div className="pagination">
            <Paginate pages = {howManyPages} setCurrentPage={setCurrentPage} />
            {/* <Pagination currentPage={currentPage} radiosPerPage={radiosPerPage} totalRadios={radio.length} paginate={paginate} /> */}
        </div>
    </>);
};

export default MyRadios;
