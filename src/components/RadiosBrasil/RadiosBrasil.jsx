import React, { useState, useEffect } from 'react';
import RadioBrowser from 'radio-browser';
import RadiosData from '../Common/RadiosDatas/RadiosDatas.jsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import './RadiosBrasil.scss';

const RadiosBrasil = () => {
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

    return (<>
        {load ? <> <p className="loading">Carregando.....</p> <CircularProgress color={"#ffffff"} size={'80px'} style={{ position: "absolute", top: "250px", left: "300px" }} /> </> : <RadiosData radio={radioStation} icone={'brasil'} />}
    </>);
};

export default RadiosBrasil;
