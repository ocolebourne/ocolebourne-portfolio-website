import React from 'react';

import './index.css';

import Col from 'react-bootstrap/Col'

function Sidebar() {



    return (
      <Col xs={3} className="sidebar-container">
        <div className="sidebar-logo"><a className="a-grey name-logo" href="/">Oliver Colebourne</a></div>
        <div className="sidebar-about"><a className="a-grey" href="/#about">About me</a></div>
      </Col>
    );

}

export default Sidebar;
