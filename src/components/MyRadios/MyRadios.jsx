import React, { useState, useEffect } from 'react';
import RadiosDatas from '../Common/RadiosDatas/RadiosDatas.jsx';
import './MyRadios.scss';
import api from 'api-bada';

const MyRadios = () => {
    const [radio, setRadio] = useState([]);

    //minhas rádios preferidas
    useEffect(() => {
        function getRadiosLocale() {
            const radios = [
                {
                    name: "105 FM - SP",
                    url_resolved: "http://148.72.158.239:8010/live?1604105612381"
                },
                {
                    name: "Radio Mania - RJ",
                    url_resolved: "http://shout35.crossradio.com.br:8086/1/;"
                },

                {
                    name: "Rádio Graúna FM - Cornélio Procópio",
                    url_resolved: "https://ice.fabricahost.com.br/graunafm"
                },

                {
                    name: "Rádio Massa - Londrina",
                    url_resolved: "https://stm01.virtualcast.com.br:8118/live"
                },

                {
                    name: "Integração FM - Cândido Mota",
                    url_resolved: "https://ssl.stm-ip.com/proxy/7816/;?1598757855865"
                },

                {
                    name: "Rádio Evangelizar",
                    url_resolved: "https://shout87.crossradio.com.br:18000/stream/1;"
                },

                {
                    name: "Radio Yara FM - Bandeirantes",
                    url_resolved: "https://ssl.xcast.com.br:10528/;?1596576359222"
                },

                {
                    "name": "Radio FM 104 - Cornélio Procópio",
                    "url_resolved": "https://player.transmissaodigital.com/proxy/7208"
                },

                {
                    "name": "Radio T FM - Andirá",
                    "url_resolved": "https://live.paineldj.com.br/proxy/tandira?mp=/live"
                },

                {
                    "name": "Radio RC FM - Cornélio Procópio",
                    "url_resolved": "http://s01.transmissaodigital.com:7434/stream?1597161337451"
                },

                {
                    "name": "Radio Igapó FM - Londrina",
                    "url_resolved": "http://r13.ciclano.io:8882/live?1596577327840"
                },

                {
                    "name": "Vale do Sol FM - Santo Antonio da Platina",
                    "url_resolved": "http://paineldj.com.br:11738/;"
                },

                {
                    name: "Rainha da Paz FM - Cornélio Procópio",
                    url_resolved: "http://s02.transmissaodigital.com:7074/stream?1596641841576"
                },

                {
                    "name": "Paiquerê FM - Londrina",
                    "url_resolved": "http://stm01.virtualcast.com.br:8294/live"
                },

                {
                    name: "FM o Dia - Rio de Janeiro",
                    url_resolved: "http://streaming.livecenterhost.com:8054/stream?type=http&nocache=45"
                },];

            setRadio(radios);
        };

        getRadiosLocale();
    }, []);

    return <>
        <RadiosDatas radio={api.parana} icone={'diversos'} />
    </>

};

export default MyRadios;
