import React, { Component } from 'react';
import '../assets/styles/SideScroll.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

class SideScroll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity:1,
    };
    this.handleMargin = this.handleMargin.bind(this);
  }

  handleMargin() {
    var marginLeft = 100*(this.props.opacity) + "px"
    var opacity = 1 - (this.props.opacity)/2;
    return Object.assign({
      marginLeft: marginLeft,
      opacity:opacity
    });
  }
  render() {
    return (
        <div className="side-scroll">
          <ReactCSSTransitionGroup transitionName="sidebar"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={true}
            transitionEnterTimeout={500}
            transitionLeave={true}
            transitionLeaveTimeout={500}>
          <div className="scroll-content" style ={this.handleMargin()}>{this.props.content}</div>
        </ReactCSSTransitionGroup>
        </div>
    );
  }
}
export default SideScroll;
