import React, { Component } from 'react';
import "./About.css";
import Picture from "../assets/Picture.png";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div className="split left">
        <div className="centered">
        <img className="profile_image"
        src = {Picture}
        alt="Profile Pic"
        ></img>
        </div>
        </div>
        <div className="split right">
        <div className="centered">
        <div className="name_title">Stephanie Ng</div>
        <div className="brief_description">
        <p> Hello! I am a rising junior pursuing a degree in Software Engineering at San Jose State University, set to graduate in May 2026.
        I've worked with Java, Python, React.js, and SQL.</p>
            <br />
            <p> Some of my hobbies include traveling, playing video games, and spending time with good
                company!
            </p>
        </div>
        </div>
        </div>
    </div>

      </div>
    )
  }
}