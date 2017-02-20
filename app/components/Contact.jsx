import React, { Component } from 'react';
import '../assets/styles/Contact.css';
import '../assets/fonts/font-awesome.css';

class Contact extends Component {

  constructor (props) {
    super(props);
  }
  mailToRedirect()
  {
      window.location.href = "mailto:pooja.1690@gmail.com";
  }
  render() {
    return (
      <div id="contact-container">
        <div className="contact-content center-vertically">
          <p className="contact-title">SAY HELLO</p>
          <div className="contact-email" onClick={this.mailToRedirect}><p>pooja.1690@gmail.com</p><hr /></div>
          <a href="https://www.linkedin.com/in/pooja-shyam-ashok-kumar/" target="_blank" className="fa fa-linkedin fa-2x"></a>
        </div>
        <div className="contact-work-specs">Designed using Photoshop | Built on React framework.</div>
      </div>
    );
  }
}
export default Contact;
