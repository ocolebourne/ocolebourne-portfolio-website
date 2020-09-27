import React from 'react';

import '../index.css';

import HomeProject from "../page-elements/HomeProject"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { StickyContainer, Sticky } from 'react-sticky';
import Container from 'react-bootstrap/Container'

function About(props) {



  return (
    <div>
      {props.topbar ? <div className="topbar-spacer"></div> : <div className="sidebar-spacer"></div>}

      <Row className="project-row mt50" id="">
        <Col xs={5} md={5} lg={3} className="project-col" style={{ textAlign: "center" }}>
          <Image className="mba about-image" fluid src={`./media/about/profile.jpg`} alt=" " />
        </Col>
        <Col xs={12} md={7} lg={9} className="project-col">
          <div className="mb10 jt">Hello! I am a design engineer skilled at complete development of technical products from problem to fruition. Currently based in London I am studying at Imperial College, Dyson School of Design Engineering. </div>
          <div className="mb10 jt"><strong>I am in the penultimate year of a 4-year MEng, and open to placement opportunities (6 month) between April and September 2021</strong>.</div>
          <div className="mb30 jt">As well as technology, I enjoy cycling, running and <a href="https://olliecolebourne.tumblr.com">photography</a>.</div>
          <div className="mta mb10 jt">Links:</div>
          <div className="mb30 about-tags">
            <button onClick={() => window.location.href = "/Oliver_Colebourne_CV.pdf"} className="about-tag">Link to my CV</button>
            <button onClick={() => window.location.href = "https://www.linkedin.com/in/olivercolebourne/"} className="about-tag">LinkedIn</button>
            <button onClick={() => window.location.href = "https://github.com/ocolebourne/"} className="about-tag">Github</button>

          </div>
          <div className="mta mb10 jt">Contact:</div>
          <div className="" style={{marginLeft:"30px"}}>
            <div className="mb10 jt"><a href="mailto:omcolebourne@gmail.com">Email: omcolebourne@gmail.com</a></div>
            <div className="jt">Phone: +447748603168</div>
          </div>
        </Col>

      </Row>
    </div>
  );

}

export default About;
