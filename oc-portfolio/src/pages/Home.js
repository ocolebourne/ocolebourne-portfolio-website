import React from "react";

import "../index.css";

import HomeProject from "../page-elements/HomeProject";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { StickyContainer, Sticky } from "react-sticky";
import HomeDoubleProject from "../page-elements/HomeDoubleProject";
import Publications from "../page-elements/Publications";

function Home(props) {
    const mobile = () => {
        return (
            ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod", "Android"].includes(navigator.platform) ||
            // iPad on iOS 13 detection
            (navigator.userAgent.includes("Mac") && "ontouchend" in document)
        );
    };
    return (
        <div>
            <title>O. Colebourne - Portfolio</title>
            {props.topbar ? <div className="topbar-spacer"></div> : <div className="sidebar-spacer"></div>}
            <div className="home-header">
                Design engineer, specialised in full-stack software engineering. Skilled at the development of technical products from
                problem to fruition. Currently based in London acting as CTO for two ventures I co-founded out of university. This
                portfolio's source code can be found{" "}
                <a href="https://github.com/ocolebourne/ocolebourne-portfolio-website" target="_blank">
                    here
                </a>{" "}
                - welcome!
            </div>
            <h1>CURRENT</h1>
            <HomeDoubleProject
                slug1="attic"
                name1="Attic"
                desc1=" is making onboarding, managing and revoking employees' SaaS apps a breeze."
                url1="https://useattic.com"
                external1
                slug2="teamrepair"
                name2="Team Repair"
                desc2=" is teaching kids STEM while repairing real electronic gadgets, in order to Fix the Future."
                url2="https://team.repair"
                topbar={props.topbar}
                external2
            />

            <h1>PAST PROJECTS</h1>
            <HomeProject
                slug="opaque"
                name="Opaque"
                desc=" is a system to minimise, understand and control your 2040 home's data leakage."
                url="/opaque"
                topbar={props.topbar}
                video1
            />
            <HomeProject
                slug="nova"
                name="Nova"
                desc=" is a bot, coded through a web-app that makes Python programming engaging for 10-14 year olds through physical input and output."
                url="/nova"
                topbar={props.topbar}
            />
            <HomeProject
                slug="foto"
                name="Foto"
                desc=" is a platform for simplified sharing of moments, with elderly relatives."
                url="/foto"
                topbar={props.topbar}
            />
            <HomeProject
                slug="ilab"
                name="Ideas Lab"
                desc=" is a new smart IoT enabled makerspace at Imperial College London, sponsored by Autodesk - 2020 placement: full stack developer."
                url="/ideaslab"
                topbar={props.topbar}
            />
            <HomeProject
                slug="artops"
                name="Artops"
                desc=" is a bot that plays an entire game of blackjack against a user."
                url="/artops"
                topbar={props.topbar}
                video2
            />
            <h1>MEDIA COVERAGE</h1>
            <Publications />

            <div className="home-viewmore"></div>
            <div style={{ height: "160px" }} id="about"></div>
            <Row className="project-row">
                <Col xs={5} md={5} lg={3} className="project-col" style={{ textAlign: "center" }}>
                    <Image className="mba about-image" fluid src={`./media/about/profile.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={7} lg={9} className="project-col">
                    <div className="mb10 jt">
                        Hello! I'm a design engineer skilled at complete development of technical products from problem to fruition. I'm
                        specialised in full-stack software development and have product managed multiple web and mobile projects - including
                        building the Team Repair app for Apple, Android and Amazon Fire{" "}
                        <a href="https://join.team.repair/download" target="_blank">
                            app stores
                        </a>
                        . In 2022, I graduated from Imperial College London with a Masters degree (MEng) in Design Engineering, then
                        co-founded two ventures which I'm working on now as CTO -{" "}
                        <a href="https://useattic.com" target="_blank">
                            Attic
                        </a>{" "}
                        and{" "}
                        <a href="https://team.repair" target="_blank">
                            Team Repair.
                        </a>{" "}
                    </div>
                    <div className="mb30 jt">
                        As well as technology, I also enjoy <a href="https://olliecolebourne.tumblr.com">photography</a>.
                    </div>
                    <h2 className="mta mb10 jt">Links:</h2>
                    <div className="mb30 about-tags">
                        {/* <button onClick={() => (window.location.href = "/Oliver_Colebourne_CV.pdf")} className="about-tag">
                            Link to my CV
                        </button> */}
                        <button
                            onClick={() => (window.location.href = "https://www.linkedin.com/in/olivercolebourne/")}
                            className="about-tag"
                        >
                            LinkedIn
                        </button>
                        <button onClick={() => (window.location.href = "https://github.com/ocolebourne/")} className="about-tag">
                            Github
                        </button>
                    </div>
                    <h2 className="mta mb10 jt">Contact:</h2>
                    <div className="">
                        <div className="fr">
                            {/* <svg
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
                            </svg> */}
                            <div className="jt">
                                Email: <a href="mailto:omcolebourne@gmail.com">omcolebourne@gmail.com</a>
                            </div>
                        </div>
                        <div className="fr">
                            {/* <svg
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
                            </svg> */}
                            <div className="jt">Phone: +447748603168</div>
                        </div>
                    </div>
                </Col>
            </Row>
            <div class="bottom-spacer"></div>
        </div>
    );
}

export default Home;
