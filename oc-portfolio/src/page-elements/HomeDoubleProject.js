import React from "react";

import "../index.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function HomeDoubleProject(props) {
    const image_string1 = `./media/home/${props.slug1}.jpg`;
    const image_string2 = `./media/home/${props.slug2}.jpg`;
    const video_string1 = `./media/home/${props.slug1}.mp4`;
    const video_string2 = `./media/home/${props.slug2}.mp4`;

    const mobile = () => {
        return (
            ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod", "Android"].includes(navigator.platform) ||
            // iPad on iOS 13 detection
            (navigator.userAgent.includes("Mac") && "ontouchend" in document)
        );
    };

    return (
        <div>
            <Row>
                <Col xs={12} sm={6}>
                    {props.video1 ? (
                        <video className="home-video" autoPlay loop muted playsInline src={video_string1} type="video/mp4"></video>
                    ) : (
                        <Image className="home-image" fluid src={image_string1} alt=" " />
                    )}
                    <Row className="home-project-body" style={mobile ? { paddingBottom: "30px" } : {}}>
                        <Col className="animated fadeIn" xs={8} sm={10}>
                            <strong className="text-inline">{props.name1}</strong>
                            <p className="text-inline">{props.desc1}</p>
                        </Col>
                        <Col className="home-project-button-cont no-gutter">
                            <a href={props.url1} target={props.external1 ? "_blank": ""}>
                                <Image className="home-project-button move-right" fluid src="./media/home/right-arrow.svg" alt=" " />
                            </a>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} sm={6}>
                    {props.video2 ? (
                        <video className="home-video" autoPlay loop muted playsInline src={video_string2} type="video/mp4"></video>
                    ) : (
                        <Image className="home-image" fluid src={image_string2} alt=" " />
                    )}
                    <Row className="home-project-body" style={mobile ? { paddingBottom: "30px" } : {}}>
                        <Col className="animated fadeIn" xs={8} sm={10}>
                            <strong className="text-inline">{props.name2}</strong>
                            <p className="text-inline">{props.desc2}</p>
                        </Col>
                        <Col className="home-project-button-cont no-gutter">
                            <a href={props.url2} target={props.external2? "_blank": ""}>
                                <Image className="home-project-button move-right" fluid src="./media/home/right-arrow.svg" alt=" " />
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div style={{ height: "50px" }}></div>
        </div>
    );
}

// {mobile ? <Col xs={12} style={{height:"50px"}}></Col> : null}
export default HomeDoubleProject;
