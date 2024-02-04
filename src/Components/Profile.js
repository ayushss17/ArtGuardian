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
            <h4>Ayush Sawant</h4>
          </p>
        }<button onClick={() => { openDial() }}>Add a New ART</button>
        <Add open={open} setOpen={setOpen}></Add>
      </div>
      <div className='buys'>
        <h2>Buys -</h2>
      </div>
      <div className='Sell'>
<h2>Hell</h2>
      </div>
      <Footer />
</>
      
  )
}

export default Profile