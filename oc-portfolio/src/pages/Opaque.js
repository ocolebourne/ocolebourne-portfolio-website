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

function Opaque(props) {
    var slug = "opaque";
    var [rMore1, setRMore1] = useState(false);
    var [rMore2, setRMore2] = useState(false);
    var [rMore3, setRMore3] = useState(false);

    var collaborators = {
        "Alex Gibson": "https://alexandercgibson.com/",
        "Ted Kane": "https://tedkane.design/",
        "Patrick D. McGuckian": "https://www.pdmcguckian.com",
        "Jack Polturak": "https://jackpolturak.com/",
    };

    var skills = {
        "System Design": "#sys",
        "HCD": "#HCD",
        "Product Development": "#product"
    };

    return (
        <div>
            {props.topbar ? <div className="topbar-spacer"></div> : null}
            <ProjectHeader
                title="Opaque"
                slug="opaque"
                desc="A system added to a 2040 smart home allows it's inhabitants to understand, control and minimise their intrusive data collection."
                collaborators={collaborators}
                completed="Oct 2020 - April 2021, 3rd Year Futures"
                skills={skills}
            />
            <div className="mb50">
                <YoutubePlayer youtubeId="SHrgTPzX9E0" />
            </div>
            <Row className="project-row" id="">
                <Col xs={12} md={12} className="project-col">
                    <h1 className="mta">Do we ever have true privacy?</h1>
                    <div className="mb10 jt">
                        Already we live with devices and services that extensively monitor us while we use them so reliantly. Big tech uses
                        the data to keep us hooked and target adverts. By 2040, it's likely that our lives will involve many more of these
                        "smart" devices - in public, at work and in our homes - providing incredible utility, while continually monitoring
                        us. Of these places the home is the last that we have complete control over, and so the last opportunity to create a
                        safe-space from data collection.
                    </div>
                </Col>
            </Row>

            <Row className="project-row" id="">
                <Col xs={12} md={6} className="project-col">
                    <h1 className="mta">Introducing Opaque</h1>
                    <div className="mba jt">
                        Opaque is a mesh network within the home, formed by a set of wall mounted dials, through which all your personal and
                        smart home devices connect to the outside world. The system aims to help users freely use the devices of 2040, but
                        while minimising, understanding and also having the option to control, individually for each room, what data is
                        leaked/collected about them. Emphasis was placed on making the system intuitive and simply functional for any kind
                        of user.
                    </div>
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <Image className="project-image3" fluid src={`./media/${slug}/image1.jpg`} alt=" " />
                </Col>
            </Row>

            <Row className="project-row" id="">
                <Col xs={12} md={4} className="project-col">
                    <Image className="project-image5" fluid src={`./media/${slug}/image2.jpg`} alt=" " />
                    <div className="mba jt">
                        Opaque processes requests locally where possible (e.g. turning lights on/off) and applies cutting edge Privacy
                        Enhancing Technologies (PETs) to reduce the invasiveness of anything that must leave the home.
                    </div>
                </Col>
                <Col xs={12} md={4} className="project-col">
                    <Image className="project-image5" fluid src={`./media/${slug}/image3.jpg`} alt=" " />
                    <div className="mba jt">
                        Opaque helps users understand how much of each category of data is leaked with an intuitive visualisation displayed
                        on the homescreen. A more in-depth breakdown of trends is accessed by tapping.
                    </div>
                </Col>
                <Col xs={12} md={4} className="project-col">
                    <Image className="project-image5" fluid src={`./media/${slug}/image4.jpg`} alt=" " />
                    <div className="mba jt">
                        Opaque allows users to select from customisable privacy modes which prevent certain categories of data leaving the
                        home. The regional mesh network formed by the dials means a mode can be set for each room individually.
                    </div>
                </Col>
            </Row>

            <Row className="project-row" id="HCD">
                <Col xs={12} md={6} className="project-col">
                    <h1 className="mta">Discretising Privacy</h1>
                    <div className="mba">
                        'Data leakage' is a complicated topic and so great emphasis was placed on integrating heuristics (mental shortcuts),
                        to make the system intuitive for an average user. Data was split into categories and the categories were grouped
                        into 5 out of the box privacy modes, designed to suit a variety of common scenarios.
                    </div>
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <ImageCarousel slug={slug} numImages={2} gallerySlug="gallery1" video={[1]} interval={10000} />
                </Col>
            </Row>
            <Row className="project-row" id="product">
                <Col xs={{ span: 12, order: "first" }} md={{ span: 6, order: "first" }} className="project-col">
                    <h1 className="mta">Identifying data</h1>
                    <div className="mba">
                        It was important that our system could work for any device, no matter if the manufacturer wanted it to or not.
                        Following a literature review of current technologies, Patrick and I designed a system utilising <b>deep packet inspection</b> to
                        classify the category of each piece of data leaving the home. In order to make our system completely private by design we wanted to
                        omit any learning from a users devices/data, therefore any 'fingerprinting' for devices would come from our own
                        research labs.
                    </div>
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <Image className="project-image3" fluid src={`./media/${slug}/image5.jpg`} alt=" " />
                </Col>
            </Row>

            <Row className="project-row" id="">
                <Col xs={12} md={6} className="project-col">
                    <h1 className="mta">Turn down data leakage</h1>
                    <div className="mba">
                        Turning the wall mounted opaque dial cycles through the different privacy modes. On its display the bubbles were
                        chosen to help a user visualise and clearly understand how much of each data type is being leaked. The number is a
                        weighted representation of the volume of data leaving at any time, and is shown alongside the bubbles passively on
                        the display at all times. The dial also integrates a microphone and speaker for the local VUI.
                    </div>
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <Image className="project-image3" fluid src={`./media/${slug}/image6.jpg`} alt=" " />
                </Col>
            </Row>

            <h1 className="mta">Opaque privacy system</h1>
            <Row className="project-row" id="sys">
                <Col xs={12} md={4} className="project-col">
                    <h2 className="mta">Local processing</h2>
                    <div className="mba">
                        A local voice assistant (VUI) and proposed open API for manufacturers to build upon, would allow some requests to be
                        processed locally and privately.
                    </div>
                </Col>
                <Col xs={12} md={4} className="project-col">
                    <h2 className="mta">Anonymous online</h2>
                    <div className="mba">
                        Opaque allows a user to apply a VPN or Onion routing to all traffic leaving the home, helping to insure anonymity.
                    </div>
                </Col>
                <Col xs={12} md={4} className="project-col">
                    <h2 className="mta">EDGY</h2>
                    <div className="mba">
                        Where possible cutting edge PETs will be applied such as{" "}
                        <a href="https://dl.acm.org/doi/10.1145/3477087.3478382" target="_blank">EDGY</a>. This removes emotional data from VUI requests,
                        reducing intrusiveness.
                    </div>
                </Col>
                <Col xs={12} className="project-col nova-image-sidescroll mb30">
                    <Image className="project-image2" src={`./media/${slug}/image7.jpg`} alt="The complete flow diagram for any request passing through the opaque system." />
                </Col>
            </Row>
            <Row className="project-row" id="">
                <Col xs={12} className="project-col">
                    <h1 className="mta">
                        Online demo - <a href="https://opaque.house" target="_blank">opaque.house</a>
                    </h1>
                    <div className="mba">
                        We created an online interactive demo of the opaque system to use for user testing. This helped inform our design
                        and messaging to make the system as intuitive as possible. The demo is still live so please feel free to have a
                        play with it.
                    </div>
                </Col>
                <Col xs={12} className="project-col">
                    <a href="https://opaque.house" target="_blank">
                    <Image className="project-image3" fluid src={`./media/${slug}/image8.jpg`} alt=" " />
                    </a>
                </Col>
            </Row>
            <NextProject name="Nova" url="/nova" />
        </div>
    );
}

export default Opaque;
