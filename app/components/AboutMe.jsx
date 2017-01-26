import React, { Component } from 'react';
import '../assets/styles/AboutMe.css';

class AboutMe extends Component {
  render() {
    return (
      <div id="about-me-container">
        <p>projects page </p>
        <div className="about-me-content col-xs-8 col-sm-8 col-md-6 col-lg-7
          col-xs-offset-3 col-sm-offset-3 col-md-offset-5 col-lg-offset-4" >
          <p>about me content section page </p>
        </div>
      </div>
    );
  }
}
export default AboutMe;
