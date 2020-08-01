import React from 'react';

import './index.css';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Topbar() {



    return (
            <div className="topbar-container">
                <div className="name-logo"><a href="/">Oliver Colebourne</a></div>
                <div><a href="/about">About me</a></div>
            </div>
    );

}

export default Topbar;
