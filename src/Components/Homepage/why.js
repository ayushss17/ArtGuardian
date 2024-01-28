import React from 'react'
import './why.css'
import secure from '../Images/secure.png'
import userf from '../Images/userF.png'
import multi from '../Images/multi.png'
const why = () => {
  return (
    <div>
      <div className='container-fluid why'>
       <div className='head-why'>
        <br/><br/>
        Why Choose US ?
        </div>
        <div className='imgtitle'>
            <div className='sec'>SECURE</div>    
            <div className='user'>User-Friendly</div>
            <div className='mult'>Multi-User</div>           
        </div>
        <img src={secure} className='imgs' alt='no image'></img>
        <img src={userf} className='imgs'alt='no image'></img>
        <img src={multi} className='imgs'alt='no image'></img>
        <br/><br/><br/><br/><br/><br/><br/>
      </div>
    </div>
  )
}

export default why
