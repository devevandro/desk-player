import React from 'react';
import './Pagination.scss';

const Pagination = ({ radiosPerPage, totalRadios, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRadios / radiosPerPage); i++) {
        pageNumbers.push(i);
    }

    return (<>
        <div id="pagination">
            <nav>
                <ul>
                    {pageNumbers.map(number =>
                        <li key={number}>
                            <a onClick={() => paginate(number)} href="!#">
                                {number}
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    </>);
};


export default Pagination;
