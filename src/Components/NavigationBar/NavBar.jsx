import React from 'react'
import { useState,  } from 'react';
import './NavBar.css'
import logo from '../Images/art.png'
import HomeInfo from '../Homepage/HomeInfo';
import About from '../Homepage/About';
import Why from '../Homepage/why';
import Footer from '../Homepage/footer';
import { Link } from 'react-router-dom';
const initialAccount = {
  login: {
    view: 'connected to wallet'
  },
  signup: {
    view: 'not connnected to wallet'
  }
}



const NavBar = (disBtn,disBtn1) => {
  const [accounts, toggleB] = useState(initialAccount.signup)
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contractor: null
  });
  var log;
  const template = async () => {
    window.localStorage.setItem("isLogged",true)
    const contractAddress = "";
    const contractABI = "";
    //Metamask wallet code
    const { ethereum } = window;
    const account = await ethereum.request({
      method: "eth_requestAccounts"   
         
    }
    )
    return log;
   }
    const logout = () =>{
      window.localStorage.removeItem("isLogged")
    }
    log=window.localStorage.getItem("isLogged")
    console.log(log)

  return (
    <div>
      <div className='NavBar'>
        <ul className='header'>
          <li>
            <a href='#Home'>
              <img src={logo} height="50" width="200" onClick={() =>{logout()}}></img>
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
      { <>
        {log===false?
         <button onClick={()=>{template()}}>Connect TO Wallet</button>:<button className='connect'>Connected Acc: </button> }

      </> 
      }
      </div>
         <main>
            <section id="Home"><HomeInfo /></section>
            <section id="About"><About /></section>
            <section id="Why"><Why /></section>
            <section id="Footer"><Footer /></section>
          </main>
    </div>


  )
}

export default NavBar
