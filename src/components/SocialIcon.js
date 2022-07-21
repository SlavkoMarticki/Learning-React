import React from "react";
import "../css/socialIcon.css";
import facebookLogo from "../img/facebook.png";
import instagramLogo from "../img/instagram.png";
import linkedinLogo from "../img/linkedin.png";
import twitterLogo from "../img/twitter.png";

export default function SocialIcon(){
    return(
        <div className="socialIconHolder">
            <a href="https://www.facebook.com/" ><img src={facebookLogo} alt="Loading..."></img></a>
            <a href="https://www.instagram.com/" ><img src={instagramLogo} alt="Loading..."></img></a>
            <a href="https://www.linkedin.com/" ><img src={linkedinLogo} alt="Loading..."></img></a>
            <a href="https://twitter.com/" ><img src={twitterLogo} alt="Loading..."></img></a>
        </div>
    );
}