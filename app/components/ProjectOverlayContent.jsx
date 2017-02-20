import React, { Component } from 'react';
import '../assets/styles/ProjectOverlayContent.css';
import Image from './Image.jsx';

class ProjectOverlayContent extends Component {

  render() {
    var projectData = require('./Projects.json');

    if (this.props.hideOverlay) {
      return null;
    }
    if (this.props.forChildEvent < 4) {
      return (
        <div className="overlay-main-project-container">
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
      );
    } else {
      return (
        <div>
            <Image src={this.props.forChildEvent}/>
        </div>
      );
    }
  }
}

export default ProjectOverlayContent;
