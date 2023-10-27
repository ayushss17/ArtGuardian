import React from 'react'
import './HomeInfo.css'
import Buy from './buy.png'
import Sell from './sell.png'
import user from './user.png'
import cat from './catogories.png'
const HomeInfo = () => {
  return (
    <div>
      <div className='container-fluid md-10'>
        <center>
        <br/><br/>
        <h4 className='Main'>Welcome to ArtGuardian !</h4>
        <br/>
        <img className="images"src={user} width='150'height='150'></img>
        <img className="images"src={cat} width='150'height='150'></img>
            <img className="images"src={Sell} width='150'height='150'></img>
            <img className="images"src={Buy} width='150'height='150'></img>

            <h3 className='head'>Your Trustworthy Partner</h3> 
           
            <h3 className='head1'>Ensuring authenticity and peace of mind</h3>
            <h3 className='head1'>for art enthusiasts and collectors.</h3> 
            <br/><br/><br/>
            <h4 className='main'>Let's Secure Art's Legacy Together with ArtGuardian !</h4>
            <br/><br/>
        </center>
      </div>
    </div>
  )
}

export default HomeInfo
