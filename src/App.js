import React, { Component } from 'react';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import myData from './projects.json';



export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {projects: myData.projects}
  }

  render(){
    return(
      <div>
        <Header />
        <About />
        <Projects projects={this.state.projects}/>
        <Contact />
        <Footer />
      </div>
    );
  }
}
