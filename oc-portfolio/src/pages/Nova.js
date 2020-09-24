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

function Nova(props) {

    var slug = "nova";

    var collaborators = {
        "Patrick McGuckian": "https://www.pdmcguckian.com",
        "Noor Ali": "https://www.google.co.uk",
        "Emily Tang": "https://www.google.co.uk",
    }

    var skills = {
        "Electronics": "#electronics",
        "DFM": "#dfm",
        "DFA": "#dfa",
        "HCD": "#hcd",
        "UI/UX Design": "#ui",
        "Full-Stack Software": "#ui",
        "CAD": "#renders",
        "System Design": "#webapp"
    }

    return (
        <div>
            {props.topbar ? <div className="topbar-spacer"></div> : null}
            <ProjectHeader
                title="Nova"
                slug="nova"
                desc="A bot, coded through a web app that makes Python programming engaging for kids through physical input and output."
                collaborators={collaborators}
                completed="Jan-July 2020, 2nd Year Engineering Design Project"
                skills={skills}
            />
            <div className="mb30">
                <YoutubePlayer youtubeId="fDbf7welIbs" />
            </div>

            <Row className="project-row" id="hcd">
                <Col xs={12} md={6} className="project-col">
                    <h1 className="mta">How can we engage children with code?</h1>
                    <div className="mb10 jt">We found that children often try to learn to code, with parents
                    encouraging it, but often give up due to a lack of engagement or interest in what they are
                    programming. Many young adults regret this, as programming is seen as a skill that could help them advance their career.</div>
                    <div className="mba jt">We conducted a focus group with Python tutors; repeatedly interviewed a family
                    in our target market; observed a child using a competing product; spoke with industry experts; and engaged with the students of an under-13s STEM masterclass. From this we learnt how we can make
                    coding engaging and our product desirable for our target age range, and for parents - likely buying the product.</div>
                </Col>
                <Col xs={12} md={6} className="project-col" style={{ textAlign: "center" }}>
                    <ImageCarousel slug={slug} numImages={3} gallerySlug="gallery1" />
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} md={6} className="project-col">
                    <h1 className="mta">Providing a Physical Output.</h1>
                    <div className="mb10 jt"><strong>Coding physical inputs and outputs rather than simply
                    printing to a terminal</strong>. Nova provides a wide range of functionality, validated to be engaging with our target audience and keeping the <strong>scope of projects near enough unlimited</strong>.</div>
                    <div className="mb10 jt">"Toy" robots currently on the market provide limited functions and often only teach block based programming. The step up from these, programmable microcontrollers, have too steeper learning curve. Both loose the interest of all but a few.</div>
                    <div className="mb30 jt">Real world, text based programming is taught through video tutorials and step-based learning on the Nova web app - which can be accessed from any internet browser. Once more comfortable with the device's functions, personal projects allow kids to reinforce what they've learnt.</div>
                    <div className="mb10 jt">Input includes <b>a microphone, a camera, buttons and IR proximity sensors. </b></div>
                    <div className="mb10 jt">Output includes <b>driving motors, a speaker, and a 4inch touchscreen display.</b></div>
                    <div className="mba jt">Nova features <b>USB-C charging and 8 hours battery life while fitting in the hand (110x68x68mm).</b></div>
                </Col>
                <Col xs={12} md={6} className="project-col" style={{ textAlign: "center" }}>
                    <Image fluid src={`./media/${slug}/image3.jpg`} alt=" " />
                </Col>
            </Row>
            <h1 className="" id="develop">Technical Development and Functional Prototype</h1>
            <div className="mb30 jt">The aim for this University module was to learn and practice the technical physical development of a handheld product, from compliance to DFM / DFA. We added onto this a large software element, therefore learning to develop a complete product system. Due to COVID-19 pandemic, the physical prototyping aspect of the module was cancelled and would not be graded. This was very important to us however, and we continued to build and test a fully functioning prototype from home - we were the only group to do this.</div>
            <div className="mb30 jt">We first reverse engineered a Sphero 'Ollie' - a market competitors product - analysing its components, then reassembling the product.</div>
            <div className="nova-image-sidescroll mb50">
                <Image className="project-image2" src={`./media/${slug}/teardown.jpg`} alt=" " />
            </div>
            <Row className="project-row">
                <Col xs={12} className="project-col" id="electronics" >
                    <h2 className="">Electronics Package</h2>
                    <div className="mb10 jt">Based on functionality and performance requirements a specification was made for component selection. We were able to package motors & driver, camera, microphone, speaker & amplifier, RGB LEDs, 2400mAh Battery and a USB-C power circuit.</div>
                    <div className="mb10 jt">Nova needed Wifi to connect to the database and pull users code; enough GPIO to support the components listed above; and to be compact enough to fit in a hand. A Raspberry Pi 3A+ was therefore chosen, with the added
                    advantage of its low power draw. We calculated the device's total power draw to be maximum 0.92A - therfore a 2400mAh battery could provide the target 8-hour battery life, assuming that the device operates at 1/3 its maximum (motors not constantly running etc). A full breadboard test was conducted to prove compatability of all the components and allowed the estimated battery life to be validated. </div>
                    <div className="mba jt">For the functional prototype, the circuit was made on prototype PCB - acting as a shield for the RPi. Designs were also made for a 2-layer PCB (as rendered).</div>
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <Image className="project-image1" fluid src={`./media/${slug}/image6.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={6} className="project-col" >
                    <ImageCarousel slug={slug} numImages={4} gallerySlug="gallery3" />
                </Col>
                <Col xs={12} className="project-col">
                    <video className="project-video2" autoPlay loop muted playsInline src={`./media/${slug}/video1.mp4`} type="video/mp4" ></video>
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} className="project-col" id="ui">
                    <h2 className="">Device UI / Robot OS - <a href="https://github.com/ocolebourne/EDP-Robot-OS">GitHub</a></h2>
                    <div className="mb10 jt">A clean, modern neumorphic design style was chosen to appeal to kids wanting "mature" devices. The UI was developed with stages of wireframing, Adobe Xd and finally functional prototyping. Great care was taken to make sure the functionality was simple and implicit, able to be picked up and just used.</div>
                    <div className="mba jt">For our functional prototype I built upon my knowledge of PyQt5. Using a Python backend for the robot's OS allowed for simple interaction with the MySQL database and interfacing with the Pi's GPIO pins. The user's code is pulled from the database as a
            string then saved to a .py file. Python's subprocess module to is used to execute the user's code, which also allowed a GPIO pin / physical button to be binded to killing the process. Class based modules for using Nova's physical inputs and outputs provide more kid friendly function calls - eg. a user can call Drive.forward(10) instead of having to control PWM timers and GPIO directly.</div>
                </Col>
                <Col xs={12} md={6} className="project-col" >
                    <ImageCarousel slug={slug} numImages={3} gallerySlug="gallery2" />
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <Image className="project-image1" fluid src={`./media/${slug}/image7.jpg`} alt=" " />
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} md={6} className="project-col" id="dfm">
                    <h2>Design for Manufacture</h2>
                    <div className="mb20 jt">All plastic parts were designed for injection moulding, with the moulds for all but one part reduced to two parts. Solidworks was used for draft analysis and plastics simulations, to aid design. Bosses and ribbing were employed internally to maintain a constant wall thickness.</div>
                    <ImageCarousel slug={slug} numImages={4} video={[1,]} gallerySlug="gallery4" />
                </Col>
                <Col xs={12} md={6} className="project-col" id="test" id="dfa">
                    <h2>Design for Assembly</h2>
                    <div className="mb20 jt">Where possible features were designed with the aim of reducing assembly time, leading to a estimated assembly time of under 4 minutes. Snap-fits, self-locating features, JST connectors and having most parts assemble from one direction were ways this was achieved.</div>
                    <ImageCarousel slug={slug} numImages={3} gallerySlug="gallery5" />
                </Col>
                <Col xs={12} className="project-col" >
                    <Image className="project-image3" fluid src={`./media/${slug}/image14.jpg`} alt=" " />
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} className="project-col" id="webapp">
                    <h2 className="">Web App Platform - <a href="https://github.com/pdmcguckian/EDP-Web-app">GitHub</a>, <a href="https://nova-webapp.herokuapp.com/">Demo Site</a></h2>
                    <div className="mb10 jt">For the tutorial and project coding platform, a web app suited the variety of devices that kids might own. Like with the device's UI this was designed to be clean and modern, while also being simple to use. A full featured code editor was at the heart of the site, along with fun <a href="#tutorial-video">tutorial videos</a>.</div>
                    <div className="mba jt">Patrick and myself learnt Django and built the functioning site and database in 2 weeks of April. Django allowed for good integration with the MySQL database. The user's code for personal projects and their 'answers' for tutorial steps are stored as strings with MySQL allowing them to be linked to the user by a foreign key. Information about each tutorial and the individual tutorial steps (including the pre-input code) are dynamically pulled from seperate tables allowing them to be easily added in the future - rather than being hardcoded into the html. The prototype site used materialize for styling.</div>
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <Image className="project-image1" fluid src={`./media/${slug}/image8.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={6} className="project-col">
                    <ImageCarousel slug={slug} numImages={3} gallerySlug="gallery6" />
                </Col>
                <Col xs={12} className="project-col">
                    <video className="project-video2" autoPlay loop muted playsInline src={`./media/${slug}/video2.mp4`} type="video/mp4" ></video>
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} md={6} className="project-col" >
                    <h2>Compliance</h2>
                    <div className="mb20 jt">Nova included product markings and considered factors such as disposal, to meet the rules and regulations for producing a child's electronic toy. Product markings as shown would be inlcuded in the moulds and embossed. The plastic parts are made from PLA so a '7' symbol is included.</div>
                    <Image className="project-image4" fluid src={`./media/${slug}/image10.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={6} className="project-col" id="test" >
                    <h2>Safety Online</h2>
                    <div className="mb20 jt">Privacy and safety online is very important to parents. We were careful to design Nova in such a way that after the device was paired, code had to be physically run by the user and no data from, for example the camera, was ever uploaded from the device.</div>
                    <Image className="project-image4" fluid src={`./media/${slug}/image9.jpg`} alt=" " />
                </Col>
            </Row>
            <Row className="project-row">
                <Col xs={12} className="project-col nova-image-sidescroll mb30" id="renders">
                    <h1 className="mta">Final Renders</h1>
                </Col>
                <Col xs={12} className="project-col nova-image-sidescroll mb30">
                    <Image className="project-image2" src={`./media/${slug}/image5.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={6} className="project-col" >
                    <Image className="project-image1" fluid src={`./media/${slug}/image1.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={6} className="project-col" >
                    <Image className="project-image1" fluid src={`./media/${slug}/image4.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={6} className="project-col" >
                    <Image className="project-image1" fluid src={`./media/${slug}/image11.jpg`} alt=" " />
                </Col>
                <Col xs={12} md={6} className="project-col" >
                    <Image className="project-image1" fluid src={`./media/${slug}/image12.jpg`} alt=" " />
                </Col>
                <Col xs={12} className="project-col" id="tutorial-video">
                    <h1 className="mta">Nova Example Tutorial Video</h1>
                    <YoutubePlayer youtubeId="AhwYanA9ypc" />
                </Col>
            </Row>

        </div>
    );

}

export default Nova;