import React, { useState, useEffect } from 'react';
import RadiosDatas from '../Common/RadiosDatas/RadiosDatas.jsx';
import './RadiosSamba.scss';

const RadiosSamba = () => {
    const [radio, setRadio] = useState([]);

    //minhas rádios preferidas
    useEffect(() => {
        function getRadiosLocale() {
            const radios = [
                {
                    name: "Pop Music Samba e Pagode",
                    url_resolved: "https://node-31.zeno.fm/favyqatpu0quv?rj-ttl=5&rj-tok=AAABdDwLF4QAkIqMDMh4F-8XzQ"
                },

                {
                    name: "Rádio Puro Pagodão",
                    url_resolved: "http://stm7.xcast.com.br:6932/;"
                },

                {
                    name: "Rádio Paredão Pagodão",
                    url_resolved: "https://node-23.zeno.fm/3vwwc66wm8quv?rj-ttl=5&rj-tok=AAABdJG4maIAhvKxEfwJjk2gxA"
                },

                {
                    name: "Vagalume FM - Samba e Pagode",
                    url_resolved: "https://stream.vagalume.fm/hls/147015499779090/aac.m3u8"
                },

                {
                    name: "Brisa de Samba",
                    url_resolved: "https://node-01.zeno.fm/08pzyh88azzuv?rj-ttl=5&rj-tok=AAABdDwSfxkAZFDKrHUkmoglcg"
                },

                {
                    name: "Rádio Liga Samba",
                    url_resolved: "https://srv1.braudio.com.br/sc/7308"
                },

                {
                    name: "Rádio Pagode",
                    url_resolved: "http://6d9a.webradio.upx.net.br:9061/stream"
                },

                {
                    "name": "Rádio Top Samba",
                    "url_resolved": "http://hts06.kshost.com.br:8762/;"
                },

                {
                    name: "Batucada",
                    url_resolved: "https://node-27.zeno.fm/7sdtm8c8y5quv?rj-ttl=5&rj-tok=AAABdDwRc6QAHbEczAt3Al8ETg"
                },];

            setRadio(radios);
        };

        getRadiosLocale();
    }, []);

    return (<>
        <RadiosDatas radio={radio} icone={'samba'} />
    </>);
};

export default RadiosSamba;
