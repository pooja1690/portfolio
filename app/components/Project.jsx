import React, { Component } from 'react';
import '../assets/styles/Project.css';
import ProjectOverlay from './ProjectOverlay.jsx';
import ScrollDownComponent from './ScrollDownComponent.jsx'

class FlexChildClass extends Component {
  render() {
    var projectElements = ["iMessage App","Generate PDF Plugin","Onboarding UI", "Sync Status plugin",
    "Wedding Halls Marketplace design", "Vendor App Design"];

    return (
      <div>
        <div className="project-headings">
          <p>{projectElements[this.props.boxNumber]}</p>
        </div>
        <div className="project-hr-lines">
          <hr className="vertical-line-one" />
          <hr className="vertical-line-two"/>
          <hr className="vertical-line-three"/>
        </div>
      </div>
    );
  }
}

class Project extends Component {
  constructor(props) {
    super(props);
    this.handleExpandOverlay = this.handleExpandOverlay.bind(this);
    this.handleCloseOverlay = this.handleCloseOverlay.bind(this);
    this.state = {shouldCollapse: true,
    childEvent:0
    };
  }

  handleCloseOverlay(e) {
    this.setState({shouldCollapse: true});
     window.onscroll=function(){};
  }

  handleExpandOverlay(e) {
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
    this.setState({
      shouldCollapse: false
    })
    this.setState({childEvent:e});
  }

  render() {
    return (
      <div id="project-container">
        <ProjectOverlay hideOverlay={this.state.shouldCollapse} forChildEvent={this.state.childEvent} onClose={() => this.handleCloseOverlay()} />
          <div className="flex-box-parent">
            <button className="flex-box-child" onClick={() => this.handleExpandOverlay('0')}>
              <FlexChildClass boxNumber={'0'}/>
            </button>
            <button className="flex-box-child" onClick={() => this.handleExpandOverlay('1')}>
              <FlexChildClass boxNumber={'1'}/>
            </button>
            <button className="flex-box-child" onClick={() => this.handleExpandOverlay('2')}>
              <FlexChildClass boxNumber={'2'}/>
            </button>
            <button className="flex-box-child" onClick={() => this.handleExpandOverlay('3')}>
              <FlexChildClass boxNumber={'3'}/>
            </button>
            <button className="flex-box-child"  onClick={() => this.handleExpandOverlay('4')}>
              <FlexChildClass boxNumber={'4'}/>
            </button>
            <button className="flex-box-child"  onClick={() => this.handleExpandOverlay('5')}>
              <FlexChildClass boxNumber={'5'}/>
            </button>
          </div>
        <div className="scroll-section">
          <ScrollDownComponent hrefTo={'#contact-container'} color="#0f1920"/>
        </div>
      </div>
    );
  }
}
export default Project;
