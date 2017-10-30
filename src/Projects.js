import React, { Component } from 'react';
export default class Projects extends Component {

  render() {
    let projects = this.props.projects;
    return(
      <div id="projects">
        <div className="container projectsSection" id="projects">
          <h1>Projects</h1>
          <div className="row">
            {projects.map((project,index)=>
              <div key={index} className="col-md-4 col-lg-3 d-flex align-items-stretch">
                <div className="card">
                  <img className="card-img-top" src={project.img} alt={projects.title} />
                  <div className="card-body">
                    <h4 className="card-title">{project.title}</h4>
                    <p className="card-text">{project.about}</p>
                    <div className="links">
                    <a href={project.liveUrl} className="card-link" target="_blank"><i className="fa fa-desktop"></i>  LIVE</a>
                    <a href={project.gitCode} className="card-link" target="_blank"><i className="fa fa-code"></i>  CODE</a>
                    </div>
                </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
