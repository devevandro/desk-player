import React, { useState, useEffect } from 'react';
import RadiosDatas from '../Common/RadiosDatas/RadiosDatas.jsx';
import './RadiosRap.scss';

const RadiosRap = () => {
    const [radio, setRadio] = useState([]);

    //minhas rádios preferidas
    useEffect(() => {
        function getRadiosLocale() {
            const radios = [

                {
                    name: "Rádio Mundo Black",
                    url_resolved: "http://216.245.204.226:8028/live"
                },

                {
                    name: "Vagalume FM - Rap e Hip Hop",
                    url_resolved: "https://stream.vagalume.fm/hls/1470155107337444/aac.m3u8"
                },

                {
                    name: "Rap Life Rádio",
                    url_resolved: "https://s28.maxcast.com.br:8196/live"
                },

                {
                    name: "Rádio Balada Rap",
                    url_resolved: "http://srv4.ipstm.net:8228/;"
                },

                {
                    name: "Rap é Compromisso",
                    url_resolved: "https://node-15.zeno.fm/kpa9wqn67vzuv?1596416841654=&rj-tok=AAABc7Hk-ykAbekSirhM4lvs7w&rj-ttl=5"
                },

                {
                    name: "Rádio Geração Hip Hop",
                    url_resolved: "http://srv3.geracaoradios.com:8030/radio.mp3/;"
                },

                {
                    "name": "Rádio Studio Souto - Rap Nacional",
                    "url_resolved": "http://192.99.150.31:8377/stream"
                },

                {
                    "name": "Rádio Rap a Voz do Gueto",
                    "url_resolved": "https://node-20.zeno.fm/zxxg927e32quv?rj-ttl=5&rj-tok=AAABdDaIRl0AToaktbu64bH4rg"
                },

                {
                    "name": "Som Web Rap",
                    "url_resolved": "https://node-07.zeno.fm/fc7w1wgg0xquv?rj-ttl=5&rj-tok=AAABdDaLPhwAV7Cy3rZVPIvcLA"
                },

                {
                    "name": "Rádio Black Sampa",
                    "url_resolved": "http://hts04.kshost.com.br:9494/live"
                },

                {
                    "name": "Rádio Rap Nacional",
                    url_resolved: "http://node-17.zeno.fm/spzru5axm8quv?rj-ttl=5&rj-tok=AAABc_J2iqAAsB7n7uHuQJG-PA"
                },

                {
                    "name": "Cássicos dos Funkeiros Online",
                    "url_resolved": "https://02.bitstreaming.info/player.php?porta=7516"
                },

                {
                    "name": "Rádio Metropolitana Funk",
                    "url_resolved": "http://paineldj4.com.br:8306/stream"
                },

                {
                    "name": "Vagalume FM - Funk",
                    "url_resolved": "https://stream.vagalume.fm/hls/1470154922349875/aac.m3u8"
                },

                {
                    "name": "Rádio Funk Melody",
                    "url_resolved": "https://sonic1.transmissaodigital.com:7016/live"
                },

                {
                    "name": "Lançamentos Funk e Batidão",
                    "url_resolved": "https://node-03.zeno.fm/wwdgk21qb2zuv?rj-ttl=5&rj-tok=AAABdDwvdb8A3XaYPn8gqQkaqA"
                },

                {
                    "name": "Rádio Disco Funk",
                    "url_resolved": "http://streaming12.hstbr.net:8084/live"
                },

                {
                    "name": "Rádio Brega Funk",
                    "url_resolved": "http://stm11.srvstm.com:8632/;stream.nsv"
                },

                {
                    "name": "Music FM Funk",
                    "url_resolved": "https://node-02.zeno.fm/ae5ux0ubqeruv?rj-ttl=5&rj-tok=AAABdDwzfBUAbeu1vqb1lprIVA"
                },

                {
                    "name": "Play Funk",
                    "url_resolved": "https://ssl1.transmissaodigital.com:20079/live"
                },

                {
                    name: "Rádio CBMN",
                    url_resolved: "https://servidor40-5.brlogic.com:8832/live"
                },];

            setRadio(radios);
        };

        getRadiosLocale();
    }, []);

    return (<>
        <RadiosDatas radio={radio} icone={'rap'} />
    </>);
};

export default RadiosRap;
