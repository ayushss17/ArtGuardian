import React from 'react'
import {Link} from 'react-router-dom';
import './NavBar.css'
import logo from './1.jpg'

<style>
</style>
const NavBar = () => {
   

    return (
        <div> 
          <header className='header_wrap fixed-top'><nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
     ARTGuardian
    </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
      <div className='NavBar'>
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        </div>
    </div>
  </div>
  </nav>
<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Explore</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" href="#">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">Connect to Wallet</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">Get to know Us</Link>
          </li>
           
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
        </div>
        </nav>
        </header>
        </div>
        
)
}

export default NavBar
