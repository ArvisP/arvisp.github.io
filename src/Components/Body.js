import React from 'react'
import {Animated} from "react-animated-css"
import Skills from './Skills.js'
import Contact from './Contact.js'
import Portfolio from './Portfolio.js'

function Body (){

    return (
      <div>
        <Animated animationIn="zoomIn" isVisible={true} className = "bodyOfText">
          <h1>Hi.</h1>
          <p>I design and develop software. Currently based in New York City.</p>
          <p>I have a B.S. in Computer Science from The City College of New York.</p>
        </Animated>

        <Animated animationIn="zoomIn" isVisible={true} className = "bodyOfText">
          <Skills />
        </Animated>

        <Animated animationIn="zoomIn" isVisible={true} className = "bodyOfText">
          <Portfolio />
        </Animated>

        <Animated animationIn="zoomIn" isVisible={true} className = "bodyOfText">
          <Contact />
        </Animated>

      </div>
    )
  }


export default Body
