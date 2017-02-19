import React, { Component } from 'react';
import '../assets/styles/ScrollDownComponent.css';

class ScrollDownComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
        shouldAnimate:false
      };
    }
    componentDidMount () {
      setTimeout(() => {
        this.setState({shouldAnimate:true})
        this.handleCssForContent()
      }, 2000);

    }
    handleCssForContent() {
      if (this.state.shouldAnimate) {
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
  render() {
    return (
      <div className="scroll-component" style={this.handleCssForContent()}>
        <a href={this.props.hrefTo} textDecoration="none!important;"><p>scroll</p><hr /></a>
      </div>
    );
  }
}
export default ScrollDownComponent;
