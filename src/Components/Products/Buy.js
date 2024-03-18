import React, { useContext } from 'react'
import { Dialog } from '@mui/material';
import './Buy.css'
import { buyprocess } from '../Services/buyapi';
import { MetamaskContext } from '../NavigationBar/MetaMaskContext.js';

const Buy = ({open,setOpen,product}) => {
    const { metamaskAccount } = useContext(MetamaskContext);
    const handleclose = () => {
        setOpen(false)  
      }

    const sendData = async () =>
    {
      if(product.artistaddress==metamaskAccount){
        alert('Artist Has not listed painting for buying')
      }
      else{
    const paintData=await buyprocess(product,metamaskAccount);
        if(paintData!=null){
          alert("Transection succesful")
        }
      }
    }
  return (
    
    <div className='BuyWindow' style={{alignSelf:'center'}}>
        <Dialog open={open} onClose={handleclose} PaperProps={{   
    style: {
      backgroundColor: ' #6dd5ed',
      boxShadow: 'none',
      display:'absolute',
      overflow:'hidden',
      fontSize:'15px',
      width:'1200'
    },
  }}>
          <div className='Window'>
          <h3 style={{ fontSize:25,margin:10,fontFamily:'unset'}}>Selected Art:</h3>
          <img src={product.Link1} style={{height:200,width:300,padding:15}}></img>
          <div className='info' style={{display:'inline-grid', float:'right',marginRight:10,marginTop:30}}>
          <h4 style={{ fontSize:20,}}>Artist: <h4 style={{fontFamily:'fantasy',fontSize:20}}>{product.artist}</h4></h4>
          <h4 style={{ fontSize:20}}>Current Selling Price: <h4 style={{fontFamily:'fantasy',fontSize:20}}>{product.price}</h4></h4>
          </div>
          <h4 style={{ fontSize:15,marginLeft:20}}>Current Owner Address:<h4 style={{fontFamily:'fantasy',fontSize:15}}>{product.artistaddress}</h4></h4>
          <button className='buy-btn' value="Hello" style={{margin:10,float:'right',borderRadius:15,height:30,width:100}} onClick={sendData}>BUY</button>
          <button value="Hello" style={{margin:10,float:'right',borderRadius:15,height:30,width:100}} onClick={handleclose}>CANCEL</button>
          </div>
          
          
        </Dialog>

    </div>
  )
}

export default Buy
