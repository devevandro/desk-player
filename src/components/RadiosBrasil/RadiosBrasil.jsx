import React, { useState, useEffect } from 'react';
import RadioBrowser from 'radio-browser';
import RadiosCard from '../Common/RadiosCard/RadiosCard';
import Paginate from '../Common/Pagination/Paginate';
import CircularProgress from '@material-ui/core/CircularProgress';
import './RadiosBrasil.scss';

const RadiosBrasil = () => {
    const [currentPage, setCurrentPage] = useState(3);
    const [radiosPerPage] = useState(9);
    const [radioStation, setRadioStation] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        function getMusics() {
            let filters = {
                by: 'country',
                searchterm: 'Brazil'
            };

            setLoad(true);
            RadioBrowser.getStations((filters)).then((data) => {
                setRadioStation(data);
                setLoad(false);
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
        {load ? <CircularProgress color={"#ffffff"} size={'80px'} style={{position: "absolute", top: "200px", left: "275px"}}/> : <RadiosCard radios={currentRadios} icone={'brasil'}/>}
        </div>

        <div className="pagination">
            <Paginate pages={howManyPages} setCurrentPage={setCurrentPage} max={'max'}/>
        </div>
    </>);
};

export default RadiosBrasil;
