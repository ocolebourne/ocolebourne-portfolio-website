import React from 'react';

import '../index.css';

import HomeProject from "../page-elements/HomeProject"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { StickyContainer, Sticky } from 'react-sticky';

function Home(props) {



    return (
      <div>
        {props.topbar ? <div className="topbar-spacer"></div> : <div className="sidebar-spacer"></div> }
        <div className="home-header">Design engineer skilled at complete development of technical products from problem to fruition. Currently based in London studying at Imperial College, Dyson School of Design Engineering. This portfolio was <a href="https://github.com/ocolebourne/ocolebourne-portfolio-website">coded from scratch</a> using React.js - welcome!</div>
        <h1>PROJECTS</h1>
        <HomeProject slug="nova" name="Nova" desc=" is a bot, coded through a web-app that makes Python programming engaging for 10-14 year olds through physical input and output." url="/nova" topbar={props.topbar} />
        <HomeProject slug="ilab" name="Ideas Lab" desc=" is a new smart IoT enabled makerspace at Imperial College London, sponsored by Autodesk - 2020 placement: full stack developer." url="/ideaslab" topbar={props.topbar} />
        <HomeProject slug="flow" name="Flow" desc=" is an iot system giving managers insights from around their store - under development as Deana Consultants working with LEON Restaurants." url="/flow" topbar={props.topbar} />
        <HomeProject slug="artops" name="Artops" desc=" is a bot that plays an entire game of blackjack against a user." url="/artops" topbar={props.topbar} video2/>
        <div style={{height:"160px"}} id="about"></div>
        <Row className="project-row" >
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
            <div className="mb10 jt">Email: <a href="mailto:omcolebourne@gmail.com">omcolebourne@gmail.com</a></div>
            <div className="jt">Phone: +447748603168</div>
          </div>
        </Col>

      </Row>
      <div class="bottom-spacer"></div>
      </div>
    );

}

export default Home;
