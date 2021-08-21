import React from 'react';

import '../index.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel'

import { StickyContainer, Sticky } from 'react-sticky';
import ProjectHeader from "../page-elements/ProjectHeader";
import YoutubePlayer from '../page-elements/YoutubePlayer';
import ImageCarousel from '../page-elements/ImageCarousel';
import NextProject from '../page-elements/NextProject';

function IdeasLab(props) {

    var slug = "ilab";
    var desc = "Ideas Lab is a new student-led makerspace at Imperial College London, Dyson School of Design Engineering. I worked in a team of full-stack developers to create the smart IoT system managing the space."

    var collaborators = {
        "Hassaan-Ul Huda": "https://hhuda.com/",
        "Colin Laganier": "https://www.linkedin.com/in/colinlaganier/",
        "Michael Hofmann": "https://www.linkedin.com/in/michaellhofmann/",
    }

    var skills = {
        "React": "#frontend",
        "Node": "#backend",
        "Express": "#backend",
        "JS": "#full-stack",
        "MongoDB": "#database",
        "MQTT": "#mqtt",
        "Rest API": "#hcd",
        "UI/UX Design": "#frontend",
        "System Design": "#dev",
        "Full-Stack Software": "#full-stack",
        "3D printing": "#",
        "ESP-32": "#esp32",
        
    }

    return (
        <div>
            {props.topbar ? <div className="topbar-spacer"></div> : null}
            <ProjectHeader
                title="Ideas Lab"
                slug={slug}
                desc={desc}
                collaborators={collaborators}
                completed="July-Sep 2020, Summer Placement"
                skills={skills}
            />
            <div className="mb30">
                <YoutubePlayer youtubeId="dr2ubYUPZyc" />
            </div>

            <Row className="project-row" id="hcd">
                <Col xs={12} md={6} className="project-col">
                    <h1 className="mta">Student Led Makerspace</h1>
                    <div className="mb10 jt">100% student society led, the Ideas Lab is located in the heart of the South Kensington Imperial campus. The space includes <strong>3D printing, laser cutting, CNCs and prototype electronics</strong>. The 6-figure project, partly <strong>sponsored by Autodesk</strong>, was opened for the 2020 academic year (with COVID friendly adaptations).</div>
                    <div className="mba jt">The system was presented at the University of Sheffield <a href="https://unimaker.iforgesheffield.org/">‘UNIMAKER’ Academic Makerspace Conference 2020</a> and will be available shortly, open-source, for other makerspaces to utilise.</div>


                </Col>
                <Col xs={12} md={6} className="project-col" style={{ textAlign: "center" }}>
                    <Image fluid src={`./media/${slug}/image1.jpg`} alt=" " />
                </Col>
            </Row>
            <Row className="project-row" id="hcd">
                <Col xs={12} md={6} className="project-col" style={{ textAlign: "center" }}>
                    <Image fluid src={`./media/${slug}/image2.jpg`} alt=" " />
                </Col>
                <Col xs={12, { order: 'first' }} md={6, { order: 'last' }} className="project-col">
                    <h1 className="mta">IoT Enabled</h1>
                    <div className="mb10 jt">We've built the space with IoT systems providing:</div>
                    <div className="mba" style={{ marginLeft: "30px" }}>
                        <div className="mb10 jt">> Permission based power control.</div>
                        <div className="mb10 jt">> Lab credits for material payment.</div>
                        <div className="mb10 jt">> Octoprint print farm control, via a Web App / iPad.</div>
                        <div className="mb10 jt">> Advanced printers API intergration.</div>
                        <div className="mb10 jt">> Admin's user / space management.</div>
                        <div className="mb10 jt">> Remote space monitoring dashboard.</div>
                        <div className="mb10 jt">> COVID friendly booking system and sign in/out.</div>
                    </div>
                </Col>
            </Row>
            <h1 className="" id="develop">Key Features</h1>
            <Row className="project-row">
                <Col xs={12} md={6} className="project-col" id="ideation">
                    <h2>Controlling Print Farm</h2>
                    <div className="mb20 jt">15x Prusa printers, each connected to an <strong>OctoPi flashed Raspberry Pi</strong> can be controlled by the Web App. Users<strong> email their sliced .gcode</strong> files to the lab then can select the printer and start the print. Their <strong>lab credit</strong> is debited and they <strong>receive emails</strong> reminding them to collect the print or if their print fails - for which a credit refund as a percentage of time completed is issued. </div>
                    <ImageCarousel slug={slug} interval={14000} numImages={2} gallerySlug="gallery1" video={[1,]} />
                </Col>
                <Col xs={12} md={6} className="project-col" id="test" id="flow-chart">
                    <h2>Permission Based Power</h2>
                    <div className="mb20 jt">For machines such as the Laser Cutter or CNC, there is a specific induction. Once the user has completed training they have permission and can <strong>scan their card</strong> by the machine. The <strong>tasmota smart plug</strong> paired with that scanner then turns on and the user is added to the logs. If a user doesn't have permission or isn't signed into the space they will be <strong>unable to turn it on</strong>.</div>
                    <Image className="project-image4" fluid src={`./media/${slug}/image3.jpg`} alt=" " />
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} md={6} className="project-col" id="sign-in">
                    <h2 className="">Sign-in / out & booking</h2>
                    <div className="mb20 jt">Partcularily with <strong>COVID-19</strong>, its users must sign-in to the lab. If the lab is <strong>closed or at full occupancy</strong>, users are prevented from signing in. A <strong>Calendly booking screen</strong> is provided to create a soft booking for the next half hour slot. When a student expert opens or closes the space, they change the <strong>'lab mode'</strong>, controlling access to equipment and turning off all but overnight printers.</div>
                    <Image className="project-image4" fluid src={`./media/${slug}/image4.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={6} className="project-col" id="test" id="perm-power">
                    <h2 className="">Material Shop and Lab Credit</h2>
                    <div className="mb20 jt">Users buy Ideas Lab credit through an iPad and <strong>Square contactless card reader</strong>, or can have it added by a group leader as part of a project. Credit can <strong>pay for prints</strong> or be used to <strong>buy materials</strong> from the space's store. Users are <strong>emailed reciepts</strong> for all purchases - needed for reclaiming project budgets. A log of every transaction is kept for reference and can be exported to .csv.</div>
                    <ImageCarousel slug={slug} interval={14000} numImages={2} gallerySlug="gallery2" video={[1, 2]} />
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} md={6} className="project-col" id="sign-in">
                    <h2>API Printer Integration</h2>
                    <div className="mb20 jt">Printers such as the Raise3D and Formlabs don't have the same Octoprint integration. A user <strong>enters the details</strong> of their job manually, and once debited credit, is able to turn on the printer. An <strong>asynchonous polling loop</strong> runs on the Node server checking their <strong>apis for updates</strong>. This allows information to be fed into email reminders and the dashboard.  </div>
                    <div className="mta project-video1-cont">
                        <video className="project-video1" autoPlay loop muted playsInline src={`./media/${slug}/advance_print.mp4`} type="video/mp4" ></video>
                    </div>
                </Col>
                <Col xs={12} md={6} className="project-col" id="test" id="admin">
                    <h2>Administration Panels</h2>
                    <div className="mb20 jt">The space is <strong>led by 'student experts'</strong> who will manage member training, equipment, shop stock and be there to help solve any issues. Each section of the administration panels has filtering, and options such as selecting a group of users to add training or credit - to help <strong>tasks be completed quicker</strong>. Complete <strong>usage and transaction logs</strong> of the entire space are also available here.</div>
                    <ImageCarousel slug={slug} interval={5000} numImages={4} gallerySlug="gallery3" video={[1,]} />
                </Col>
            </Row>
            <h1 className="" id="dev">Technical Development</h1>
            <div className="mb30 jt">
                Colin, Hassaan and myself were <strong>responsible for the full-stack development</strong> of the system. I therefore gained experience of working in an agile software team, using tools such as <strong>Jira, Bitbucket (git) and Zeplin</strong> to assist our workflow and conducting daily stand-ups to keep the partially remote team on track. Throughout the project we documented the system and our process in a Wiki - with the aim of <strong>open-sourcing</strong> the project in the near future.
            </div>
            <Row className="project-row">
                <Col xs={12} md={6} className="project-col" id="test" id="full-stack">
                    <h2 className="">Full-stack Software</h2>
                    <div className="mb20 jt">Before the placement I had never used JavaScript and had limited HTML / CSS knowledge. During the first 2-week sprint I<strong> taught myself</strong>, enough to complete the topup Web App. Having completed the 8-week placement I am now at a competent level in JS, HTML and CSS; and experienced with <strong>React, Express, Node, Rest APIs, MQTT and MongoDB</strong>.</div>
                    <Image className="project-image4" fluid src={`./media/${slug}/image7.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={6} className="project-col" id="frontend">
                    <h2 className="">Front-end UX/UI</h2>
                    <div className="mb20 jt">We used <strong>React JS</strong> to create the front-end of our Web Apps. This suited the <strong>dynamic content</strong> that we were displaying. Zeplin was used to communicate final page designs between the team. React also allowed us to create a <strong>PWA version</strong> of our Web App for the iPads.</div>
                    <Image className="project-image4" fluid src={`./media/${slug}/image8.jpg`} alt=" " />
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} md={6} className="project-col" id="test" id="backend">
                    <h2 className="">Back-end & REST API</h2>
                    <div className="mb20 jt">The Web Apps use an <strong>Express framework for Node.js</strong>, acting as a REST API. Whenever React loads content for a users window, it will make several <strong>POST or GET requests</strong> to the backend server. Express handles these requests triggering JS functions to manipulate the database, contact external APIs, or contact equipment such as the plugs or printers.</div>
                    <Image className="project-image4" fluid src={`./media/${slug}/image9.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={6} className="project-col" id="database">
                    <h2 className="">MongoDB Database</h2>
                    <div className="mb20 jt">A <strong>NoSQL database</strong> was chosen since for collections such as the equipment info, each document had different pieces of data, it was not possible to have a fixed schema. It also provided us <strong>more flexibilty</strong> as the system developed. In some places a relational database would've been useful but the Node.js MongoDB driver handled the extra requests required quick enough. </div>
                    <Image className="project-image4" fluid src={`./media/${slug}/image10.jpg`} alt=" " />
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} md={6} className="project-col" id="test" id="hosting">
                    <h2 className="">Hosting</h2>
                    <div className="mb20 jt">The plugs and printers needed to be contacted locally (within the secured Imperial College network) but the Square payment API needed an ssl certificate. Our solution to this was to <strong>split the Web App</strong> in two. The part handling local requests is hosted on our own <strong>subnet</strong> in the space, on a <strong>Raspberry Pi 4 8gb</strong>. The part requiring SSL, handling payments, is <strong>hosted remotely on heroku</strong>. The RPi uses PM2 and we set up a git remote to it via ssh for launching new versions. The MongoDB is hosted on AWS and accessed by both</div>
                    <Image className="project-image4" fluid src={`./media/${slug}/image6.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={6} className="project-col" id="esp32">
                    <h2 className="">ESP-32 Card Scanners</h2>
                    <div className="mb20 jt">I developed the circuit and code for an ESP-32 based card scanner that: read the first section of data from a <strong>College ID card</strong>; reordered the hex bytes to match our USB readers output; connected to the local wifi; POST requested the server with the decoded <strong>10 digit card ID</strong>; and provided a <strong>buzzer/LED notification</strong> based on the response. The scanners were housed in a 3D printed casing and were designed to be low cost since we needed several (~£12 each).</div>
                    <ImageCarousel slug={slug} numImages={4} gallerySlug="gallery4" />
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} md={6} className="project-col" id="test" id="mqtt">
                    <h2 className="">MQTT and Tasmota Smart-Plugs</h2>
                    <div className="mb20 jt">Smart-plugs were flashed with <strong>Tasmota</strong> allowing reprogramming and MQTT connection. <strong>MQTT reduced the load</strong> on the local server since requests went via the RPi-based broker, and allowed for <strong>group commands</strong> (e.g. turning off all day-plugs). The plugs were reprogrammed so the physical button turns the power off but not on (restricting access). The plugs were programmed to publish every 2 minutes to an MQTT 'connected' topic, which the server subscribes to - to determine if the plugs are online.</div>
                    <div className="mta project-video1-cont">
                        <video className="project-video1" autoPlay loop muted playsInline src={`./media/${slug}/plug_off.mp4`} type="video/mp4" ></video>
                    </div>
                </Col>
                <Col xs={12} md={6} className="project-col" id="security">
                    <h2 className="">Security and Authentication</h2>
                    <div className="mb20 jt">One benefit of hosting most of the Web App locally, and therefore it only being accessible inside the Imperial network (possible via College VPN), is security. Currently users login to the system with their college ID card which is secure enough for our application - but <strong>exposing the control</strong> of the printers, with this login, online would be unsafe. There is future plans to have more remote access and print queueing and for this a system such as the Imperial single sign on would be adopted. Once tapped in a <strong>JSWT</strong> is created and stored in local storage. This is used to continually <strong>authenticate the user via middleware</strong> when sensistive HTTP-requests are called.</div>
                    <Image className="project-image4" fluid src={`./media/${slug}/image11.jpg`} alt=" " />
                </Col>
            </Row>
            <NextProject name="Artops" url="/artops" />
            

        </div>
    );

}

export default IdeasLab;