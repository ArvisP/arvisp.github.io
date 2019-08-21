import React from 'react';
import './App.css';
import Header from './Components/Header.js'
import Body from './Components/Body.js'

function App() {

  let links = [
    {key : 0, label : 'Profile', link:'#profile'},
    {key : 1, label : 'Skills', link:'#skills'},
    {key : 2, label : 'Portfolio', link:'#portfolio'},
    {key : 3, label : 'Contact', link:'#contact'}
  ]

  const background = {
    margin : "0px",
    backgroundColor : "#FFFFFF"
  }

  return (
    <div style = {background}>
      <Header links = {links}/>
      <Body links = {links}/>
    </div>
  );
}

export default App;
