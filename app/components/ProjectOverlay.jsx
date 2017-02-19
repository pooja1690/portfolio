import React, { Component } from 'react';
import '../assets/styles/ProjectOverlay.css';
import Image from './Image.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import ProjectOverlayContent from './ProjectOverlayContent.jsx'

class ProjectOverlay extends Component {
  constructor(props) {
      super(props);
      this.state = {
        forChildEvent:0
      }
      this.changeForNextChildEvent = this.changeForNextChildEvent.bind(this);
      this.changeForPreviousChildEvent = this.changeForPreviousChildEvent.bind(this);
    }
  componentDidMount () {
    setTimeout(() => {
      this.changeProjectOverlayValue()
    }, 1000);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({forChildEvent:Number(nextProps.forChildEvent)})
  }
  changeProjectOverlayValue() {
    console.log("overlay render");
  }

  changeForNextChildEvent() {
    if (this.state.forChildEvent < 8) {
      this.setState({
        forChildEvent:(this.state.forChildEvent + 1)
      })
    }
  }
  changeForPreviousChildEvent() {
    if (this.state.forChildEvent > 0) {
      this.setState({
        forChildEvent:(this.state.forChildEvent - 1)
      })
    }
  }
  render() {
    var projectData = require('./Projects.json');

    if (this.props.hideOverlay) {
      return null;
    }
    if (this.props.forChildEvent < 6) {
      var style = {backgroundColor: projectData[this.props.forChildEvent].backgroundColor};

      return (
        <div id="project-overlay" className="overlay" onClick={(e) => this.props.onClose(e)} >
          {/* <div className="overlay-close-button" onClick={(e) => this.props.onClose(e)}>close</div> */}
          <div className="overlay-prev-button" onClick={() => this.changeForPreviousChildEvent()}>previous</div>
          <ProjectOverlayContent forChildEvent={this.state.forChildEvent} />
          <div className="overlay-next-button" onClick={() => this.changeForNextChildEvent()}>next</div>
        </div>
      );
    } else {
      return (
        <ReactCSSTransitionGroup transitionName="thing"
          transitionEnterTimeout={300}
          transitionEnter={true}
          transitionLeave={false}
          transitionAppear={true}
          transitionAppearTimeout={500}>
          <div id="project-overlay" className="overlay" onClick={(e) => this.props.onClose(e)}>
              <Image src={this.props.forChildEvent} backgroundColor={style}/>
          </div>
        </ReactCSSTransitionGroup>
      );
    }
  }
}

export default ProjectOverlay;
