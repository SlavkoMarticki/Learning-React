import React from "react";
import "../css/container.css";
import Image from "./Image";
import NameContact from "./NameContact";
import AboutInterests from "./AboutInterests";
import SocialIcon from "./SocialIcon";


export default function Container(){
    return (<div className="container">
        <Image />
        <NameContact />
        <AboutInterests />
        <SocialIcon />
    </div>);
}