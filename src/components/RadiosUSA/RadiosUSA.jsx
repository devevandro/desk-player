import React, { useState, useEffect } from 'react';
import RadioBrowser from 'radio-browser';
import RadiosDatas from '../Common/RadiosDatas/RadiosDatas.jsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import './RadiosUSA.scss';

const RadiosUSA = () => {
    const [radioStation, setRadioStation] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        function getMusics() {
            let filters = {
                by: 'country',
                searchterm: 'United States of America'
            };

            setLoad(true);
            RadioBrowser.getStations((filters)).then((data) => {
                setRadioStation(data);
                setLoad(false);
            }).catch(error => console.log(error));
        }

        getMusics();
    }, []);

    return (<>
        {load ? <> <p className="loading">Carregando.....</p> <CircularProgress color={"#ffffff"} size={'80px'} style={{ position: "absolute", top: "250px", left: "300px" }} /> </> : <RadiosDatas radio={radioStation} icone={'usa'}/>}
    </>);
};
export default RadiosUSA;
