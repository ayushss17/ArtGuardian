import React from 'react'
import Footer from './Homepage/footer'
import './Profile.css'
import prof from '../Components/Images/flower1.jpg'
import Add from './Add'
import { useState } from 'react'
const Profile = () => {
  const [open, setOpen] = useState(false);
  const openDial = () => {
    setOpen(true)
  }
  return (
    <>
      <div className='acc'>
        <img src={prof} height="200" width="200" alt='No Profile'></img>
        {open ? console.log("Hell") :
          <p>
            <h1>Hello,</h1>
            <h6>0xD63397814D82F0580b09276AcCC110781913d939</h6>
          </p>
        }<button onClick={() => { openDial() }}>Add a New ART</button>
        <Add open={open} setOpen={setOpen}></Add>
      </div>
      <div className='buys'>
        <h2>Buys -</h2>
      </div>
      <div className='Sell'>
        <h2>Sells -</h2>
      </div>
      <Footer />
</>
      
  )
}

export default Profile