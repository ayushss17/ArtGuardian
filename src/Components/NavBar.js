import React from 'react'
import './NavBar.css'
import logo from '../Components/Images/art.png'
import HomeInfo from './HomeInfo';
import About from './About';
import Why from './why';
import Footer from './footer';
import { Link, a } from 'react-router-dom';
const NavBar = () => {
    return (
       <div>
        <div className='NavBar'>
          <ul className='header'>
          <li>
              <a href='#Home'>
                <img src={logo} height="50" width="200"></img>
              </a>
            </li>
            </ul>
            <ul className="items">
            <li className='products'>
              <a href='#Home'>Home</a>
            </li>
            <li className='products'>
            <a href='#About'>Know Us</a>
            </li>
            <li className='products'>
              <a href='#Why'>Why Choose Us</a>
            </li>
            <li className='products'>
              <a href='#Products'>Products</a>
            </li>
            <li class="products">
            <Link to='/profile' class="dropbtn" target='_blank'>Profile</Link>
            </li>
          </ul>
          <button>Connect To Wallet</button>
        </div>
        <main>
         <section id="Home"><HomeInfo/></section>
        <section id="About"><About/></section>
        <section id="Why"><Why/></section>
        <section id="Footer"><Footer/></section>
        </main>
        </div>

           
)
}

export default NavBar
