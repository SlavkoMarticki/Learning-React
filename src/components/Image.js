import React from "react";
import developerPic from "../img/devPic.jpg";
import "../css/image.css";

export default function Image(){
    return(<img className="imageHolder" src={developerPic} alt="Loading..."></img>);
}