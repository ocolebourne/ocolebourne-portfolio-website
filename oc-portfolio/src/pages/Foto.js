import React from "react";
import { Camera, Mic } from "react-bootstrap-icons";

import "../index.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

import { StickyContainer, Sticky } from "react-sticky";
import ProjectHeader from "../page-elements/ProjectHeader";
import YoutubePlayer from "../page-elements/YoutubePlayer";
import ImageCarousel from "../page-elements/ImageCarousel";
import NextProject from "../page-elements/NextProject";

function Foto(props) {
    var slug = "foto";
    var desc =
        "The Foto platform enables the tech illiterate to share in a modern  way. Think Snapchat but with beautiful and accessible physical hardware.";

    var collaborators = {};

    var skills = {
        "Industrial Design": "#",
        "Systems Design": "#",
        "UX Design": "#",
        CMF: "#",
    };

    const header_image = `./media/${slug}/header.jpg`;
    const header_video = `./media/${slug}/header.mp4`;

    // style={{ maxWidth: "60%", minWidth: "200px", marginRight: "10px" }}

    return (
        <div>
            {props.topbar ? <div className="topbar-spacer"></div> : null}
            <ProjectHeader
                title="Foto"
                slug={slug}
                desc={desc}
                collaborators={collaborators}
                completed="Jan-April 2021, 3rd year Advanced Industrial Design "
                skills={skills}
                solo
            />
            <Row className="project-row">
                <Col xs={12} md={6} className="project-col" style={{ textAlign: "center" }}>
                    <Image fluid src={`./media/${slug}/image1.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <h1 className="mta">How might we create a platform for modern sharing, for someone who finds technology daunting?</h1>
                    <div className="mb10 jt">
                        My Nanna, 74, lives alone with her dog Lola. We worry about her feeling disconnected from the family - this is
                        exasperated by COVID-19.
                    </div>
                    <div className="mb10 jt">
                        Nanna wants an easy way to say hi and send us photos. She’d also love a vision of our day to day lives, without
                        intruding on them.
                    </div>
                    <div className="mba jt">
                        But, she's a ‘technophobe’. Using a lot of modern technology, with the many steps and functions, causes her stress
                        and anxiety - so she doesn’t have any.
                    </div>
                </Col>
            </Row>

            <Row className="project-row">
                <Col xs={12} md={4} className="project-col">
                    <h1 className="mta">
                        <b>Foto</b> allows an elderly relative to simply share a moment ( <Camera /> + <Mic /> ).
                    </h1>
                    <h2 className="">Send</h2>
                    <div className="mb30 jt">
                        Moments - photos combined with voice messages - are captured with a single button. Once docked these can be shared
                        with family and close friends.
                    </div>
                    <h2 className="">Receive</h2>
                    <div className="mba jt">
                        Contacts receive moments through the app. When they reply, an orange ring glows around the frame's display, and the
                        moment is viewed through the simple UI. Moments can be saved to a passive slideshow.
                    </div>
                </Col>
                <Col
                    xs={{ span: 12, order: "first" }}
                    md={{ span: 8, order: "last" }}
                    className="project-col"
                    style={{ textAlign: "center" }}
                >
                    <ImageCarousel slug={slug} numImages={3} gallerySlug="gallery1" />
                </Col>
            </Row>
            <h1>Design details</h1>
            <Row className="project-row">
                <Col xs={{ span: 12}} md={{ span: 4 }} className="project-col">
                    <div className="mb10 jt">
                        <sup>1</sup>Oval touchscreen of the frame shows a minimal UI, complimented by a voice assistant. Setup is controlled
                        remotely by family on the app.
                    </div>
                    <div className="mba jt">
                        <sup>2</sup>Calm CMF and simple shapes make foto's camera and frame approachable. Modern, high-quality aesthetic
                        avoids the patronising medical or toy-like look of most elderly specific products.
                    </div>
                </Col>
                <Col xs={{ span: 12 }} md={{ span: 4 }} className="project-col">
                    <div className="mb10 jt">
                        <sup>3</sup>Playful texture of the camera's grip adds friendliness and is used again on top of the frame, unifying
                        the products.
                    </div>
                    <div className="mba jt">
                        <sup>4</sup>Fabric neck strap allows the camera to always be handy, for easy operation.
                    </div>
                </Col>
                <Col xs={{ span: 12 }} md={{ span: 4 }} className="project-col">
                    <div className="mb10 jt">
                        <sup>5</sup>The single button starts capturing a video with audio. The best frame is intelligently selected before
                        sending.
                    </div>
                    <div className="mba jt">
                        <sup>6</sup>The camera docks into the top of the frame, covering the lens for privacy. The neck strap drapes neatly
                        behind. Here moments are downloaded and the camera is charged.
                    </div>
                </Col>
                <Col xs={{span:12, order:'first'}} md={{span:12, order:'last'}} className="project-col" style={{ textAlign: "center" }}>
                    <Image fluid src={`./media/${slug}/image3.jpg`} alt=" " />
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} md={8} className="project-col" style={{ textAlign: "center" }}>
                    <Image fluid src={`./media/${slug}/image4.jpg`} alt=" " />
                </Col>
                <Col xs={{span:12, order:'last'}} md={{span:4, order:'first'}} className="project-col">
                    <div>For the full design process please find <a href={`./media/${slug}/foto_portfolio_ocolebourne.pdf`}>the full pdf portfolio.</a></div>
                </Col>
            </Row>
            <NextProject name="Ideas lab" url="/ideaslab" />
        </div>
    );
}

export default Foto;
