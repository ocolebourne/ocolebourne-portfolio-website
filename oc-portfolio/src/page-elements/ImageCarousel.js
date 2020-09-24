import React from 'react';

import '../index.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel'


export default function ImageCarousel(props) {
    const images = [];
    const [index, setIndex] = React.useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    let video = props.video || [];
    for (const i of Array(props.numImages).keys()) {
        if (video.includes(i + 1)) {
            images.push([1, `./media/${props.slug}/${props.gallerySlug}/video${i + 1}.mp4`])

        } else {
            images.push([0, `./media/${props.slug}/${props.gallerySlug}/image${i + 1}.jpg`])

        }
    };
    const interval = props.interval || 3000;
    return (
        <Carousel style={{marginTop:"auto"}} interval={interval} activeIndex={index} onSelect={handleSelect}>
            {images.map((item) => (
                <Carousel.Item>
                    {item[0] === 0 ?
                        <Image className="project-image1" fluid src={item[1]} alt=" " /> :
                        <div className="project-video1-cont">
                            <video className="project-video1" autoPlay loop muted playsInline src={item[1]} type="video/mp4" ></video>
                        </div>
                    }
                </Carousel.Item>
            ))}
        </Carousel>
    )
}