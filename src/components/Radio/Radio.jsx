import React, { useState, useEffect } from 'react';
import RadiosBrasil from '../RadiosBrasil/RadiosBrasil';
import RadiosRap from '../RadiosRap/RadiosRap.jsx';
import MyRadios from '../MyRadios/MyRadios.jsx';
import RadiosSertaneja from '../RadiosSertaneja/RadiosSertaneja.jsx';
import RadioBrowser from 'radio-browser';
import './Radio.scss';

const Radio = () => {

    return (<>
        <RadiosBrasil />
        {/* <RadiosRap /> */}
        {/* <MyRadios /> */}
        {/* <RadiosSertaneja /> */}
    </>)
};

export default Radio;
