import React, { Component } from 'react';
import '../assets/fonts/font-awesome.css';
import '../assets/styles/Project.css';
import ProjectOverlay from './ProjectOverlay.jsx';

function CloseProjectOverlay () {
  this.setState(Project.shouldCollapse:true);
  return null;
}

class FlexChildClass extends Component {
  render() {
    var projectElements = ["iMessage App","Generate PDF Plugin","Onboarding UI", "Watch OS2 App","Sync Status plugin",
    "Watch OS1 App","Wedding Hall Startup design","Vendor App Design","Vendor App Design"];

    return (<div>
      <div className="project-headings">{projectElements[this.props.boxNumber]}</div>
    </div>);
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
  }

  handleExpandOverlay(e) {
    this.setState({shouldCollapse: false});
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
            <button className="flex-box-child"  onClick={() => this.handleExpandOverlay('6')}>
              <FlexChildClass boxNumber={'6'}/>
            </button>
            <button className="flex-box-child"  onClick={() => this.handleExpandOverlay('7')}>
              <FlexChildClass boxNumber={'7'}/>
            </button>
            <button className="flex-box-child"  onClick={() => this.handleExpandOverlay('8')}>
              <FlexChildClass boxNumber={'8'}/>
            </button>
        </div>
      </div>
    );
  }
}
export default Project;
