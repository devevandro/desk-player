import React, { useState, useEffect } from 'react';
import RadioBrowser from 'radio-browser';
import RadiosCard from '../Common/RadiosCard/RadiosCard';
import Pagination from '../Common/Pagination/Pagination';
import './RadiosSertaneja.scss';

const RadiosBrasil = () => {
    const [cuurrentPage, setCurrentPage] = useState(1);
    const [radiosPerPage] = useState(16);
    const [sertanejo, setSertanejo] = useState([]);

    //radios sertaneja
    useEffect(() => {
        function getRapRadios() {
            let filters = {
                by: 'tag',
                searchterm: 'sertanejo'
            };

            RadioBrowser.getStations((filters)).then((data)  => {
                setSertanejo(data);
                console.log(data);
            }).catch(error => console.log(error));
        };

        getRapRadios();
    }, []);

    /*pegando as radioss atuais*/
    const indexOfLastRadio = cuurrentPage * radiosPerPage;
    const indexOfFirstRadio = indexOfLastRadio - radiosPerPage;
    const currentRadios = sertanejo.slice(indexOfFirstRadio, indexOfLastRadio);

    /*mudando a página*/
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (<>
        <div className="radios">
            <RadiosCard radios={currentRadios} />
        </div>

        <div className="pagination">
            <Pagination radiosPerPage={radiosPerPage} totalRadios={sertanejo.length} paginate={paginate} />
        </div>
    </>);
};

export default RadiosBrasil;
