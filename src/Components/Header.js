import React from 'react';
import {Animated} from "react-animated-css"
import TopBar from './TopBar.js'

function Header(props){

  return(
      <div className="headerStyle">
        <TopBar links={props.links} />
        <Animated animationIn="zoomIn" isVisible={true}>
          <div className = "nameBG"></div>
          <h1 className="header">I'm Arvis.</h1>
          <h2 className="header">A Software Developer</h2>

        </Animated>
      </div>
  )
}

export default Header
