import React, { useState,useRef, useEffect, } from 'react'
import './Products.css'
import { Button, Typography,createTheme,private_excludeVariablesFromRoot,styled } from '@mui/material'
import {getProducts} from './redux/actions/getProducts.js'
import { useDispatch ,useSelector} from 'react-redux';
import { Dispatch } from 'redux';
const Products = ({paintType,products}) => {
    const [open1,isHistOpen]=useState('none')
    const [open2,isPortOpen]=useState('none')
    const [open3,isLandOpen]=useState('none')
    const [open4,isStillOpen]=useState('none')
    const [selectedType, setSelectedType] = useState('Landscape');
    const Chng = (e)=>{
        // const  val=e.target.options[e.target.selectedIndex].value;
        const val=e.target.name
        console.log(val)
        if (val=="History") {
            isLandOpen(true)
            isHistOpen('none')
            isLandOpen('none')
            isStillOpen('none')
        }
        if (val=='Portrait'){
            isPortOpen(true)
            isHistOpen('none')
            isStillOpen('none')
            isLandOpen('none')
           
        }
        if (val=='Landscape'){
            isHistOpen(true)
            isLandOpen('none')
            isStillOpen('none')
            isPortOpen('none')
        }
        if (val=='StillLifePainting'){
            isStillOpen(true)
            isHistOpen('none')
            isPortOpen('none')
            isLandOpen('none')
        }
        setSelectedType(val);
    }
    useEffect(()=>{
        getProducts(paintType);
    },[getProducts,paintType])
    
    const {paintings}=useSelector(state =>  state.getProducts)
    console.log(paintings)
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
            <button name="Landscape" onClick={(e)=>{Chng(e)}}>Landscapes</button>
            <button name="Portrait" onClick={(e)=>{Chng(e)}}>Portraits</button>
            <button name="History" onClick={(e)=>{Chng(e)}}>History</button>
            <button name="StillLifePainting" onClick={(e)=>{Chng(e)}}>Stills    </button>
        <div className='types'>
         <div className='Land' style={{display:open1,textAlign:'center', padding:'10px 5px'}}>
         <h3>Landscapes Arts
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
       <div className='Port' style={{display:open2,textAlign:'center', padding:'10px 5px'}}>
         <h3>Portrait Arts
            <hr style={{marginRight:'100px',marginLeft:'100px'}}></hr>
         </h3>
       </div >
       <div className='Hist' style={{display:open3,textAlign:'center', padding:'10px 5px'}}>
         <h3>History Arts
            <hr style={{marginRight:'100px',marginLeft:'100px'}}></hr>
         </h3>
       </div >
       <div className='Still' style={{display:open4,textAlign:'center', padding:'10px 5px'}}>
         <h3>Still Arts
            <hr style={{marginRight:'100px',marginLeft:'100px'}}></hr>
         </h3>
       </div >
       
       </div>
       </div>
        <getProducts paintType={selectedType}/>
       </>
      
  )
}

export default Products
