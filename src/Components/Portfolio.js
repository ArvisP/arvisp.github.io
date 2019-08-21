import React from 'react'
import Project from './Project'
import projectsData from '../Info/projectsData'

function Portfolio(){
  const projects = projectsData.map(project =>
      <Project
        key = {project.id}
        name = {project.name}
        description = {project.description}
        tech = {project.tech}
      />
  )

  return (
    <div>
      <h1 id = "portfolio">Some cool stuff</h1>
      <h4>These are some of my projects:</h4>
        {projects}
    </div>
  )
}

export default Portfolio
