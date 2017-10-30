import React, { Component } from 'react';
import Typist from 'react-typist';
import Scrollchor from 'react-scrollchor';


export default class Header extends Component {
  constructor(props){
    super(props);

    this.state ={navClass: "fa fa-bars"}

    this.handleHamburguerNavChange = this.handleHamburguerNavChange.bind(this);
  }

  //change hamburguer icon on click
  handleHamburguerNavChange(){
    let icon = this.state.navClass;
    if (icon === "fa fa-bars"){
      this.setState({navClass:"fa fa-times"})
    } else{
      this.setState({navClass:"fa fa-bars"})
    }
  }

  render(){
    return(
      <div id="header">
        <nav className="navbar navbar-expand-sm fixed-top">
            <Scrollchor animate={{offset: 0, duration: 800}} to="#header" className="nav-brand nav-link">
              <img src="https://res.cloudinary.com/dioukzx4w/image/upload/v1508860794/logo_uonffa.png" alt="logo"></img>
            </Scrollchor>
          <button
            className="navbar-toggler"
            type="button" data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.handleHamburguerNavChange}>
            <span className={this.state.navClass}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <Scrollchor animate={{offset: 0, duration: 800}} to="#about" className="nav-item nav-link">About Me</Scrollchor>
              <Scrollchor animate={{offset: 0, duration: 800}} to="#projects" className="nav-item nav-link">Projects</Scrollchor>
              <Scrollchor animate={{offset: 0, duration: 800}} to="#contact" className="nav-item nav-link">Contact Me</Scrollchor>
            </div>
          </div>
        </nav>
        <div className="container information">
            <div className="intro">
                <Typist startDelay={1500}>
                  Lucas Brizolla <br />
                  Front-end Developer
                </Typist>
              <div className="social">
                <a href="https://www.linkedin.com/in/lucas-brizolla-94082650/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square fa-2x"></i></a>
                <a href="https://github.com/LBeLD" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square fa-2x"></i></a>
                <a href="mailto:lbbrizolla@gmail.com"><i className="fa fa-envelope fa-2x"></i></a>
                <a href="https://www.freecodecamp.org/lbeld" target="_blank" rel="noopener noreferrer"><i className="fa fa-free-code-camp fa-2x"></i></a>
              </div>
              <Scrollchor animate={{offset: 0, duration: 1500}} to="#about" className="nav-item nav-link">
                <i className="fa fa-angle-double-down fa-3x"></i>
              </Scrollchor>
          </div>
        </div>
      </div>
    );
  }
}
