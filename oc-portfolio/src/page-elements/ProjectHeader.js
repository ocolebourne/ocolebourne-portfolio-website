import React from 'react';

import '../index.css';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


function ProjectHeader(props) {
    const header_image = `./media/${props.slug}/header.jpg`
    const header_video = `./media/${props.slug}/header.mp4`


    // style={{ maxWidth: "60%", minWidth: "200px", marginRight: "10px" }}

    return (
        <div className="project-header">
            <div className="project-header-image">
                <Image fluid src={header_image} alt=" " />
            </div>
            
            <h1>{props.title}</h1>
            
            <Row >
                <Col xs={12} sm={8} className="project-header-col">
                    <h2>Description:</h2>
                    <div>{props.desc}</div>
                </Col>
                <Col xs={12} sm={4} className="project-header-col">
                    <h2>Collaborators: </h2>
                    <div className="project-collaborators">{Object.keys(props.collaborators).map((item, index) => (<a className="project-collaborator" href={props.collaborators[item]}>{item}{index<(Object.keys(props.collaborators).length-1) && (",")} </a>))}</div>
                </Col>
            </Row>
            <Row >
                <Col xs={12} sm={8} className="project-header-col">
                    <h2 style={{marginBottom:"-2px"}}>Skills Explored:</h2>
                    <div className="project-tags">
                        {Object.keys(props.skills).map((skill) => (
                            <button onClick={() => window.location.href = props.skills[skill]} className="project-tag">{skill}</button>
                        ))}
                    </div>
                </Col>
                <Col xs={12} sm={4} className="project-header-col">
                    <h2>Completed: </h2>
                    <div>{props.completed}</div>
                </Col>
            </Row>


            <div style={{ height: "20px" }}></div>

        </div>
    );

}

export default ProjectHeader;
