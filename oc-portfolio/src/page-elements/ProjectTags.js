import React from 'react';

import '../index.css';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


function ProjectTags(props) {
    const header_image = `./media/${props.slug}/header.jpg`
    const header_video = `./media/${props.slug}/header.mp4`

 
    var skills = {
        "Electronics" : "#electronics",
        "Software" : "#electronics",
        "Design" : "#electronics",
        "UI Design" : "#electronics",
        "CAD" : "#electronics",
    }


    return (
        <div>
            <div>Skills Explored:</div>
            <div className="project-tags">
                {Object.keys(skills).map((skill)=>(
                    <button onClick={()=> window.location.href=skills[skill]} className="project-tag">{skill}</button>
                ))}
            </div>

        </div>
    );

}

export default ProjectTags;
