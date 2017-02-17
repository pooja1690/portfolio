import React, { Component } from 'react';
import '../assets/styles/AboutMe.css';

class AboutMe extends Component {
  constructor(props) {
      super(props);
    }
  componentDidMount () {
    this.handleCssForContent()
  }
  handleCssForContent() {
      return Object.assign({
        opacity : 1,
        paddingTop: 0,
        WebkitTransition:'all 2s',
        WebkitTransform:'2s',
        animationDelay:'3s',
        transitionTimingFunction:'cubic-bezier(0.25,0.1,0.25,1.1)'
      });
  }
  render() {
    return (
      <div id="about-me-container">
        <div className="background-tint">
          <div className="about-me-content-section">
          <div className="about-me-intro" >
            <p>about me content section page </p>
          </div>
          <div className="about-me-content" >
            <p>about me content section page </p>
          </div>
        </div>
          <div className="home-scroll-container" style={this.handleCssForContent()}>
                <a href="#project-container" textDecoration="none !important;"><p>scroll</p><hr /></a>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutMe;
