import React, { useState, useEffect } from 'react';
import RadiosDatas from '../Common/RadiosDatas/RadiosDatas.jsx';
import './MyRadios.scss';

const MyRadios = () => {
    const [radio, setRadio] = useState([]);

    //minhas rádios preferidas
    useEffect(() => {
        function getRadiosLocale() {
            const radios = [
                {
                    name: "105 FM",
                    url_resolved: "https://digitalpay1.app:9019/live"
                },

                {
                    name: "Rádio Graúna FM",
                    url_resolved: "https://ice.fabricahost.com.br/graunafm"
                },

                {
                    name: "Rádio Massa - Londrina",
                    url_resolved: "https://stm01.virtualcast.com.br:8118/live"
                },

                {
                    name: "Integração FM",
                    url_resolved: "https://ssl.stm-ip.com/proxy/7816/;?1598757855865"
                },

                {
                    name: "Vale do Sol FM",
                    url_resolved: "https://cantador.app:9097/live?1598368048631"
                },

                {
                    name: "Rádio Evangelizar",
                    url_resolved: "https://shout87.crossradio.com.br:18000/stream/1;"
                },

                {
                    name: "Rap e Compromisso",
                    url_resolved: "https://node-15.zeno.fm/kpa9wqn67vzuv?1596416841654=&rj-tok=AAABc7Hk-ykAbekSirhM4lvs7w&rj-ttl=5"
                },

                {
                    name: "Radio Yara FM",
                    url_resolved: "https://ssl.xcast.com.br:10528/;?1596576359222"
                },

                {
                    "name": "Radio FM 104",
                    "url_resolved": "https://player.transmissaodigital.com/proxy/7208"
                },

                {
                    "name": "Radio T FM",
                    "url_resolved": "https://live.paineldj.com.br/proxy/tandira?mp=/live"
                },

                {
                    "name": "Radio RC FM",
                    "url_resolved": "http://s01.transmissaodigital.com:7434/stream?1597161337451"
                },

                {
                    "name": "Radio Igapó FM",
                    "url_resolved": "http://r13.ciclano.io:8882/live?1596577327840"
                },

                {
                    "name": "Vale do Sol FM",
                    "url_resolved": "http://paineldj.com.br:11738/;"
                },

                {
                    name: "Rainha da Paz FM",
                    url_resolved: "http://s02.transmissaodigital.com:7074/stream?1596641841576"
                },

                {
                    "name": "Paiquerê FM - Londrina",
                    "url_resolved": "http://stm01.virtualcast.com.br:8294/live"
                },

                {
                    name: "FM o Dia - Rio de Janeiro",
                    url_resolved: "http://158.69.25.64:9735/live"
                },

                {
                    name: "Rádio Escuta - Assis",
                    url_resolved: "http://s69.tecinfinity.com.br:7864/stream?1598542440840"
                },

                {
                    name: "Rádio Pajuçara - Maceió",
                    url_resolved: "https://slrp.sambavideos.sambatech.com/radio/pajucara4_7fbed8aac5d5d915877e6ec61e3cf0db/livestream/chunklist.m3u8"
                },

                {
                    name: "Rádio Nova 105 - Amapá",
                    url_resolved: "http://sv12.hdradios.net:7070/live"
                },

                {
                    name: "Rádio Ocidental FM - Acre",
                    url_resolved: "http://stream.helplay.com.br:8003/stream"
                },

                {
                    name: "Rádio Rap Nacional",
                    url_resolved: "http://node-17.zeno.fm/spzru5axm8quv?rj-ttl=5&rj-tok=AAABc_J2iqAAsB7n7uHuQJG-PA"
                }];

            setRadio(radios);
        };

        getRadiosLocale();
    }, []);

    return <>
        <RadiosDatas radio={radio} icone={'diversos'} />
    </>

};

export default MyRadios;
