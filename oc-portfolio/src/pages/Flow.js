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

function Flow(props) {

    var slug = "flow";
    var desc = "Flow is an iot system giving managers insights from around their store. Our project was the overall winner at the Design Engineering Society X LEON Restaurants hackathon in Feb 2020. We are working closely with LEON to develop our concept further and test it in stores, as Deana Consultants of which I am a co-founder and director."

    var collaborators = {
        "Deana Consultants Ltd.": "https://deanaconsultants.com/",
        "LEON Restaurants Ltd.": "https://leon.co/",
    }

    var skills = {
        "IoT": "#",
        "Full-Stack Software": "#",
        "Systems Design": "#",
        "UI/UX Design": "#",
    }

    const header_image = `./media/${slug}/header.jpg`
    const header_video = `./media/${slug}/header.mp4`




    // style={{ maxWidth: "60%", minWidth: "200px", marginRight: "10px" }}

    return (
        <div>
            {props.topbar ? <div className="topbar-spacer"></div> : null}
            <ProjectHeader
                title="LEON Flow"
                slug={slug}
                desc={desc}
                collaborators={collaborators}
                completed="February 2020 - Present"
                skills={skills}
            />
            <NextProject name="Artops" url="/artops" />
        </div>
    );

}

export default Flow;