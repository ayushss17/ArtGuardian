import React, { useState,useRef, } from 'react'
import './Products.css'
import { Button, Typography,createTheme,private_excludeVariablesFromRoot,styled } from '@mui/material'
const Products = ({products}) => {
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
    const Text= styled(Typography)`
        font-size: 14px;
        display: flex;
    
        `
    const theme=createTheme({
        typography:{
            Text1:{
                fontFamily:''   
            },
        }
    })
  return (
    <>
        <div className='typeP'>
            <h3>Select Catogory Here</h3>
            <button name="0" onClick={(e)=>{Chng(e)}}>Landscapes</button>
            <button name="1" onClick={(e)=>{Chng(e)}}>Portraits</button>
            <button name="2" onClick={(e)=>{Chng(e)}}>History</button>
            <button name="3" onClick={(e)=>{Chng(e)}}>Stills    </button>
        <div className='types'>
         <div className='Hist' style={{display:open1,textAlign:'center', padding:'10px 5px'}}>
         <h3>Landscape Arts
            <hr style={{marginRight:'100px',marginLeft:'100px'}}></hr>
         </h3>
        {      
             products.map(product => (
                <>
                <a><img src={product.Link1}/>
                <Text style={{marginRight:"40px" ,fontWeight: 600,color:'#212121'}}><p id='artist'>By {product.artist}</p></Text>
                <Text style={{display:'inline',textAlign:'center',fontSize:'25px', float:'left', marginLeft:'30px'}}><br/>
                <p id='title'>{product.title}</p>
                </Text>
                <Text style={{display:'inline',textAlign:'center',marginLeft:'50px',marginRight:'30px'}}>
                <p id='desc'>{product.bigtitle}</p></Text>
                <Text style={{marginRight:'40px',fontSize:'20px'}}><br/>
                <p id='price'>Price : {product.price}</p><br/></Text>
                <br/><button style={{marginTop:'70px',marginBottom:'10px',marginLeft:'180px'}}>BUY NOW</button>
                <hr></hr>
                </a>
                </>
             ))}
       </div >
       <div className='Port' style={{display:open2}}>
       <h3>Portrait Arts
            <hr style={{marginRight:'100px',marginLeft:'100px'}}></hr>
         </h3>       </div>
       <div className='Land' style={{display:open3}}>
       <h3>History Arts
            <hr style={{marginRight:'100px',marginLeft:'100px'}}></hr>
         </h3>
       </div>
       <div className='Stills' style={{display:open4}}>
       <h3>Still Arts
            <hr style={{marginRight:'100px',marginLeft:'100px'}}></hr>
         </h3>
       </div>
       
       </div>
       </div>

       </>
      
  )
}

export default Products
