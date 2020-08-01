import React from 'react';

import './index.css';

import Col from 'react-bootstrap/Col'

function Sidebar() {



    return (
      <Col xs={3} className="sidebar-container">
        <div className="sidebar-logo name-logo"><a>Oliver Colebourne</a></div>
        <div className="sidebar-about"><a>About me</a></div>
      </Col>
    );

}

export default Sidebar;
