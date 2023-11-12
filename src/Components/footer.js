import React from 'react'
import './footer.css'
import arts from '../Components/Images/arts.png'
const footer = () => {
    return (
        <div>
            <div className='container-fluid footer'>
                <br /><br />
                <div className='titles'>
                    <div className='title1'>QUICK LINKS
                        <div className='lin-titl'>
                            <div className='links'>
                                <a href='#Home' className='sub-titles'>Home</a><br />
                                <a href='#About' className='sub-titles'>Get To Know US</a><br />
                                <a href='#Why' className='sub-titles'>Why Choose US</a><br />
                                <a href='#Products' className='sub-titles'>Products</a>
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
