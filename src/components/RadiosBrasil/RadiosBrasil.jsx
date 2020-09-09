import React, { useState, useEffect } from 'react';
import RadioBrowser from 'radio-browser';
import RadiosCard from '../Common/RadiosCard/RadiosCard';
import Paginate from '../Common/Pagination/Paginate';
import './RadiosBrasil.scss';

const RadiosBrasil = () => {
    const [currentPage, setCurrentPage] = useState(3);
    const [radiosPerPage] = useState(9);
    const [radioStation, setRadioStation] = useState([]);

    useEffect(() => {
        function getMusics() {
            let filters = {
                by: 'country',
                searchterm: 'Brazil'
            };

            RadioBrowser.getStations((filters)).then((data) => {
                setRadioStation(data);
                console.log(data);
            }).catch(error => console.log(error));
        }

        getMusics();
    }, []);

    /*pegando as radioss atuais*/
    const indexOfLastRadio = currentPage * radiosPerPage;
    const indexOfFirstRadio = indexOfLastRadio - radiosPerPage;
    const currentRadios = radioStation.slice(indexOfFirstRadio, indexOfLastRadio);
    const howManyPages = Math.ceil(radioStation.length / radiosPerPage);

    return (<>
        <div className="radios">
            <RadiosCard radios={currentRadios} icone={'brasil'} />
        </div>

        <div className="pagination">
            <Paginate pages={howManyPages} setCurrentPage={setCurrentPage} max={'max'}/>
        </div>
    </>);
};

export default RadiosBrasil;
