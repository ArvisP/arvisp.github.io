import React from 'react'

function ProgramLang(){

  const boldFont = {
    fontWeight : "bold"
  }

  return (
    <div className = "skillFrame" align="center">
      <p style = {boldFont}>Programming Languages</p>
      <img
        src = {require("../img/cpp-icon.png")}
        alt="cpp"
        width="20%"
        height="20%"
      />
      <img
        src = {require("../img/java-icon.jpg")}
        alt="java"
        width="20%"
        height="20%"
      />
      <img
        src = {require("../img/python-icon.ico")}
        alt="python"
        width="20%"
        height="20%"
      />
      <img
        src = {require("../img/js-icon.png")}
        alt="js"
        width="20%"
        height="20%"
      />
      <img
        src={require("../img/dart-icon.png")}
        alt="dart"
        width="20%"
        height="20%"
      />

    </div>
  )
}

export default ProgramLang
