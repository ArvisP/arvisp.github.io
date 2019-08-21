import React from 'react'

function MiscSkills(){
  const styles = {
    marginLeft : "30px",
    marginRight : "30px"
  }
  const boldFont = {
    fontWeight : "bold"
  }
  return (
    <div className = "skillFrame" align = "center">
      <p style = {boldFont}>Miscellaneous</p>
      <img
        src = {require("../img/html-icon.png")}
        alt="html"
        width="10%"
        height="10%"
        style = {styles}
      />
      <img
        src = {require("../img/css-icon.png")}
        alt="css"
        width="10%"
        height="10%"
        style = {styles}
      />
      <img
        src = {require("../img/react-icon.png")}
        alt="react"
        width="10%"
        height="10%"
        style = {styles}
      />
      <img
        src = {require("../img/aws-icon.png")}
        alt="aws"
        width="10%"
        height="10%"
        style = {styles}
      />
      <br />
      <img
        src = {require("../img/apache-icon.png")}
        alt="apache"
        width="10%"
        height="10%"
        style = {styles}
      />
      <img
        src = {require("../img/flask-icon.png")}
        alt="flask"
        width="10%"
        height="10%"
        style = {styles}
      />

      <img
        src = {require("../img/git-icon.png")}
        alt="git"
        width="10%"
        height="10%"
        style = {styles}
      />
      <img
        src = {require("../img/heroku-icon.png")}
        alt="git"
        width="10%"
        height="10%"
        style = {styles}
      />


    </div>
  )
}

export default MiscSkills
