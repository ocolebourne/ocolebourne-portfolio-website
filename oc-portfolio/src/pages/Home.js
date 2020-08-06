import React from 'react';

import '../index.css';

import HomeProject from "../page-elements/HomeProject"

import Col from 'react-bootstrap/Col';
import { StickyContainer, Sticky } from 'react-sticky';

function Home(props) {



    return (
      <div>
        {props.topbar ? <div className="topbar-spacer"></div> : null }
        <div className="home-header">A design engineer skilled at developing technical products from idea to fruition. Currently based in London studying at Imperial College.</div>
        <h1>PROJECTS</h1>
        <HomeProject slug="nova" name="Nova" desc=" is a bot, coded through a web-app that makes Python programming engaging for 10-14 year olds through physical input and output." url="/nova" topbar={props.topbar} />
        <HomeProject slug="nova" name="Artops" desc="Artops - A bot, coded through a web-app that makes Python programming engaging for 10-14 year olds through physical input and output." url="/nova" topbar={props.topbar}/>
        <div>

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus at augue eget arcu dictum varius duis at. Eu non diam phasellus vestibulum lorem sed risus. Morbi tristique senectus et netus et malesuada fames. Massa enim nec dui nunc mattis enim ut tellus elementum. In pellentesque massa placerat duis ultricies lacus sed turpis. Adipiscing commodo elit at imperdiet. A pellentesque sit amet porttitor eget dolor morbi non. Diam quam nulla porttitor massa id neque aliquam. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.

Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Aenean et tortor at risus viverra adipiscing at in. Dictum sit amet justo donec enim. Dui id ornare arcu odio ut sem nulla pharetra. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Amet luctus venenatis lectus magna. Bibendum arcu vitae elementum curabitur vitae nunc. Ut sem viverra aliquet eget. Diam maecenas ultricies mi eget mauris pharetra. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Rutrum quisque non tellus orci ac auctor. Posuere lorem ipsum dolor sit amet consectetur. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Sem nulla pharetra diam sit amet. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.

Tincidunt id aliquet risus feugiat. Tellus orci ac auctor augue mauris augue. Ut sem nulla pharetra diam. Arcu ac tortor dignissim convallis aenean et. A pellentesque sit amet porttitor. Nisl tincidunt eget nullam non nisi est sit. Venenatis cras sed felis eget velit aliquet sagittis. Etiam non quam lacus suspendisse faucibus interdum posuere. Volutpat est velit egestas dui id ornare arcu odio. Montes nascetur ridiculus mus mauris vitae ultricies. Sed arcu non odio euismod lacinia at quis risus. Fermentum leo vel orci porta non pulvinar neque. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Tellus molestie nunc non blandit. Ornare lectus sit amet est placerat in egestas erat imperdiet.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vivamus at augue eget arcu dictum varius duis at. Eu non diam phasellus vestibulum lorem sed risus. Morbi tristique senectus et netus et malesuada fames. Massa enim nec dui nunc mattis enim ut tellus elementum. In pellentesque massa placerat duis ultricies lacus sed turpis. Adipiscing commodo elit at imperdiet. A pellentesque sit amet porttitor eget dolor morbi non. Diam quam nulla porttitor massa id neque aliquam. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.

Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Aenean et tortor at risus viverra adipiscing at in. Dictum sit amet justo donec enim. Dui id ornare arcu odio ut sem nulla pharetra. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Amet luctus venenatis lectus magna. Bibendum arcu vitae elementum curabitur vitae nunc. Ut sem viverra aliquet eget. Diam maecenas ultricies mi eget mauris pharetra. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Rutrum quisque non tellus orci ac auctor. Posuere lorem ipsum dolor sit amet consectetur. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Sem nulla pharetra diam sit amet. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis.

Tincidunt id aliquet risus feugiat. Tellus orci ac auctor augue mauris augue. Ut sem nulla pharetra diam. Arcu ac tortor dignissim convallis aenean et. A pellentesque sit amet porttitor. Nisl tincidunt eget nullam non nisi est sit. Venenatis cras sed felis eget velit aliquet sagittis. Etiam non quam lacus suspendisse faucibus interdum posuere. Volutpat est velit egestas dui id ornare arcu odio. Montes nascetur ridiculus mus mauris vitae ultricies. Sed arcu non odio euismod lacinia at quis risus. Fermentum leo vel orci porta non pulvinar neque. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Tellus molestie nunc non blandit. Ornare lectus sit amet est placerat in egestas erat imperdiet.
        </div>
      </div>
    );

}

export default Home;
