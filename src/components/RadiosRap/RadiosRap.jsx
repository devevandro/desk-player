import React, { useState, useEffect } from 'react';
import RadioBrowser from 'radio-browser';
import RadiosCard from '../Common/RadiosCard/RadiosCard';
import Pagination from '../Common/Pagination/Pagination';
import './RadiosRap.scss';

const RadiosBrasil = () => {
    const [cuurrentPage, setCurrentPage] = useState(1);
    const [radiosPerPage] = useState(16);
    const [radiosRap, setRadiosRap] = useState([]);

    //radios de rap
    useEffect(() => {
        function getRapRadios() {
            let filters = {
                by: 'tag',
                searchterm: 'rap'
            };

            RadioBrowser.getStations((filters)).then((data) => {
                setRadiosRap(data);
            }).catch(error => console.log(error));
        };

        getRapRadios();
    }, []);

    /*pegando as radioss atuais*/
    const indexOfLastRadio = cuurrentPage * radiosPerPage;
    const indexOfFirstRadio = indexOfLastRadio - radiosPerPage;
    const currentRadios = radiosRap.slice(indexOfFirstRadio, indexOfLastRadio);

    /*mudando a página*/
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (<>
        <div className="radios">
            <RadiosCard radios={currentRadios} />
        </div>

        <div className="pagination">
            <Pagination radiosPerPage={radiosPerPage} totalRadios={radiosRap.length} paginate={paginate} />
        </div>
    </>);
};

export default RadiosBrasil;
