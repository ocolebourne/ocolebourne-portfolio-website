import React from 'react';

import '../index.css';

import HomeProject from "../page-elements/HomeProject"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { StickyContainer, Sticky } from 'react-sticky';

function About(props) {



  return (
    <div>
      {props.topbar ? <div className="topbar-spacer"></div> : <div className="sidebar-spacer"></div>}
      <Row className="project-row mt50" id="">
        <Col xs={12} md={4} lg={3} className="project-col" style={{ textAlign: "center" }}>
          <Image className="about-image" fluid src={`./media/about/profile.jpg`} alt=" " />
        </Col>
        <Col xs={12} md={8} lg={9} className="project-col">
          <div className="mb10 jt">Hello! I am a Design engineer skilled at complete development of technical products from problem to fruition. Currently based in London I study at Imperial College, Dyson School of Design Engineering. </div>
          <div className="mb10 jt"><strong>I am in the penultimate year of a 4-year MEng, and open to placement opportunities (6 month) between April and September 2021</strong>.</div>
          <div className="mb10 jt">As well as technology, I enjoy cycling, running and <a href="https://olliecolebourne.tumblr.com">photography</a>.</div>
          <div className="mta about-tags">
            <button onClick={() => window.location.href = ""} className="project-tag">CV</button>
            <button onClick={() => window.location.href = "" } className="project-tag">LinkedIn</button>
            <button onClick={() => window.location.href = ""} className="project-tag">Email</button>

          </div>
        </Col>

      </Row>
    </div>
  );

}

export default About;
