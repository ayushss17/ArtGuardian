import React from 'react'
import {Link} from 'react-router-dom';
import './NavBar.css'
import logo from '../Components/Images/art.png'
import HomeInfo from './HomeInfo';

<style>
</style>
const NavBar = () => {
   

    return (
     
        <div> 
            <div className='header'>
          <header className='header_wrap fixed-top w-90 p-20'><nav className="navbar bg-dark border-bottom border-body" data-bs-theme="light"> 
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid p-50">
    <a className="navbar-brand" href="#">
     
    </a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <div className='image'>
        <img src={logo} alt="Logo" width="300" height="40" className="d-inline-block align-text-top" />
        </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Why Choose US</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Buyer Profile</a></li>
            <li><a class="dropdown-item" href="#">Seller Profile</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link">Get To Know Us</a>
        </li>
      </ul>
    </div>
  </div>
  </nav>
  <button className='button'>Connect To Wallet</button>

  </nav>
        </header>
        </div>
        </div>
        
)
}

export default NavBar
