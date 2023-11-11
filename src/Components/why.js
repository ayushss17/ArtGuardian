import React from 'react'
import './why.css'
import secure from '../Components/Images/secure.png'
import userf from '../Components/Images/userF.png'
import multi from '../Components/Images/multi.png'
const why = () => {
  return (
    <div>
      <div className='container-fluid why'>
       <div className='head-why'>
        <br/>
        Why Choose US ?
        </div>
        <div className='imgtitle'>
            <div className='sec'>SECURE</div>    
            <div className='user'>User-Friendly</div>
            <div className='mult'>Multi-User</div>           
        </div>
        <img src={secure} className='imgs'></img>
        <img src={userf} className='imgs'></img>
        <img src={multi} className='imgs'></img>
      </div>
    </div>
  )
}

export default why
