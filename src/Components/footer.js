import React from 'react'
import './footer.css'
import arts from '../Components/Images/arts.png'
const footer = () => {
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
                                <a href='/' className='sub-titles'>Home</a><br />    
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
