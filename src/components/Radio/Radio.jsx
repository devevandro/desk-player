import React from 'react';
import RadiosBrasil from '../RadiosBrasil/RadiosBrasil';
import RadiosRap from '../RadiosRap/RadiosRap.jsx';
import MyRadios from '../MyRadios/MyRadios.jsx';
import RadiosSertaneja from '../RadiosSertaneja/RadiosSertaneja.jsx';
import './Radio.scss';

const Radio = () => {

    return (<>
        <div className="teste">
            <RadiosBrasil />
            {/* <RadiosRap /> */}
            {/* <MyRadios /> */}
            {/* <RadiosSertaneja /> */}
        </div>
    </>)
};

export default Radio;
