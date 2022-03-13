import React from "react";
import { ReactDOM } from "react";
import ReactLogo from "../images/reactjs-icon.svg";

export default function Navbar(){
    return (
    <nav>
        <div className="navbar-left-side">
            <img src={ReactLogo} alt="ReactLogo"/>
            <p>ReactFacts</p>
        </div>
        <div className="navbar-right-side">
            <p> React Course - Project 1 </p>
        </div>
    </nav>
    )
}
