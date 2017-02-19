import React, { Component } from 'react';
import '../assets/styles/SideScroll.css';

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
          <div className="scroll-content" style ={this.handleMargin()}>{this.props.content}</div>
        </div>
    );
  }
}
export default SideScroll;
