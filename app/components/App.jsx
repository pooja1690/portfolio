import React, { Component } from 'react';
import '../assets/fonts/font-awesome.css';
import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import Contact from './Contact.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <Home />
      <AboutMe />
      <Contact />
      </div>
    );
  }
}
export default App;
