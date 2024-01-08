import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import setIsClicked from './NavBar.jsx'
const footer = () => {
    setIsClicked('none')
    return (
        <div>
            <div className='container-fluid footer'>
            <div className='wallet'>
                    <center>Connect To Wallet</center>
                </div> 
                <div className='titles'>
                    <div className='title1'>QUICK LINKS
                        <div className='lin-titl'>
                            <div className='links'>
                            <Link to='/' onClick={''}>Clic</Link>
                            </div>
                            <div className='link2'>SUPPORT | FOLLOW | CONTACT </div>
                        </div>   
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default footer
