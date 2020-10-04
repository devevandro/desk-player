import React, { useState } from 'react';
import RadiosCard from '../RadiosCard/RadiosCard';
import Paginate from '../Pagination/Paginate';
import './RadiosDatas.scss';

const RadiosDatas = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [radiosPerPage] = useState(9);

    /*pegando as radioss atuais*/
    const indexOfLastRadio = currentPage * radiosPerPage;
    const indexOfFirstRadio = indexOfLastRadio - radiosPerPage;
    const currentRadios = props.radio.slice(indexOfFirstRadio, indexOfLastRadio);
    const howManyPages = Math.ceil(props.radio.length / radiosPerPage);

    return (<>
        <div className="radios">
            <RadiosCard radios={currentRadios} icone={props.icone} />
        </div>

        <div className="pagination">
            <Paginate pages={howManyPages} setCurrentPage={setCurrentPage} />
        </div>
    </>);
};

export default RadiosDatas;
