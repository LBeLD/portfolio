import React, { Component } from 'react';

export default class About extends Component{
  render(){
    return(
      <div id="about">
        <h1>About Me</h1>
        <div className="aboutSection container">
          <div className="photo">
          <img src="https://res.cloudinary.com/dioukzx4w/image/upload/v1508762411/PortfolioPage/Lucas.png" alt="Lucas" />
          </div>
          <div className="text">
            <p>Hi I am Lucas, a former Mechanical Engineer and Video Game Associate Producer located im Mississauga, ON and aspiring to become a Full-stack Web Developer.</p>
            <p>In the past year I have been studying Front-end development using a variety of sources such as freeCodeCamp, Udemy, Lynda and Code Academy. At the moment, I am focusing on React/Redux and starting to get my feet wet with Back-end (Node.js, Express and Mongo DB).</p>
            <p>I'm passionate about building responsive applications with modern design and I enjoy learning new frameworks and technologies.</p>
            <p>If you have any comments or questions, feel free to let me know.</p>
            <p>Thanks for visiting!</p>
        <br />
            <div className="icons">
              <i className="devicon-html5-plain-wordmark"></i>
              <i className="devicon-css3-plain-wordmark"></i>
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-jquery-plain-wordmark"></i>
              <i className="devicon-bootstrap-plain-wordmark"></i>
              <i className="devicon-sass-original"></i>
              <i className="devicon-gulp-plain"></i>
              <i className="devicon-git-plain-wordmar"></i>
              <i className="devicon-github-plain-wordmark"></i>
              <i className="devicon-react-original-wordmark"></i>
            </div>
            <a href="https://www.dropbox.com/s/c91h85mg73v5u2x/Lucas_Brizolla_Resume.pdf?dl=0" target="_blank" rel="noopener noreferrer">
              <button className='btn'>Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
