import React, { useContext } from 'react'
import { useState,  } from 'react';
import './NavBar.css'
import logo from '../Images/art.png'
import { Link } from 'react-router-dom';
import HomeInfo from '../Homepage/HomeInfo';
import About from '../Homepage/About';
import Why from '../Homepage/why';
import Footer from '../Homepage/footer';
import { MetamaskContext } from './MetaMaskContext';

const NavBar = () => {
  const {isMetamaskConnected, connectToMetamask, metamaskAccount,disconnectFromMetamask}=useContext(MetamaskContext);

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
          <Link to='/products' class="dropbtn" target='_blank'>Products</Link>
          </li>
          <li class="products">
            <Link to='/profile' class="dropbtn" target='_blank'>Profile</Link>
          </li>
        </ul>
      </div>
      <div className='buttons'>
{      <>{isMetamaskConnected ? (
        <button onClick={disconnectFromMetamask}>Disconnect</button>
      ) : (
        <button onClick={connectToMetamask}>Connect to Wallet</button>
      )}
      {isMetamaskConnected && <p>Connected Account: {metamaskAccount}</p>}
       </>
}      </div>
         <main>
            <section id="Home"><HomeInfo /></section>
            <section id="About"><About /></section>
            <section id="Why"><Why/></section>
            <section id="Footer"><Footer /></section>
          </main>
    </div>


  )
}

export default NavBar
