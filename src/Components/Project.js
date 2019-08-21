import React from 'react'

function Project(props){
  let num = 0

  const techs = props.tech.map(t => (
    <p key = {num++} className = "projectTech">{t}</p>
  )

  )
  return (
    <div className = "projectDiv">
      <p className = "projectName">{props.name}</p>
      <p className = "projectDesc">{props.description}</p>
      {techs}
    </div>
  )
}

export default Project
