import React from 'react';
import './About.css';
import './HomeInfo.css';
import getto from '../Images/gettoknow.png'

const About = () => {
  return (
    <div>
      <div class="container-fluid  about">
        <div className='title'>
          <br /><br /><br />
          <h1>Get To Know Us</h1>
          <img src={getto} width={400} height={400} style={{float:'right'}}></img>
        </div>
        <br /><br />
        <div className='para'>
          The "ArtGuardian" initiative tackles a critical issue within the art market - the rise of art fraud caused by insufficient seller authentication methods and the absence of blockchain technology.
          Art fraud not only erodes the credibility of the art industry but also leads to substantial financial losses for art collectors, buyers, and sellers.
          In order to combat this problem, our Dapp aims to develop a holistic solution that merges cutting-edge seller authentication techniques with the power of blockchain technology, ensuring a secure and reliable environment for art transactions.
          <br /><br />The official website for ArtGuardian is www.artguardian.io which can be viewed on the DApp browser for efficient transection of paintings. The process of transections between seller and buyer for painting is kept very simple.
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </div>
  )
}

export default About
