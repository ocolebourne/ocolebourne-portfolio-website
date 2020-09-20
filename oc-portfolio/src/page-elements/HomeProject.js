import React from 'react';

import '../index.css';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


function HomeProject(props) {
    const image_string1=`./media/home/${props.slug+"1"}.jpg`
    const image_string2=`./media/home/${props.slug+"2"}.jpg`
    const video_string1=`./media/home/${props.slug+"1"}.mp4`
    const video_string2=`./media/home/${props.slug+"2"}.mp4`


    const iOS = () => {
        return [
          'iPad Simulator',
          'iPhone Simulator',
          'iPod Simulator',
          'iPad',
          'iPhone',
          'iPod'
        ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
      }

    return (
        <div>
            <Row>
                <Col xs={12} sm={6}>
                    { props.video1 && !(iOS()) ? 
                        <video className="home-video" autoPlay loop muted playsInline src={video_string1} type="video/mp4" ></video> : 
                        <Image className="home-image" fluid src={image_string1} alt=" " />
                    }
                </Col>
                <Col xs={12} sm={6}>
                    { props.video2  && !(iOS()) ? 
                        <video className="home-video"autoPlay loop muted playsInline src={video_string2} type="video/mp4" ></video> : 
                        <Image className="home-image" fluid src={image_string2} alt=" " />
                    }
                </Col>
            </Row>
            <Row className="home-project-body">

                    <Col className="animated fadeIn" xs={10} sm={11}><strong className="text-inline">{props.name}</strong><p className="text-inline">{props.desc}</p></Col>
                    <Col className="home-project-button-cont no-gutter"><a href={props.url}><Image className="home-project-button move-right" fluid src="./media/home/right-arrow.svg" alt=" "/></a></Col>
                    {props.topbar ? <Col xs={12} style={{height:"50px"}}></Col> : null}

            </Row>
            <div style={{height:"50px"}}></div>
            
        </div>
    );

}

export default HomeProject;
