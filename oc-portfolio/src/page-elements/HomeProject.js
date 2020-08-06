import React from 'react';

import '../index.css';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


function HomeProject(props) {
    const image_string1=`./media/home/${props.slug+"1"}.jpg`
    const image_string2=`./media/home/${props.slug+"2"}.jpg`


    return (
        <div>
            <Row>
                <Col xs={12} sm={6}><Image className="home-image" fluid src={image_string1} alt=" " /></Col>
                <Col xs={12} sm={6}><Image className="home-image" fluid src={image_string2} alt=" " /></Col>
            </Row>
            <Row className="home-project-body">
                <Col xs={10} sm={11}><strong className="text-inline">{props.name}</strong><p className="text-inline">{props.desc}</p></Col>
                <Col className="home-project-button-cont no-gutter"><Image href={props.url} className="home-project-button move-right" fluid src="./media/home/right-arrow.svg" alt=" "/></Col>
                {props.topbar ? <Col style={{height:"50px"}}></Col> : null}
            </Row>
            <div style={{height:"50px"}}></div>
            
        </div>
    );

}

export default HomeProject;
