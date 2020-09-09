import React, { useState, useEffect } from 'react';
import RadioBrowser from 'radio-browser';
import RadiosCard from '../Common/RadiosCard/RadiosCard';
import Paginate from '../Common/Pagination/Paginate';
import './RadiosUSA.scss';

const RadiosUSA = () => {
    const [cuurrentPage, setCurrentPage] = useState(1);
    const [radiosPerPage] = useState(16);
    const [radioStation, setRadioStation] = useState([]);
    console.log('página atual: ', cuurrentPage);

    useEffect(() => {
        function getMusics() {
            let filters = {
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
    const currentRadios = radioStation.slice(indexOfFirstRadio, indexOfLastRadio);
    const howManyPages = Math.ceil(radioStation.length / radiosPerPage);

    return (<>
        <div className="radios">
            <RadiosCard radios={currentRadios} icone={'usa'}/>
        </div>

        <div className="pagination">
            <Paginate pages={howManyPages} setCurrentPage={setCurrentPage} />
        </div>
    </>);
};
export default RadiosUSA;
