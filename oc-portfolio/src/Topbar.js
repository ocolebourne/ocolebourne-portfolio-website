import React from 'react';

import './index.css';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Topbar() {



    return (
        <div>
            <div className="topbar-container">
                <div><a className="a-grey name-logo" href="/">Oliver Colebourne</a></div>
                <div><a className="a-grey" href="/#about">About me</a></div>
            </div>
        </div>
    );

}

export default Topbar;
