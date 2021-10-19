import React from "react";
import { useState } from "react";

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

function Nova(props) {
    var slug = "nova";
    var [rMore1, setRMore1] = useState(false);
    var [rMore2, setRMore2] = useState(false);
    var [rMore3, setRMore3] = useState(false);

    var collaborators = {
        "Patrick McGuckian": "https://www.pdmcguckian.com",
        "Noor Ali": "https://www.nooralidesigns.com/",
        "Emily Tang": "https://uk.linkedin.com/in/emily-tang59",
    };

    var skills = {
        Electronics: "#electronics",
        DFM: "#dfm",
        DFA: "#dfa",
        HCD: "#hcd",
        "UI/UX design": "#ui",
        "Full-stack software": "#ui",
        CAD: "#renders",
        "System design": "#webapp",
    };

    return (
        <div>
            {props.topbar ? <div className="topbar-spacer"></div> : null}
            <ProjectHeader
                title="Nova"
                slug="nova"
                desc="A bot, coded through a web app, that makes Python programming engaging for kids - by providing physical inputs and outputs."
                collaborators={collaborators}
                completed="Jan-July 2020, 2nd Year Engineering Design Project"
                skills={skills}
            />
            <div className="mb50">
                <YoutubePlayer youtubeId="fDbf7welIbs" />
            </div>

            <Row className="project-row" id="hcd">
                <Col xs={12} md={6} className="project-col">
                    <h1 className="mta">How can we engage children with code?</h1>
                    <div className="mb10 jt">
                        We found that children try to learn to code but often give up due to a lack of engagement. Many young adults we
                        spoke to regret this.
                    </div>
                    <div className="mba">
                        {rMore1 ? (
                            <div className="read-more-text mba">
                                <div className="mb10 jt">
                                    Through focus groups and interviews with experts and families in our target market, we learnt: how we
                                    can make programming engaging; and how we can make a product that's desirable for the parents buying it.
                                </div>
                                <div className="mba jt">
                                    We also found toy robots currently available provide limited functions and only teach block based
                                    programming, while the step up, microcontrollers, have too steeper learning curve. Both quickly loose a
                                    child's interest.
                                </div>
                            </div>
                        ) : (
                            <a
                                href="#hcd"
                                className="read-more"
                                onClick={() => {
                                    setRMore1(true);
                                }}
                            >
                                Read more...
                            </a>
                        )}
                    </div>
                </Col>
                <Col xs={12} md={6} className="project-col" style={{ textAlign: "center" }}>
                    <ImageCarousel slug={slug} numImages={3} gallerySlug="gallery1" />
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} md={6} className="project-col" style={{ textAlign: "center" }}>
                    <Image fluid src={`./media/${slug}/image2.jpg`} alt=" " />
                </Col>
                <Col xs={{ span: 12, order: "first" }} md={{ span: 6, order: "last" }} className="project-col">
                    <h1 className="mta">Providing a physical output.</h1>
                    <div className="mb10 jt">
                        Python programming is taught through video tutorials and step-based learning on the Nova web app - accessed from any
                        internet browser. Once more comfortable with the device's functions, personal projects allow kids to reinforce what
                        they've learnt.
                    </div>
                    <div className="mba jt">Nova features USB-C charging, 8 hours battery life and it fits in the hand (110x68x68mm).</div>
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} md={6} className="project-col">
                    <h1 className="mta">Teaching real programming</h1>
                    <div className="mb10 jt">
                        Python programming is taught through video tutorials and step-based learning on the Nova web app - accessed from any
                        internet browser. Once more comfortable with the device's functions, personal projects allow kids to reinforce what
                        they've learnt.
                    </div>
                    <div className="mba jt">Nova features USB-C charging, 8 hours battery life and it fits in the hand (110x68x68mm).</div>
                </Col>
                <Col xs={12} md={6} className="project-col" style={{ textAlign: "center" }}>
                    <Image fluid src={`./media/${slug}/image3.jpg`} alt=" " />
                </Col>
            </Row>
            <h1 className="" id="develop">
                Technical development and functional prototype
            </h1>
            <div className="mb30 jt">
                This University module focussed on the physical development of a handheld battery-powered product, from compliance to DFMA.
                We also chose to develop the software for Nova. Due to the COVID-19 pandemic, the physical prototyping aspect of the module
                was cancelled and would not be graded. However, Patrick McGuckian and I continued to build a fully functioning prototype
                from home.
            </div>
            <video
                className="project-video2 mb50"
                autoPlay
                loop
                muted
                playsInline
                src={`./media/${slug}/video2.mp4`}
                type="video/mp4"
            ></video>
            <Row className="project-row">
                <Col xs={12} className="project-col" id="electronics">
                    <h2 className="">Electronics</h2>
                    <div className="mb10 jt">
                        Nova needed Wifi to pull users code; enough GPIO; and to be compact enough to fit in a hand - therefore a Raspberry
                        Pi 3A+ was chosen. Summing the components power draw we calculated a 2400mAh battery could provide 8-hours battery
                        life under normal use. We validated this in our complete breadboard test.
                    </div>
                    <div className="mba jt">
                        To provide the desired functions we packaged motors & driver, camera, microphone, speaker & amplifier, RGB LEDs, a
                        2400mAh battery and a USB-C charging circuit. We designed a 2-layer PCB that acted as a shield for the Raspberry Pi.
                        We built the prototype of this on matrix board.
                    </div>
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <Image className="project-image1" fluid src={`./media/${slug}/image6.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <ImageCarousel slug={slug} numImages={4} gallerySlug="gallery3" />
                </Col>
                <Col xs={12} className="project-col">
                    <video
                        className="project-video2"
                        autoPlay
                        loop
                        muted
                        playsInline
                        src={`./media/${slug}/video1.mp4`}
                        type="video/mp4"
                    ></video>
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} className="project-col" id="ui">
                    <h2 className="">
                        Device UI / OS - <a href="https://github.com/ocolebourne/EDP-Robot-OS" target="_blank">GitHub</a>
                    </h2>
                    <div className="mb10 jt">
                        A neumorphic design style was chosen to appeal to kids wanting "mature" devices. Great care was taken to make sure
                        the functionality was simple and implicit, able to be picked up and just used.
                    </div>
                    <div className="mb10 jt">For the prototype I built a PyQt5 frontend with a Python backend for the robot's OS.</div>
                    <div className="mba jt">
                        {rMore2 ? (
                            <div className="read-more-text mba">
                                The user's code is pulled from the MySQL database and saved to a .py file. Python's subprocess module is
                                used to execute the user's code, which allowed me to bind a GPIO pin physical button to killing the process
                                - needed to prevent endless loops. We created modules for beginner friendly interaction with the Pi's pins -
                                eg. a user can call Drive.forward(10) instead of having to control PWM timers and GPIO directly.
                            </div>
                        ) : (
                            <a
                                href="#ui"
                                className="read-more"
                                onClick={() => {
                                    setRMore2(true);
                                }}
                            >
                                Read more...
                            </a>
                        )}
                    </div>
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <ImageCarousel slug={slug} numImages={3} gallerySlug="gallery2" />
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <Image className="project-image1" fluid src={`./media/${slug}/image7.jpg`} alt=" " />
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} md={6} className="project-col" id="dfm">
                    <h2>Design for manufacture</h2>
                    <div className=" jt">
                        Plastic parts were designed for injection moulding, with the majority designed for two part moulds. Bosses and
                        ribbing were applied internally to maintain a constant wall thickness.
                    </div>
                </Col>
                <Col xs={12} md={6} className="project-col" id="dfm">
                    <ImageCarousel slug={slug} numImages={4} video={[1]} gallerySlug="gallery4" />
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} md={6} className="project-col" id="test" id="dfa">
                    <ImageCarousel slug={slug} numImages={3} gallerySlug="gallery5" />
                </Col>
                <Col xs={{ span: 12, order: "first" }} md={{ span: 6, order: "last" }} className="project-col" id="test" id="dfa">
                    <h2>Design for assembly</h2>
                    <div className=" jt">
                        Where possible, features were designed with the aim of reducing assembly time - utilising snap-fits, self-locating
                        features, JST connectors and having most parts assemble from one direction.
                    </div>
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} className="project-col">
                    3D printing allowed us to iterate our design, testing functionality, assemblability and component fit.
                </Col>
                <Col xs={12} className="project-col">
                    <Image className="project-image3" fluid src={`./media/${slug}/image14.jpg`} alt=" " />
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} className="project-col" id="webapp">
                    <h2 className="">
                        Web app platform - <a href="https://github.com/pdmcguckian/EDP-Web-app" target="_blank">GitHub</a>,{" "}
                        <a href="https://nova-webapp.herokuapp.com/" target="_blank">Demo Site</a>
                    </h2>
                    <div className="mb10 jt">
                        For the tutorial and coding platform, a web app suited the variety of devices that kids might own. Like with the
                        device's UI this was designed to be simple to use. A full featured code editor was at the heart of the site, along
                        with fun
                        <a href="#tutorial-video"> tutorial videos</a>.
                    </div>
                    <div className="mba jt">
                        Patrick and myself self-taught Django and built the site and MySQL database in 2 weeks. The user's code for personal
                        projects and their tutorial 'answers' are stored as strings. The tutorials are also all stored in tables so they can
                        be easily added.
                    </div>
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <Image className="project-image1" fluid src={`./media/${slug}/image8.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <ImageCarousel slug={slug} numImages={3} gallerySlug="gallery6" />
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} className="project-col nova-image-sidescroll mb30" id="renders">
                    <h1 className="mta">Final Renders</h1>
                </Col>
                <Col xs={12} className="project-col nova-image-sidescroll mb30">
                    <Image className="project-image2" src={`./media/${slug}/image5.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <Image className="project-image1" fluid src={`./media/${slug}/image1.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <Image className="project-image1" fluid src={`./media/${slug}/image4.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <Image className="project-image1" fluid src={`./media/${slug}/image11.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <Image className="project-image1" fluid src={`./media/${slug}/image12.jpg`} alt=" " />
                </Col>
            </Row>
            <NextProject name="Foto" url="/foto" />
        </div>
    );
}

export default Nova;
