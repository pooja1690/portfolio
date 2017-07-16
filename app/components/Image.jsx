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
      case 0 :imagepath = 'https://i.imgur.com/lw2AH8K.jpg';
        break;
      case 1 :imagepath = 'https://i.imgur.com/4HnNsXU.png';
        break;
      case 2 :imagepath = 'https://i.imgur.com/eXjwAf6.jpg';
        break;
      case 3 :imagepath = 'https://i.imgur.com/UT64eum.jpg';
        break;
      case 4 :imagepath = 'https://i.imgur.com/DDKevrN.jpg';
              imagepath2 = 'https://i.imgur.com/OppkAj7.jpg';
              imagepath3 = 'https://i.imgur.com/jt3nuCE.jpg';
        break;
      case 5 :imagepath = 'https://i.imgur.com/iwZID1U.png';
                imagepath2 = 'https://i.imgur.com/pIbQD7I.jpg';
                imagepath3 = 'https://i.imgur.com/o8C8dHn.jpg';
        break;
      default:console.log("imagenotfound");
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
