import React, { useState, useEffect } from 'react';
import RadiosCard from '../Common/RadiosCard/RadiosCard';
import Paginate from '../Common/Pagination/Paginate';
import './RadioSertanejo.scss';

const RadioSertanejo = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [radiosPerPage] = useState(9);
    const [radio, setRadio] = useState([]);

    //minhas rádios preferidas
    useEffect(() => {
        function getRadiosLocale() {
            const radios = [

                {
                    name: "Rádio Sertaneja Mix",
                    url_resolved: "http://centova.radioempresabrasil.com.br:8314/stream"
                },

                {
                    name: "Rádio Raiz Sertaneja",
                    url_resolved: "http://e10648.cloudrad.io:8782/stream"
                },

                {
                    name: "Rádio Buteco Sertanejo",
                    url_resolved: "https://node-11.zeno.fm/6kumndewqbruv?rj-ttl=5&rj-tok=AAABdD1QEdQAJzNIYTGErOnzrw"
                },

                {
                    name: "Estereo Som Sertanejo",
                    url_resolved: "http://streaming.ntelecom.com.br:8508/;"
                },

                {
                    name: "Hunter FM - Sertanejo",
                    url_resolved: "https://live.hunter.fm/sertanejo_high?origin=/country"
                },

                {
                    name: "Vagalume FM - Sertanejo",
                    url_resolved: "https://stream.vagalume.fm/hls/14619606471054026608/aac.m3u8"
                },

                {
                    name: "Lançamento - Sertanejo e Sofrência",
                    url_resolved: "https://node-30.zeno.fm/r5c6nufqb2zuv?rj-ttl=5&rj-tok=AAABdD1T9wkA56BdAlyd-59eDw"
                },

                {
                    "name": "Integração FM",
                    "url_resolved": "https://ssl.stm-ip.com/proxy/7816/;?1598757855865",
                },

                {
                    "name": "Rádio Viola FM",
                    "url_resolved": "http://suaradio1.dyndns.ws:10866/stream?1598758294542"
                },

                {
                    name: "Rádio Saudades",
                    url_resolved: "http://node-14.zeno.fm/aye8zg6wm8quv?rj-ttl=5&rj-tok=AAABdDzMkD0A-LMTcqPe63TUFw"
                },

                {
                    name: "Rádio Sertanejo Brasil",
                    prefixo: "100.5",
                    url_resolved: "http://node-14.zeno.fm/75r9qc5wm8quv?rj-ttl=5&rj-tok=AAABdDxBC1YAOy3hNrvCRhXvSQ"
                },

                {
                    "name": "Rádio Sertanejo só Modão",
                    "url_resolved": "http://node-32.zeno.fm/6knukz6wm8quv?rj-ttl=5&rj-tok=AAABdDyonj0AenigJFQ10Z537Q"
                },

                {
                    "name": "Rádio Sertanejo Universitário",
                    "url_resolved": "http://node-25.zeno.fm/8va6516wm8quv?rj-ttl=5&rj-tok=AAABdDzyHTAAKtLh9gUKJeXJ5w"
                },

                {
                    "name": "Rádio Viola Viva Regional - Uberlandia / MG - Brasil",
                    "url_resolved": "http://45.76.239.210:5024/stream"
                },

                {
                    "name": "Romântica FM Sertaneja",
                    "url_resolved": "http://r11.ciclano.io:9095/stream;"
                },

                {
                    "name": "Pop Sertanejo Raiz",
                    "url_resolved": "https://node-12.zeno.fm/6s3nu5s31zquv?1598758337867=&rj-tok=AAABdD11ZyMA2bQCPPcCMPkBWg&rj-ttl=5"
                },

                {
                    "name": "Rádio Pop Sertanejo",
                    "url_resolved": "https://node-35.zeno.fm/h29nc9fy3zquv.aac?1598758429397=&rj-tok=AAABdD12zRoANQ8wFO6DgM4fiA&rj-ttl=5"
                },

                {
                    "name": "Sertanejo Bom Demais",
                    "url_resolved": "http://cast4.hoost.com.br:8673/stream?1598758513277"
                }];

            setRadio(radios);
        };

        getRadiosLocale();
    }, []);

    /*pegando as radioss atuais*/
    const indexOfLastRadio = currentPage * radiosPerPage;
    const indexOfFirstRadio = indexOfLastRadio - radiosPerPage;
    const currentRadios = radio.slice(indexOfFirstRadio, indexOfLastRadio);
    const howManyPages = Math.ceil(radio.length / radiosPerPage);

    return (<>
        <div className="radios">
            <RadiosCard radios={currentRadios} icone={'sertanejo'} />
        </div>

        <div className="pagination">
            <Paginate pages={howManyPages} setCurrentPage={setCurrentPage} />
            {/* <Pagination currentPage={currentPage} radiosPerPage={radiosPerPage} totalRadios={radio.length} paginate={paginate} /> */}
        </div>
    </>);
};

export default RadioSertanejo;
