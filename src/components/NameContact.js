import React from "react";
import "../css/nameContact.css";

export default function NameContact(){
    return (
        <div className="nameContactHolder">
            <h1>Laura Smith</h1>
            <p className="job">React Developer</p>
            <p className="email">lauraSmith.email</p>
            <button className="buttonOne">Email</button>
            <button className="buttonTwo">Linkedin</button>
        </div>
    );
}