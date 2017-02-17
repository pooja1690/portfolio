import React, { Component } from 'react';
import '../assets/styles/ProjectOverlay.css';
import Image from './Image.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

class ProjectOverlay extends Component {
  constructor(props) {
      super(props);
    }
  componentDidMount () {
    setTimeout(() => {
      this.changeProjectOverlayValue()
    }, 1000);
  }

  changeProjectOverlayValue() {
    console.log("overlay render");
  }

  render() {
    var projectData = require('./Projects.json');

    if (this.props.hideOverlay) {
      return null;
    }
    if (this.props.forChildEvent < 6) {
      var style = {backgroundColor: projectData[this.props.forChildEvent].backgroundColor};

      return (
        <div id="project-overlay" className="overlay" onClick={(e) => this.props.onClose(e)}>
          <ReactCSSTransitionGroup transitionName="overlay-animation"
            transitionEnterTimeout={2000}
            transitionEnter={true}
            transitionAppear={true}
            transitionAppearTimeout={2000}>
          <div className="overlay-main-project-container" style = {style}>
            <div className="overlay-main-project-image">
              <Image src={this.props.forChildEvent} />
            </div>
            <div className="overlay-main-project-content">
              <h3>{projectData[this.props.forChildEvent].heading}</h3>
              <ul>
              <li><p>{projectData[this.props.forChildEvent].description}</p></li>
              <li><div className="sub-heading">Role: </div><p>{projectData[this.props.forChildEvent].role}</p></li>
              <li><div className="sub-heading">Languages: </div><p>{projectData[this.props.forChildEvent].languages}</p></li>
              <li><div className="sub-heading">Platforms: </div><p>{projectData[this.props.forChildEvent].platforms}</p></li>
            </ul>
            </div>
          </div>
        </ReactCSSTransitionGroup>
        </div>
      );
    } else {
      return (
        <ReactCSSTransitionGroup transitionName="thing"
          transitionEnterTimeout={300}
          transitionEnter={true}
          transitionLeave={false}
          transitionAppear={true}
          transitionAppearTimeout={500}>
          <div id="project-overlay" className="overlay" onClick={(e) => this.props.onClose(e)}>
              <Image src={this.props.forChildEvent} backgroundColor={style}/>
          </div>
        </ReactCSSTransitionGroup>
      );
    }
  }
}

export default ProjectOverlay;
