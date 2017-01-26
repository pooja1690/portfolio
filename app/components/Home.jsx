import React, { Component } from 'react';
import 'react-bootstrap';
import '../assets/styles/Home.css';
import Coverflow from 'react-coverflow';
import { Link } from 'react-router';
import Projects from './Projects.jsx';

let isOn = true;
let radius = 180;
let degree = Math.PI / 5;
var angle = degree/2;

var fn = function () {
  /* do you want */
}
class Home extends Component {
  constructor(props) {
    super(props);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleCollapse = this.handleCollapse.bind(this);
    this.state = {collapse: true};
  }

  componentDidMount() {
  }
  handleExpand() {
    this.setState({collapse: true});
  }

  handleCollapse() {
    this.setState({collapse: false});
  }
  style() {
   if (this.state.collapse) {
     angle = degree/2;
     return Object.assign({
       top: 0,
       left: 0
     });
   } else {
     let x = Math.round(radius * Math.sin(angle));
     let y = Math.round(radius * Math.cos(angle));
     angle = angle + degree;

     return Object.assign({
       top: -x+40,
       left: y
     });
   }
  }
  render() {

    const collapse = this.state.collapse;
    return (
      <div>
        <div id="home">
        <header className="bg-img header">
          <Link path="/projects" component={Projects} />
          <div className="container">
                  <div className="intro-box">
                      <div className="intro-container">
                        <p>Hey There!</p>
                        <p>I am</p>
                        <p>Pooja</p>
                        <p>Kumar</p>
                        <svg>
                        <line  x1="0" y1="50" x2="1000" y2="50" className="path" fill="#B68958"
                          stroke="#B68958" stroke-width="2"/>
                        </svg>
                      </div>
                      <div className="coverflow-container">
                        <Coverflow
                          width={960}
                          height={480}
                          displayQuantityOfSide={2}
                          navigation={false}
                          enableHeading={false} >
                          <img src={require('../assets/images/4.jpg')} alt='title or description' data-action={fn} />
                          <img src={require('../assets/images/5.jpg')} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
                          <img src={require('../assets/images/6.jpg')} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
                        </Coverflow>
                      </div>
                  </div>
                  <div><ul className="radial-menu menu-container">
                    {collapse ? (
                      <li><a href="#" onClick={this.handleCollapse} className="center-circle fa fa-long-arrow-up fa-2x"></a></li>
                    ) : (
                      <li><a href="#" onClick={this.handleExpand} className="center-circle fa fa-long-arrow-up fa-2x"></a></li>
                    )}
                    <li><a href="" className="flyout-content fa fa-home fa-2x" style = {this.style()}><p>Contact</p></a></li>
                    <li><a href="" className="flyout-content fa fa-facebook fa-2x" style = {this.style()}><p>Test</p></a></li>
                    <li><Link path="/projects" component={Projects}><a className="flyout-content fa fa-twitter fa-2x" style = {this.style()}><p>Gallery</p></a></Link></li>
                    <li><a href="" className="flyout-content fa fa-linkedin fa-2x" style = {this.style()}><p>Professional</p></a></li>
                    <li><a href="" className="flyout-content fa fa-github fa-2x" style = {this.style()}><p>About</p></a></li>
                  </ul></div>
              </div>
        </header>
      </div>
    </div>
    );
  }
}

export default Home;
