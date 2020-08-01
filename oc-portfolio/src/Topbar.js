import React from 'react';

import './index.css';

import Row from 'react-bootstrap/Row'

function Topbar() {



    return (
        <div>
            <Row className="topbar-container">
                <div className="name-logo"><a href="/">Oliver Colebourne</a></div>
                <div><a href="/about">About me</a></div>
            </Row>
            <div className="topbar-spacer"> </div>
        </div>
    );

}

export default Topbar;
