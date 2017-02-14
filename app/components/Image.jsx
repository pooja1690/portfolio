import React, { Component } from 'react';
import '../assets/styles/Project.css';

class Image extends Component {

  render () {
    const x = this.props.src;
    var imagepath = "../assets/images/app-store.jpg";
    var imagepath2 = "../assets/images/app-store.jpg";
    var imagepath3 = "../assets/images/app-store.jpg";

    switch(x) {
      case "0":imagepath = require('../assets/images/imessage.jpg');
        break;
      case "1":imagepath = require('../assets/images/pdf-plugin.jpg');;
        break;
      case "2":imagepath = require('../assets/images/onboarding.jpg');
        break;
      case "3":imagepath = require('../assets/images/imessage.jpg');;
        break;
      case "4":imagepath = require('../assets/images/receipts.jpg');
        break;
      case "5":imagepath = require('../assets/images/imessage.jpg');;
        break;
      case "6":imagepath = require('../assets/images/hobby-vendor-1.jpg');
                imagepath2 = require('../assets/images/hobby-vendor-2.jpg');
                imagepath3 = require('../assets/images/hobby-vendor-3.jpg');
        break;
      case "7":imagepath = require('../assets/images/hobby-hall-2.jpg');
              imagepath2 = require('../assets/images/hobby-hall-1.jpg');
              imagepath3 = require('../assets/images/hobby-hall-3.jpg');
        break;
      default:console.log("hello3");
    }

    if (this.props.src < 6) {
      return (
          <div>
            <img src={imagepath}/>
          </div>
      );
    } else {
      console.log(this.props.backgroundColor);
      return (
        <div className="overlay-hobby-project-container" style={this.props.backgroundColor}>
        <div className="overlay-hobby-project-image"><img src={imagepath}/></div>
        <div className="overlay-hobby-project-image"><img src={imagepath2}/></div>
        <div className="overlay-hobby-project-image"><img src={imagepath3}/></div>
      </div>
      );
    }
  }
};

export default Image;
