import React from 'react';

import '../index.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel'

import { StickyContainer, Sticky } from 'react-sticky';
import ProjectHeader from "../page-elements/ProjectHeader";
import YoutubePlayer from '../page-elements/YoutubePlayer';

function Nova(props) {

    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    var slug = "nova";

    //<div className="project-header-title">Nova - Group Project</div>

    var collaborators = {
        "Patrick McGuckian": "https://www.google.co.uk",
        "Noor Ali": "https://www.google.co.uk",
        "Emily Tang": "https://www.google.co.uk",
    }

    var skills = {
        "Electronics": "#electronics",
        "Software": "#electronics",
        "Design": "#electronics",
        "UI Design": "#electronics",
        "CAD": "#electronics",
    }

    const images1 = [`./media/${slug}/image1.jpg`,`./media/${slug}/image1.jpg`,`./media/${slug}/image1.jpg`,`./media/${slug}/image1.jpg`];

    return (
        <div>
            {props.topbar ? <div className="topbar-spacer"></div> : null}
            <ProjectHeader
                slug="nova"
                desc="A bot, coded through a web-app that makes Python programming engaging for kids through physical input and output."
                collaborators={collaborators}
                completed="July 2020, 2nd Year Engineering Design Project"
                skills={skills}
            />
            <YoutubePlayer youtubeId="fDbf7welIbs" />

            <Row className="project-row">
                <Col xs={12} md={6} className="project-col">
                    <h1 className="mta">How can we engage children with code?</h1>
                    <div className="mb20">Our initial research found that children often do try to learn to code; and parents
                    encourage it. But far too often they give up due to a lack of engagement or interest in what they are
                    programming. However we found many young adults regret this, as they
often see programming as a skill that could help them advance their career or education.</div>
                    <div className="mba">We conducted a focus group with Python tutors, spent a day interviewing a family
                    in our target market, observed a child using a competing product, and engaged with the students of an under-13s STEM masterclass. From this we learnt how we can make
coding engaging for our target age range.</div>
                </Col>
                <Col xs={12} md={6} className="project-col" style={{ textAlign: "center" }}>
                    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
                        {images1.map((image)=>(
                        <Carousel.Item>
                            <Image className="nova-image1" fluid src={image} alt=" " />
                        </Carousel.Item>
                        ))}
                    </Carousel>     
                </Col>
            </Row>





                    <div className="project-body" id="electronics">


                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus at augue eget arcu dictum varius duis at. Eu non diam phasellus vestibulum lorem sed risus. Morbi tristique senectus et netus et malesuada fames. Massa enim nec dui nunc mattis enim ut tellus elementum. In pellentesque massa placerat duis ultricies lacus sed turpis. Adipiscing commodo elit at imperdiet. A pellentesque sit amet porttitor eget dolor morbi non. Diam quam nulla porttitor massa id neque aliquam. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.

                        Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Aenean et tortor at risus viverra adipiscing at in. Dictum sit amet justo donec enim. Dui id ornare arcu odio ut sem nulla pharetra. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Amet luctus venenatis lectus magna. Bibendum arcu vitae elementum curabitur vitae nunc. Ut sem viverra aliquet eget. Diam maecenas ultricies mi eget mauris pharetra. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Rutrum quisque non tellus orci ac auctor. Posuere lorem ipsum dolor sit amet consectetur. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Sem nulla pharetra diam sit amet. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.

                        Tincidunt id aliquet risus feugiat. Tellus orci ac auctor augue mauris augue. Ut sem nulla pharetra diam. Arcu ac tortor dignissim convallis aenean et. A pellentesque sit amet porttitor. Nisl tincidunt eget nullam non nisi est sit. Venenatis cras sed felis eget velit aliquet sagittis. Etiam non quam lacus suspendisse faucibus interdum posuere. Volutpat est velit egestas dui id ornare arcu odio. Montes nascetur ridiculus mus mauris vitae ultricies. Sed arcu non odio euismod lacinia at quis risus. Fermentum leo vel orci porta non pulvinar neque. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Tellus molestie nunc non blandit. Ornare lectus sit amet est placerat in egestas erat imperdiet.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus at augue eget arcu dictum varius duis at. Eu non diam phasellus vestibulum lorem sed risus. Morbi tristique senectus et netus et malesuada fames. Massa enim nec dui nunc mattis enim ut tellus elementum. In pellentesque massa placerat duis ultricies lacus sed turpis. Adipiscing commodo elit at imperdiet. A pellentesque sit amet porttitor eget dolor morbi non. Diam quam nulla porttitor massa id neque aliquam. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.

                        Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Aenean et tortor at risus viverra adipiscing at in. Dictum sit amet justo donec enim. Dui id ornare arcu odio ut sem nulLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus at augue eget arcu dictum varius duis at. Eu non diam phasellus vestibulum lorem sed risus. Morbi tristique senectus et netus et malesuada fames. Massa enim nec dui nunc mattis enim ut tellus elementum. In pellentesque massa placerat duis ultricies lacus sed turpis. Adipiscing commodo elit at imperdiet. A pellentesque sit amet porttitor eget dolor morbi non. Diam quam nulla porttitor massa id neque aliquam. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.

                        Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Aenean et tortor at risus viverra adipiscing at in. Dictum sit amet justo donec enim. Dui id ornare arcu odio ut sem nulla pharetra. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Amet luctus venenatis lectus magna. Bibendum arcu vitae elementum curabitur vitae nunc. Ut sem viverra aliquet eget. Diam maecenas ultricies mi eget mauris pharetra. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Rutrum quisque non tellus orci ac auctor. Posuere lorem ipsum dolor sit amet consectetur. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Sem nulla pharetra diam sit amet. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.

                        Tincidunt id aliquet risus feugiat. Tellus orci ac auctor augue mauris augue. Ut sem nulla pharetra diam. Arcu ac tortor dignissim convallis aenean et. A pellentesque sit amet porttitor. Nisl tincidunt eget nullam non nisi est sit. Venenatis cras sed felis eget velit aliquet sagittis. Etiam non quam lacus suspendisse faucibus interdum posuere. Volutpat est velit egestas dui id ornare arcu odio. Montes nascetur ridiculus mus mauris vitae ultricies. Sed arcu non odio euismod lacinia at quis risus. Fermentum leo vel orci porta non pulvinar neque. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Tellus molestie nunc non blandit. Ornare lectus sit amet est placerat in egestas erat imperdiet.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus at augue eget arcu dictum varius duis at. Eu non diam phasellus vestibulum lorem sed risus. Morbi tristique senectus et netus et malesuada fames. Massa enim nec dui nunc mattis enim ut tellus elementum. In pellentesque massa placerat duis ultricies lacus sed turpis. Adipiscing commodo elit at imperdiet. A pellentesque sit amet porttitor eget dolor morbi non. Diam quam nulla porttitor massa id neque aliquam. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.

Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Aenean et tortor at risus viverra adipiscing at in. Dictum sit amet justo donec enim. Dui id ornare arcu odio ut sem nul</div>
                    </div>
        </div>
    );

}

export default Nova;