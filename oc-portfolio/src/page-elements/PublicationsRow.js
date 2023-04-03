import React from "react";

import "../index.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function PublicationsRow(props) {
    const mobile = () => {
        return (
            ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod", "Android"].includes(navigator.platform) ||
            // iPad on iOS 13 detection
            (navigator.userAgent.includes("Mac") && "ontouchend" in document)
        );
    };

    return (
        <Row style={{ marginBottom: 4 }}>
            {/* <Col className="no-gutter" style={{ paddingLeft: 15, textAlign: "left" }}>
                <Image className="home-project-button" fluid src="./media/home/horizontal-line.svg" alt=" " /> 
            </Col> */}
            <Col className="animated fadeIn" style={{ display: "flex", alignItems: "flex-start" }}>
                <svg
                    version="1.1"
                    style={{ maxWidth: mobile() ? 20 : 32, transform: "translateY(50%)", marginRight: 10 }}
                    id="line_2"
                    x="0px"
                    y="0px"
                    width="100%"
                    height="20"
                    xmlSpace="preserve"
                >
                    <path class="path2" fill="#1d1d1d" stroke-width="3" stroke="#1d1d1d" d="M0 0 l120 0" />
                </svg>
                <div>
                    <strong className="text-inline" style={{ paddingRight: 6 }}>
                        {props.publisher}
                    </strong>
                    <p className="text-inline">
                        <a href={props.url} target="_blank">
                            {props.title}
                        </a>
                    </p>
                </div>
            </Col>
        </Row>
    );
}

export default PublicationsRow;
