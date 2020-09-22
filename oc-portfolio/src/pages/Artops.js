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

function Artops(props) {

    var slug = "artops";
    var desc = "Robot that plays an entire game of blackjack against a user - shuffling & dealing cards, reading their values, and deciding to hit or stick while communicating with the user."

    var collaborators = {
        "Patrick McGuckian": "https://www.pdmcguckian.com",
    }

    var skills = {
        "Raspberry Pi": "#electronics",
        "Arduino": "#dfm",
        "C": "#dfa",
        "Python": "#webapp",
        "CAD": "#hcd",
        "UI/UX Design": "#ui",
        "Full-Stack Software": "#ui",
        "3D printing": "#renders",
    }

    return (
        <div>
            {props.topbar ? <div className="topbar-spacer"></div> : null}
            <ProjectHeader
                title="ARTOPS"
                slug={slug}
                desc={desc}
                collaborators={collaborators}
                completed="Oct-Dec 2019, 2nd Year Gizmo Project"
                skills={skills}
            />
            <div className="mb30">
                <YoutubePlayer youtubeId="PjoidWLsp_A" />
            </div>

            <Row className="project-row" id="hcd">
                <Col xs={12} md={6} className="project-col" style={{ textAlign: "center" }}>
                    <Image fluid src={`./media/${slug}/image1.jpg`} alt=" " />
                </Col>
                <Col xs={12, { order: 'first' }} md={6, { order: 'last' }} className="project-col">
                    <h1 className="mta">Interactive Gizmo Curio</h1>
                    <div className="mb10 jt">We were tasked to create a machine, using machine elements, sensors, actuators and code, that performed an <strong>iterative physical interaction with a user</strong>. The machine did not need to fulfil any real world purpose.</div>
                    <div className="mba jt">My partner and I had experience of Arduino and basic mechantronics so pushed ourselves to explore and integrate <strong>computer vision, a touchscreen user interface and a Raspberry Pi</strong> into the project. <strong>We created the robot over a period of 10 weeks.</strong></div>

                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} md={6} className="project-col">
                    <h1 className="mta">ARTOPS - A Robotic Twenty One Playing System</h1>
                    <div className="mb10 jt">Twenty-one or Blackjack is a card game in which players are first dealt two cards. They then can either 'hit' taking more cards or 'stick' with the cards they have - but if their cards add up to a value over 21 they go 'bust'. The player with a final total closest to 21, wins.</div>
                    <div className="mba jt">Our robot aimed to <strong>play a full game of blackjack with a user, using standard playing cards</strong>. This involved shuffling the pack, dealing the user and itself two cards, handling the hit or stick action, and keeping track of all the cards to decide its own action and to display the score and result.</div>
                </Col>
                <Col xs={12} md={6} className="project-col" style={{ textAlign: "center" }}>
                    <div className="project-video1-cont">
                        <video className="project-video1" autoPlay loop muted playsInline src={`./media/${slug}/artops-square.mp4`} type="video/mp4" ></video>
                    </div>
                </Col>
            </Row>
            <div className="nova-image-sidescroll mb50">
                <Image className="project-image2" src={`./media/${slug}/image2.png`} alt=" " />
            </div>
            <h1 className="" id="develop">Technical Development</h1>
            <Row className="project-row">
                <Col xs={12} md={6} className="project-col" id="ideation">
                    <h2 className="mta">Ideation</h2>
                    <div className="mb20 jt">The robot was split into distinct sections - the shuffler, the dealer, the card platform / CV area, and the display. We first <strong>sketch ideated</strong> arrangements of the components and initial ideas for how the mechatronics might work.</div>
                    <Image className="project-image4" fluid src={`./media/${slug}/image3.png`} alt=" " />
                </Col>
                <Col xs={12} md={6} className="project-col" id="test" id="flow-chart">
                    <h2 className="mta">System Flow Chart</h2>
                    <div className="mb20 jt">We created a <strong>flow chart of the game end to end</strong>. This highlighted exactly what functionality each part needed. This helped guide me when I was writing the backend software and designing the UI of the robot.</div>
                    <Image className="project-image4" fluid src={`./media/${slug}/image4.png`} alt=" " />
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} className="project-col" id="electronics" >
                    <h2 className="">Shuffler</h2>
                    <div className="mb10 jt">The user first places the pack into the card shuffler. We chose to use two DC motors which <strong>fired cards randomly from the top or bottom of the pack</strong> into the dealer.</div>
                    <div className="mb10 jt">The initial versions had issues with ejecting the entire pack (too much weight from top and not enough angle), and with cards falling out of the front (not enough lip). <strong>Several iterations were made adjusting the angle of the pack and position of the driving wheels</strong>.</div>
                    <div className="mba jt">Several versions of code were made, adjusting how long the wheels spun and how much <strong>retraction</strong> they had so that the whole pack didn't gradually get ejected.</div>
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <ImageCarousel slug={slug} numImages={3} gallerySlug="gallery1" />
                </Col>
                <Col xs={12} md={6} className="project-col" >
                    <div className="project-video1-cont">
                        <video className="project-video1" autoPlay loop muted playsInline src={`./media/${slug}/shuffle.mp4`} type="video/mp4" ></video>
                    </div>
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} className="project-col" id="electronics" >
                    <h2 className="">Dealer</h2>
                    <div className="mb10 jt">After shuffling, the dealer moves to the correct position then deals one card at a time. We needed <strong>precise movement</strong> of the dealer so a <strong>stepper motor belt drive</strong> (similar to a 3D printer) was used. The two ends of the belt are connected by a grip om the bottom of the 3D printed dealer - adjustable as to not require a belt tensioner. A <strong>DC motor is used to deal cards</strong>.</div>
                    <div className="mb10 jt">Initial iterations had issues with multiple cards being randomly dealt - fixed by adjusing the position of the drive wheel. Retraction was added in the code to pull the cards back in once dealt.</div>
                    <div className="mba jt">When the robot was first fully assembled some of the cards from the shuffler missed the dealer. We modelled and laser cut a set of <strong>guides for the top of the dealer</strong>, fixing this.</div>
                </Col>
                <Col xs={12} md={6} className="project-col" >
                    <div className="project-video1-cont">
                        <video className="project-video1" autoPlay loop muted playsInline src={`./media/${slug}/belt_drive.mp4`} type="video/mp4" ></video>
                    </div>
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <ImageCarousel slug={slug} numImages={4} gallerySlug="gallery2" />
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} className="project-col" id="ui">
                    <h2 className="">UI and Backend - <a href="https://github.com/ocolebourne/blackjack-robot">GitHub</a></h2>
                    <div className="mb10 jt">ARTOPS runs on a <strong>Raspberry Pi 3B+ with a 3.5inch touchscreen display</strong>. Having started to learn <strong>PyQt5</strong>over summer I created a simple touch UI on top of a Python backened that ran the gameplay. The main script controlled both the UI and triggered the dealer, belt-drive and computer vision through <strong>class-based modules</strong>.</div>
                    <div className="mb10 jt">The belt-drive kept track of its position with class attributes so that it didn't reach either end. Since the RPi 3B+ has only 2 hardware PWM channels, a simple solution to control the stepper and 3 seperate DC motors was to use an Arduino to control two of them. An Adafruit Circuit Express controlled the <strong>shuffling process and was triggered by serial communication</strong>. A returned handshake notified the Pi when shuffling was finished.</div>
                    <div className="mba jt">ARTOPS decides its <strong>move based on the average score of cards left in the pack</strong> (based off only its own cards). Once a game is finished <strong>the winner ( player or robot) is stored in a text file</strong> so a running total can be displayed.</div>
                </Col>
                <Col xs={12} md={6} className="project-col" >
                    <ImageCarousel slug={slug} numImages={3} gallerySlug="gallery3" />
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <div className="project-video1-cont">
                        <video className="project-video1" autoPlay loop muted playsInline src={`./media/${slug}/ui.mp4`} type="video/mp4" ></video>
                    </div>
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} md={6} className="project-col" id="dfm">
                    <h2 className="mta">Electronics</h2>
                    <div className="mb20 jt">I used <strong>prototype PCBs to create the shields</strong> for the Arduino and RPi. 3x TB6612FNG motor drivers were used in total to control the stepper and 3 DC motors. The Nema17 <strong>stepper motor was half stepped</strong> to provide a smooth and accurate motion. Cable sheathing was used to maintain a clean aesthetic.</div>
                    <Image className="project-image1" fluid src={`./media/${slug}/image5.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={6} className="project-col" id="test" id="dfa">
                    <h2 className="mta">Computer Vision / Machine Learning</h2>
                    <div className="mb20 jt">The robot has <strong>two webcams</strong> reading the value of every card dealt, to the player and to itself. <strong>OpenCV</strong> first processes the image of the top card, with a series of cropping and thresholding, down to just the top left rank then interprets it with a Tensorflow Lite model - a <strong>Keras neural network trained with a custom dataset</strong>.</div>
                    <ImageCarousel slug={slug} numImages={3} gallerySlug="gallery4" video={[1,]} />
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} className="project-col" id="webapp">
                    <h2 className="">Final Assembly</h2>
                    <div className="mb10 jt"><strong>A full CAD assembly of components was created, for designing the laser cut acrylic casing</strong>. The shuffler and belt drive 3D printed pieces doubled up a structural components, holding faces of the box together. There was a strict size limit on the Gizmo Curio of XXXX, and so the arrangement of the components was crucial to achieve this. The final design had a clean aesthetic while <strong>exposing as much of the inner workings as possible.</strong></div>
                    <div className="mba jt">For the internal card platform a section made from black acrylic, with a hinged door, <strong>hides the dealers cards from the player</strong> - to prevent cheating. At the end of the game the entire remaining deck is dispensed onto the player side platform - the design of which had to enable easy card removal while ensuring <strong>consistent card alignment for the computer vision system</strong>.</div>
                    <Image className="project-image4" fluid src={`./media/${slug}/image6.png`} alt=" " />
                </Col>
            </Row>

        </div>
    );

}

export default Artops;