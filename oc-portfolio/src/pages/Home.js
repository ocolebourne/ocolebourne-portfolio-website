import React from "react";

import "../index.css";

import HomeProject from "../page-elements/HomeProject";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { StickyContainer, Sticky } from "react-sticky";
import HomeDoubleProject from "../page-elements/HomeDoubleProject";

function Home(props) {
    return (
        <div>
            <title>O. Colebourne - Portfolio</title>
            {props.topbar ? <div className="topbar-spacer"></div> : <div className="sidebar-spacer"></div>}
            <div className="home-header">
                Design engineer skilled at development of technical products from problem to fruition. Currently based in London working on
                two ventures, co-founded out of university. This portfolio's source code can be found{" "}
                <a href="https://github.com/ocolebourne/ocolebourne-portfolio-website" target="_blank">
                    here
                </a>{" "}
                - welcome!
            </div>
            <h1>CURRENT</h1>
            <HomeDoubleProject
                slug1="polarise"
                name1="Polarise"
                desc1=" is giving founders IT superpowers."
                url1="https://polarise.dev"
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
            <div className="home-viewmore"></div>
            <div style={{ height: "160px" }} id="about"></div>
            <Row className="project-row">
                <Col xs={5} md={5} lg={3} className="project-col" style={{ textAlign: "center" }}>
                    <Image className="mba about-image" fluid src={`./media/about/profile.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={7} lg={9} className="project-col">
                    <div className="mb10 jt">
                        Hello! I am a design engineer skilled at complete development of technical products from problem to fruition. I
                        recently graduated with a Masters degree (MEng) from Imperial College London, Dyson School of Design Engineering.
                        I'm now in London working on two ventures I co-founded out of university, as CTO for{" "}
                        <a href="https://polarise.dev">Polarise</a> and part-time for <a href="https://team.repair">Team Repair.</a>{" "}
                    </div>
                    <div className="mb30 jt">
                        As well as technology, I also enjoy <a href="https://olliecolebourne.tumblr.com">photography</a>.
                    </div>
                    <div className="mta mb10 jt">Links:</div>
                    <div className="mb30 about-tags">
                        <button onClick={() => (window.location.href = "/Oliver_Colebourne_CV.pdf")} className="about-tag">
                            Link to my CV
                        </button>
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
                    <div className="mta mb10 jt">Contact:</div>
                    <div className="" style={{ marginLeft: "30px" }}>
                        <div className="mb10 jt">
                            Email: <a href="mailto:omcolebourne@gmail.com">omcolebourne@gmail.com</a>
                        </div>
                        <div className="jt">Phone: +447748603168</div>
                    </div>
                </Col>
            </Row>
            <div class="bottom-spacer"></div>
        </div>
    );
}

export default Home;
