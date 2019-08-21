import React from 'react'
import ProgramLang from './ProgramLang.js'
import DBMS from './DBMS.js'
import MiscSkills from './MiscSkills.js'
import WhatICanDo from '../Info/WhatICanDo.js'

function Skills(){

  return(
      <div id = "skills">
        <div align = "right" float= "right">
          <h1 align="center">What I can do</h1>
          <div>
            <div className = "divSkills">
              <p className = "skills">{WhatICanDo}</p>
            </div>
            <div className = "divSkills">
              <ProgramLang />
              <DBMS />
            </div>
          </div>
          <MiscSkills />
        </div>
      </div>
  )
}

export default Skills
