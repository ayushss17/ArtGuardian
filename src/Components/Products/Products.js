import React, { useState,useRef, useEffect, } from 'react'
import './Products.css'
import { Button, Typography,createTheme,private_excludeVariablesFromRoot,styled } from '@mui/material'
import {getProducts} from '../redux/actions/getProducts.js'
import { useDispatch ,useSelector} from 'react-redux';
import Add from './Add.js';
import { useContext } from 'react';
import { MetamaskContext } from '../NavigationBar/MetaMaskContext.js';
import Buy from '../Products/Buy.js'
const Products = ({}) => {

  const {isMetamaskConnected, metamaskAccount}=useContext(MetamaskContext);
  const [openWin, setOpenBuy] = useState('none');
  const [data,setData]=useState('none');
  const openBuyDial = ({product}) => {
    setOpenBuy(true);
    setData(product);
    console.log(data);
  };

 
  
  const dispatch = useDispatch();

  

  const [open1,isLandOpen]=useState('none')
  const [open2,isPortOpen]=useState('none')
  const [open3,isHistOpen]=useState('none')
  const [open4,isStillOpen]=useState('none')
  const [paintType,selectedType]=useState('')

  useEffect(() => {
    console.log("Products.js",paintType)
    dispatch(getProducts(paintType));
  }, [dispatch, paintType]);

    const Chng = (e)=>{
        const val=e.target.name
        if (val=='Landscape') {
            isLandOpen(true)
            isHistOpen('none')
            isPortOpen('none')
            isStillOpen('none')
            selectedType('Landscape')

        }
        if (val=='Portrait'){
            isPortOpen(true)
            isHistOpen('none')
            isStillOpen('none')
            isLandOpen('none')
            selectedType('Portrait')
           
        }
        if (val=='History Painting'){
            isHistOpen(true)
            isLandOpen('none')
            isStillOpen('none')
            isPortOpen('none')
            selectedType('History Painting')
        }
        if (val=='StillLifePainting'){
            isStillOpen(true)
            isHistOpen('none')
            isPortOpen('none')
            isLandOpen('none')
            selectedType('StillLifePainting')
        }

    }
        const Text= styled(Typography)`
        font-size: 14px;
        display: flex;
      `
     const {products}=useSelector(state =>  state.getProducts)
     const [open, setOpen] = useState(false);
     
     
   
     const openDial = () => {
       setOpen(true);
     };

        
  return ( 
    <>
        <>
        if ({open1==null && open2==null && open3==null && open4==null}) {
          
          <div>
          {
          isMetamaskConnected?<> <button onClick={openDial} style={{marginTop:300}}>Add a New ART</button>
          <Add open={open} setOpen={setOpen} /> </>:<h3 style={{marginTop:300}}>Connect to account please</h3>
        }          </div>
          } 
          </>
          

        
        <div className='typeP'>
            <h3>Select Catogory Here</h3>
            <button name="Landscape" onClick={(e)=>{Chng(e)}}>Landscapes</button>
            <button name="Portrait" onClick={(e)=>{Chng(e)}}>Portraits</button>
            <button name="History Painting" onClick={(e)=>{Chng(e)}}>History</button>
            <button name="StillLifePainting" onClick={(e)=>{Chng(e)}}>Stills    </button>
        <div className='types'>
         <div className='Land' style={{display:open1,textAlign:'center', padding:'10px 5px'}}>
         <h3>Landscapes Arts
            <hr style={{marginRight:'100px',marginLeft:'100px'}}></hr>
         </h3>
        {     
             products.map(product => (
                
                <a><img src={product.Link1} />
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
                
             ))}
       </div >
       <div className='Port' style={{display:open2,textAlign:'center', padding:'10px 5px'}}>
         <h3>Portrait Arts
            <hr style={{marginRight:'100px',marginLeft:'100px'}}></hr>
         </h3>
         {     
             products.map(product => (
                
                <a><img className='ports' src={product.Link1} height={400} width={200}/>
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
                
             ))}
       </div >
       <div className='Hist' style={{display:open3,textAlign:'center', padding:'10px 5px'}}>
         <h3>History Arts
            <hr style={{marginRight:'100px',marginLeft:'100px'}}></hr>
         </h3>
         {     
             products.map(product => (
                
                <a><img className='ports' src={product.Link1} height={400} width={200}/>
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
                
             ))}
       </div >
       <div className='Still' style={{display:open4,textAlign:'center', padding:'10px 5px'}}>
         <h3>Still Arts
            <hr style={{marginRight:'100px',marginLeft:'100px'}}></hr>
         </h3>
         {     
             products.map(product => (
                
                <a><img className='ports' src={product.Link1} height={400} width={200}/>
                <Text style={{marginRight:"40px" ,fontWeight: 600,color:'#212121'}}><p id='artist'>By {product.artist}</p></Text>
                <Text style={{display:'inline',textAlign:'center',fontSize:'25px', float:'left', marginLeft:'30px'}}><br/>
                <p id='title'>{product.title}</p>
                </Text>
                <Text style={{display:'inline',textAlign:'center',marginLeft:'50px',marginRight:'30px'}}>
                <p id='desc'>{product.bigtitle}</p></Text>
                <Text style={{marginRight:'40px',fontSize:'20px'}}><br/>
                <p id='price'>Price : {product.price}</p><br/></Text>
                <br/><button style={{marginTop:'70px',marginBottom:'10px',marginLeft:'180px'}} onClick={()=>{
                  openBuyDial({product})
                  
                }}>BUY NOW</button>
                <hr></hr>
                </a>
                
             ))}

       </div >
       <Buy open={openWin} setOpen={setOpenBuy} product={data}/>

       </div>
       </div>
       </>
      
  )
}

export default Products
