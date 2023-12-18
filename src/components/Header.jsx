import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='main-header'>
        <div className="leftheader">
        <img className='image' width="94" height="94" src="https://img.icons8.com/3d-fluency/94/youtube-play.png" alt="youtube-play"/>
        </div>
        <div className="rightheader">
          <h5>Home</h5>
          <h5>About</h5>
          <h5>More</h5>
          
        </div>
    </div>
  )
}

export default Header
