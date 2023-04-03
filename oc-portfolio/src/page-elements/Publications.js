import React from "react";

import "../index.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import PublicationsRow from "./PublicationsRow";

function Publications(props) {
    const mobile = () => {
        return (
            ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod", "Android"].includes(navigator.platform) ||
            // iPad on iOS 13 detection
            (navigator.userAgent.includes("Mac") && "ontouchend" in document)
        );
    };

    return (
        <div>
            <h2>Team Repair</h2>
            <PublicationsRow
                publisher="BBC Radio Four"
                title="Team Repair on BBC Radio Four PM."
                url="https://www.youtube.com/watch?v=6P04P4VmJao"
            />
            <PublicationsRow
                publisher="The Times"
                title="Sending children broken toys can fix throwaway culture."
                url="https://www.thetimes.co.uk/article/sending-children-broken-toys-can-fix-throwaway-culture-x0d8j5fdk"
            />
            <PublicationsRow
                publisher="BBC One"
                title="Team Repair on BBC Breakfast."
                url="https://www.youtube.com/watch?v=2vfs0xjkJBc&t=1s"
            />
            <PublicationsRow
                publisher="London Evening Standard"
                title="Introducing Team Repair, a gold winner of 2022’s AXA Startup Angel competition."
                url="https://www.standard.co.uk/business/axastartupangel/sustainable-business-winner-axa-startup-angel-competition-b1024143.html"
            />
            <PublicationsRow
                publisher="Imperial College London"
                title="Imperial student success at Mayor’s Entrepreneur Competition."
                url="https://www.imperial.ac.uk/news/237200/imperial-student-success-mayors-entrepreneur-competition/"
            />
            <div style={{ height: "24px" }}></div>
            <h2>Polarise</h2>
            <PublicationsRow
                publisher="Imperial College London"
                title="Imperial's most promising student startups get set to pitch their business ideas."
                url="https://www.imperial.ac.uk/news/234880/imperials-most-promising-student-startups-pitch/"
            />
            <div style={{ height: "50px" }}></div>
        </div>
    );
}

export default Publications;
