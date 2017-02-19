import React, { Component } from 'react';
import '../assets/styles/ProjectOverlay.css';
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
    if (this.props.hideOverlay) {
      return null;
    }
    return (
      <div id="project-overlay" className="overlay">
        <div className="overlay-prev-button" onClick={() => this.changeForPreviousChildEvent()}>previous</div>
        <div className="overlay-content">
          <ProjectOverlayContent forChildEvent={this.state.forChildEvent} /></div>
        <div className="overlay-close-button" onClick={(e) => this.props.onClose(e)}>close</div>
        <div className="overlay-next-button" onClick={() => this.changeForNextChildEvent()}>next</div>
      </div>
    );
  }
}

export default ProjectOverlay;
