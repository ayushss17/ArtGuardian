import React from 'react'
import { useState,  } from 'react';
import './NavBar.css'
import logo from '../Components/Images/art.png'
import HomeInfo from './HomeInfo';
import About from './About';
import Why from './why';
import Footer from './footer';
import { Link } from 'react-router-dom';
const initialAccount = {
  login: {
    view: 'connected to wallet'
  },
  signup: {
    view: 'not connnected to wallet'
  }
}

// const Button = styled (Button)`
// border-radius: 10px;
// height: 50px;
// width: 150px;
// background-color:blue;
// margin-top: 10px;
// margin-left: 1350px;
// position: fixed;
// font-family: NavItem;
// float: right;


const NavBar = () => {
  const [accounts, toggleB] = useState(initialAccount.signup)

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contractor: null
  });
  const [isClicked,setIsClicked]=useState(false);
  const [isClick,setisClik]=useState('none')
  const template = async () => {
    const contractAddress = "";
    const contractABI = "";
    window.localStorage.setItem("isLogged",true)
    //Metamask wallet code
    const { ethereum } = window;
    const account = await ethereum.request({
      method: "eth_requestAccounts"      
    })
   }
   const login=window.localStorage.getItem("isLogged")
   console.log(login,"login")
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
      </div>
      {  
      <div className='buttons'>
      if ({!login}) {
          <button type='button' onClick={() => {
            console.log("clicked");
            template();}}>Connect To Wallet </button>
      }
      else {
        <button type='button' value={'hello'} readOnly='true' className='connect'>Connected account : 1234567890</button>
      }  
      </div>
      }
      
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
