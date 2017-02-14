import React, { Component } from 'react';
import '../assets/fonts/font-awesome.css';
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import Contact from './Contact.jsx';
import Skills from './Skills.jsx';
import Project from './Project.jsx';
import SideScroll from './SideScroll.jsx';
import '../assets/styles/App.css';
import {ScrollPage, Section} from 'react-scrollpage';
var scrollIntoView = require('scroll-into-view');

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        scrollElement:'Home',
        opacity:1
      };
      this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
      console.log('componentDidMount invoked');
      window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
    console.log('handleScroll invoked');
    var height = window.innerHeight;
    var pageYOffset = window.pageYOffset;
    let offsetValue = pageYOffset/height;
    console.log(offsetValue);
    var opacityValue = 1;

    if (offsetValue < 0.75) {
      opacityValue = (offsetValue.toFixed(2));
      console.log(opacityValue)
      this.setState({scrollElement:'',
        opacity:opacityValue
      });
    }
    if (offsetValue > 0.75 && offsetValue < 1.75) {
        opacityValue = ((offsetValue-1).toFixed(2));
        console.log(opacityValue)
        this.setState({scrollElement:'A bit about me...',
          opacity:opacityValue
        });
      }
    else if (offsetValue > 1.75 && offsetValue < 2.75) {
      opacityValue = ((offsetValue-2).toFixed(2));
      console.log(opacityValue)
      this.setState({scrollElement:'A peek at my work',
        opacity:opacityValue
      });
    }
    else if (offsetValue > 2.75 && offsetValue < 4) {
      opacityValue = ((offsetValue-3).toFixed(2));
      console.log(opacityValue)
      this.setState({scrollElement:'Lets get in touch!',
        opacity:opacityValue
      });
    }
  }

  render() {
    const options = {
          curPage: 1,           // inital page number, most 1
          totalPage: 4,
          delay: 1200           // delay between two scoll animation
        }

    return (
      <div onScroll={this.handleScroll}>
        <SideScroll content = {this.state.scrollElement} opacity = {this.state.opacity}/>
        <Home />
        <AboutMe />
        <Project />
        <Contact />
      </div>
    );
  }
}
export default App;
