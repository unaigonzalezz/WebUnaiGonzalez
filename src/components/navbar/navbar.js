import React, { Component } from 'react';
import './navbar.css'
import logo from '../../img/logo.png';
import github from "../../img/GH.png"
import instagram from "../../img/IG.png"
import twitter from "../../img/TW.png"
import youtube from "../../img/YT.png"
import paypal from "../../img/PP.png"

function navbar(props) {
  return (
    <div className='navBar'>
    <nav class="sticky">
      <a href="">HOME</a>
      <a href="">ABOUT ME</a>
      <img id="logo" src={logo}></img>
      <a href="">SKILLS</a>
      <a href="">PROJECTS</a>
  </nav>
  <div className='social'>
    <img src={github} className='socialButton'></img>
    <img src={instagram} className='socialButton'></img>
    <img src={twitter} className='socialButton'></img>
    <img src={youtube} className='socialButton'></img>
    <img src={paypal} className='socialButton'></img>
  </div>
  </div>

  )
}

export default navbar;