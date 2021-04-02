import React from "react";

import "../index.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function NextProject(props) {
    return (
        <div className="next-project">
            <div className="animated fadeIn" xs={8} sm={4}>
                <p className="text-inline">Next: {props.name}</p>
            </div>
            <div className="next-project-button-cont no-gutter">
                <a href={props.url}>
                    <Image
                        className="home-project-button move-right"
                        fluid
                        src="./media/home/right-arrow.svg"
                        alt=" "
                    />
                </a>
            </div>
        </div>
    );
}

export default NextProject;
