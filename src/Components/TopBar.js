import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import {Animated} from "react-animated-css"

function TopBar(props){

  let logoStyle = {
      width: "30px",
      height:"30px",
      marginRight:"30px"
  }

  let linkStyle = {
    marginLeft : "5px",
    marginRight : "5px",
    opacity : "1",
    color : "#FFFFFF"

  }

  let linksMarkup = props.links.map(link =>
        <Nav.Link key = {link.key} href = {link.link} style = {linkStyle}>{link.label}</Nav.Link>
  )

  return (
    <Animated animationIn="bounceInRight" isVisible={true}>
      <Navbar bg = "dark" variant = "dark" className = "navbarStyle">
        <a href = "#profile">
        <img
          src = {require("../img/A1.png")}
          style = {logoStyle}
          alt = "Logo"
        />
        </a>
        <ul className = "nav navbar-nav" >
          {linksMarkup}
        </ul>

      </Navbar>
    </Animated>
  )
}

export default TopBar
