import React, { Component } from 'react';
import '../assets/styles/AboutMe.css';
import ScrollDownComponent from './ScrollDownComponent.jsx'

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
              <div className="center-vertically">
                <div className="about-me-intro-package">
                <p>Cynophile</p><hr className="about-me-horizontal-line"/><br /></div>
                <div className="about-me-intro-package">
                <p>Bangalorean</p><hr className="about-me-horizontal-line"/><br /></div>
                <div className="about-me-intro-package">

                <p>Coffee Lover</p><hr className="about-me-horizontal-line"/><br /></div>
                <div className="about-me-intro-package">
                <p>Trance Music</p><hr className="about-me-horizontal-line"/><br /></div>
                <div className="about-me-intro-package">
                <p>Travel Junkie</p><hr className="about-me-horizontal-line"/><br /></div>
                <div className="about-me-intro-package">
                <p>Software Developer</p><hr className="about-me-horizontal-line"/><br /></div>
              </div>
            </div>
            <div className="about-me-content" >
              <div className="center-vertically">
              <div className="about-me-content-quote">
                <p> There's no such thing as impossible,<br /> it's just a matter of figuring out how!</p></div>
              <div className="about-me-content-text">
                <p>Computer Science major from UTDallas, currently working as a Mobile App Developer at TripCase.
                  My passion for creativity and desire to build the right solutions justifies my proven track record for translating complex ideas into successful products.
                  <br/><br/>When Im not working, you'll probably find me playing with Photoshop, out hiking far north or driving miles in search for some yumm food!
                </p>
                <hr className="about-me-content-rectangle"/>
              </div>
            </div>
            </div>
          </div>
          <div style={this.handleCssForContent()}>
            <ScrollDownComponent hrefTo={'#project-container'} color="#ffffff"/>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutMe;
