import React, { Component } from 'react';
import 'react-bootstrap';
import '../assets/styles/Home.css';
import { Link } from 'react-router';
import SmoothScroll from 'smoothscroll'
import ScrollDownComponent from './ScrollDownComponent.jsx'

class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        shouldAnimateHeading:false
      };
      this.changeStateValues = this.changeStateValues.bind(this);
      this.handleCssForHeading = this.handleCssForHeading.bind(this);
       this.componentDidMount = this.componentDidMount.bind(this);
    }
  componentDidMount () {
    setTimeout(() => {
      this.changeStateValues()
      this.handleCssForHeading()
      this.handlerCssForContainer()
      setTimeout(() => {
        this.handleCssForContent()
      }, 2000);
    }, 2000);

  }
  changeStateValues() {
    this.setState({shouldAnimateHeading:true});
  }
  handleCssForHeading() {
    if (this.state.shouldAnimateHeading) {
      var lineHeightValue = '0%';
      return Object.assign({
        paddingTop : lineHeightValue,
        WebkitTransition:'all 2s',
        WebkitTransform:'2s',
        transitionTimingFunction:'cubic-bezier(0.25,0.1,0.25,1.1)'
      });
    }
  }
  handleCssForContent() {
    if (this.state.shouldAnimateHeading) {
      return Object.assign({
        opacity : 1,
        paddingTop: 0,
        WebkitTransition:'all 2s',
        WebkitTransform:'2s',
        animationDelay:'3s',
        transitionTimingFunction:'cubic-bezier(0.25,0.1,0.25,1.1)'
      });
    }
  }
  handlerCssForContainer () {
    if (this.state.shouldAnimateHeading) {
      var newWidth = 'calc(100% - 105px)';
      return Object.assign({
        width:newWidth,
        WebkitTransition:'all 1s',
        WebkitTransform:'1s',
          transitionTimingFunction:'cubic-bezier(0.25,0.1,0.25,1.1)'
      })
    }
  }
  render() {
    return (
      <div>
        <div id="home" style={this.handleMargin}>
          <div className="home-image-container"></div>
          <div className="home-center-heading-container">
            <p className="center-heading"
            style={this.handleCssForHeading()}>
            HELLO.
            </p>
            <p className="center-text" style={this.handleCssForContent()}>
              I am Pooja Kumar.</p>
            <p className="center-text" style={this.handleCssForContent()}>
              A coder who builds to bring a product to reality!
            </p>
          </div>
          <ScrollDownComponent hrefTo={'#about-me-container'} />
          <div className="home-text-container" style={this.handlerCssForContainer()}></div>
        </div>
      </div>
    );
  }
}

export default Home;
