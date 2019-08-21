import React from 'react'

function DBMS(){
  const boldFont = {
    fontWeight : "bold"
  }
  return (
    <div className = "skillFrame" align="center">
      <p style = {boldFont}>DBMS</p>
      <img
        src = {require("../img/mongodb-icon.png")}
        alt="mongodb"
        width="30%"
        height="30%"

      />
      <img
        src = {require("../img/sql-icon.png")}
        alt="sql"
        width="20%"
        height="20%"
      />
    </div>
  )
}

export default DBMS
