import React, { useState } from 'react'
import './Products.css'
import { Button } from '@mui/material'


const Products = () => {
    const [open1,isHistOpen]=useState('none')
    const [open2,isPortOpen]=useState('none')
    const [open3,isLandOpen]=useState('none')
    const [open4,isStillOpen]=useState('none')
    
    const Chng = (e)=>{
        // const  val=e.target.options[e.target.selectedIndex].value;
        const val=e.target.name
        console.log(val)
        if (val=='0') {
            isHistOpen(true)
            isPortOpen('none')
            isLandOpen('none')
            isStillOpen('none')
        }
        if (val=='1'){
            isPortOpen(true)
            isHistOpen('none')
            isStillOpen('none')
            isLandOpen('none')
           
        }
        if (val=='2'){
            isLandOpen(true)
            isHistOpen('none')
            isPortOpen('none')
            isStillOpen('none')
        }
        if (val=='3'){
            isStillOpen(true)
            isHistOpen('none')
            isPortOpen('none')
            isLandOpen('none')
        }
        console.log(open1)
    console.log(open2)
    console.log(open3)
    console.log(open4)
    }
    
  return (
    <div style={{margin:'0px',top:0}}>
        <div className='typeP'>
            <h2>Select catogories here:</h2>
            <button className="types"  name="0" onClick={(e)=>{Chng(e)}}>Hello</button>
            <button className="types"  name="1" onClick={(e)=>{Chng(e)}}>Hello</button>
            <button className="types"  name="2" onClick={(e)=>{Chng(e)}}>Hello</button>
            <button className="types"  name="3" onClick={(e)=>{Chng(e)}}>Hello</button>
        </div>
        <div className='prod'>
       <div className='Hist' style={{display:open1}}>
        History
       </div >
       <div className='Port' style={{display:open2}}>
        Portraits
       </div>
       <div className='Land' style={{display:open3}}>
        Landscapes
       </div>
       <div className='Stills' style={{display:open4}}>
        Stills
       </div>
       </div>

      
    </div>
  )
}

export default Products
