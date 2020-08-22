import React, { useState, useEffect } from 'react';
import RadioBrowser from 'radio-browser';
import RadiosCard from '../Common/RadiosCard/RadiosCard';
import Pagination from '../Common/Pagination/Pagination';
import './RadiosUSA.scss';

const RadiosUSA = () => {
    const [cuurrentPage, setCurrentPage] = useState(1);
    const [radiosPerPage] = useState(16);
    const [radioStaion, setRadioStation] = useState([]);
    console.log('página atual: ', cuurrentPage);

    useEffect(() => {
        function getMusics() {
            let filters = {
                limit: 588,
                by: 'country',
                searchterm: 'United State'
            };

            RadioBrowser.getStations((filters)).then((data) => {
                setRadioStation(data);
                console.log(data);
            }).catch(error => console.log(error));
        }

        getMusics();
    }, []);

    /*pegando as radioss atuais*/
    const indexOfLastRadio = cuurrentPage * radiosPerPage;
    const indexOfFirstRadio = indexOfLastRadio - radiosPerPage;
    const currentRadios = radioStaion.slice(indexOfFirstRadio, indexOfLastRadio);

    /*mudando a página*/
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (<>
        <div className="radios">
            <RadiosCard radios={currentRadios} />
        </div>

        <div className="pagination">
            <Pagination currentPage={cuurrentPage} radiosPerPage={radiosPerPage} totalRadios={radioStaion.length} paginate={paginate} />
        </div>
    </>);
};

export default RadiosUSA;
