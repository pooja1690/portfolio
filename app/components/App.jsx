import React, { Component } from 'react';
import '../assets/fonts/font-awesome.css';
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import Contact from './Contact.jsx';
import Skills from './Skills.jsx';
import Project from './Project.jsx';
import SideScroll from './SideScroll.jsx';
import '../assets/styles/App.css';

var scrollIntoView = require('scroll-into-view');

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        scrollElement:'Home',
        opacity:1,
        pageId:'home',
        pageJump:false
      };
      this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
    var height = window.innerHeight;
    var pageYOffset = window.pageYOffset;
    let offsetValue = pageYOffset/height;
    var opacityValue = 1;

    if (offsetValue < 0.75) {

      opacityValue = (offsetValue.toFixed(2));
      this.setState({scrollElement:'',
        opacity:opacityValue,
        pageId:'home'
      });
    }
    if (offsetValue > 0.75 && offsetValue < 1.75) {
        opacityValue = ((offsetValue-1).toFixed(2));
        this.setState({scrollElement:'A bit about me...',
          opacity:opacityValue,
          pageId:'about-me-container'
        });
      }
    else if (offsetValue > 1.75 && offsetValue < 2.75) {
      opacityValue = ((offsetValue-2).toFixed(2));
      this.setState({scrollElement:'A peek at my work',
        opacity:opacityValue,
        pageId:'project-container'
      });
    }
    else if (offsetValue > 2.75 && offsetValue < 4) {
      opacityValue = ((offsetValue-3).toFixed(2));
      this.setState({scrollElement:'Lets get in touch!',
        opacity:opacityValue,
        pageId:'contact-container'
      });
    }
  }

  render() {
    return (
      <div onScroll={this.handleScroll}>
        <SideScroll content = {this.state.scrollElement} opacity = {this.state.opacity}/>
        <div id = "full-page-component">
          <Home />
          <AboutMe />
          <Project />
          <Contact />
        </div>
      </div>
    );
  }
}
export default App;
