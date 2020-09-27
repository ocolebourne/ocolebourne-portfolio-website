import React from 'react';

import '../index.css';

import HomeProject from "../page-elements/HomeProject"

import Col from 'react-bootstrap/Col';
import { StickyContainer, Sticky } from 'react-sticky';

function Home(props) {



    return (
      <div>
        {props.topbar ? <div className="topbar-spacer"></div> : <div className="sidebar-spacer"></div> }
        <div className="home-header">Design engineer skilled at complete development of technical products from problem to fruition. Currently based in London studying at Imperial College, Dyson School of Design Engineering. This portfolio was <a href="https://github.com/ocolebourne/">coded from scratch</a> using React.js - welcome!</div>
        <h1>PROJECTS</h1>
        <HomeProject slug="nova" name="Nova" desc=" is a bot, coded through a web-app that makes Python programming engaging for 10-14 year olds through physical input and output." url="/nova" topbar={props.topbar} />
        <HomeProject slug="ilab" name="Ideas Lab" desc=" is a new smart IoT enabled makerspace at Imperial College London, sponsored by Autodesk - 2020 placement: full stack developer." url="/ideaslab" topbar={props.topbar} />
        <HomeProject slug="flow" name="Flow" desc=" is an iot system giving managers insights from around their store - under development as Deana Consultants working with LEON Restaurants." url="/flow" topbar={props.topbar} />
        <HomeProject slug="artops" name="Artops" desc=" is a bot that plays an entire game of blackjack against a user." url="/artops" topbar={props.topbar} video2/>
        
      </div>
    );

}

export default Home;
