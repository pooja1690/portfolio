import React, { Component } from 'react';
import '../assets/styles/Image.css';

class Image extends Component {

  render () {
    var projectData = require('./Projects.json');
    const childEvent = this.props.src;

    var imagepath = "../assets/images/app-store.jpg";
    var imagepath2 = "../assets/images/app-store.jpg";
    var imagepath3 = "../assets/images/app-store.jpg";

    switch(childEvent) {
      case 0 :imagepath = 'https://i.imgsafe.org/671134e2ed.jpg';
        break;
      case 1 :imagepath = 'https://i.imgsafe.org/67107d1c7d.jpg';
        break;
      case 2 :imagepath = 'https://i.imgsafe.org/6710b57cc8.jpg';
        break;
      case 3 :imagepath = 'https://i.imgsafe.org/67111e5387.jpg';
        break;
      case 4 :imagepath = 'https://i.imgsafe.org/6710ce8d3c.jpg';
              imagepath2 = 'https://i.imgsafe.org/6710c8f4c6.jpg';
              imagepath3 = 'https://i.imgsafe.org/6710bd6b93.jpg';
        break;
      case 5 :imagepath = 'https://i.imgsafe.org/6710f684e3.jpg';
                imagepath2 = 'https://i.imgsafe.org/67110d9f82.jpg';
                imagepath3 = 'https://i.imgsafe.org/6710869f68.jpg';
        break;
      default:console.log("hello3");
    }

    if (childEvent < 4) {
      return (
        <div>
          <img src={imagepath}/>
        </div>
      );
    } else {
      return (
        <div className="overlay-hobby-project-container" style={this.props.backgroundColor}>
          <div className="overlay-hobby-project-image"><img src={imagepath}/></div>
          <div className="overlay-hobby-project-image"><img src={imagepath2}/></div>
          <div className="overlay-hobby-project-image"><img src={imagepath3}/></div>
          <div className="hobby-project-description">Description:<p>{projectData[this.props.src].description}</p></div>
        </div>
      );
    }
  }
};

export default Image;
