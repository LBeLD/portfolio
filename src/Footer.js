import React from 'react';

const Footer = () => {
  return(
  <footer>
    <p>Coded with <i className="devicon-react-original"></i> &<i className="fa fa-coffee" aria-hidden="true"></i> by Lucas Brizolla
      &copy;{new Date().getFullYear()}
    </p>
    <div className="footerIcons">
      <a href="https://www.linkedin.com/in/lucas-brizolla-94082650/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square fa-2x"></i></a>
      <a href="https://github.com/LBeLD" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square fa-2x"></i></a>
      <a href="mailto:lbbrizolla@gmail.com"><i className="fa fa-envelope fa-2x"></i></a>
      <a href="https://www.freecodecamp.org/lbeld" target="_blank" rel="noopener noreferrer"><i className="fa fa-free-code-camp fa-2x"></i></a>
    </div>
  </footer>
  );
}

export default Footer;
