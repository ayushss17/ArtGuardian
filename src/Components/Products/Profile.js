import React, { useContext, useEffect, useState } from 'react';
import Add from './Add';
import './Profile.css';
import prof from '../Images/flower1.jpg'
import Footer from '../Homepage/footer';
import { MetamaskContext } from '../NavigationBar/MetaMaskContext';
import { UseDispatch, useDispatch,useSelector } from 'react-redux';
import { getUserProducts } from '../redux/actions/getUserProducts.js';
const Profile = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const {isMetamaskConnected, metamaskAccount}=useContext(MetamaskContext);
  useEffect(() => {
    if (metamaskAccount) {
      dispatch(getUserProducts(metamaskAccount));
    }
  }, [dispatch, metamaskAccount]);

  const openDial = () => {
    setOpen(true);
  };
  const {products} = useSelector(state => state.getProducts);
  console.log(products)
  return (
    <>
      <div className='acc' style={{height:200}}>
        {!open && (
          <>
            {isMetamaskConnected ? (
        metamaskAccount ? (
          <>           
           <h1>Hello,</h1>
           <button onClick={openDial}>Drop your ARTS</button>
           <p style={{float:'left' ,marginLeft:'500', textAlign:'center', fontSize:23}}>Metamask Account Number: {metamaskAccount}</p>
          </>  
        ) : (
          <p>Metamask account loading...</p>
        )
      ) : (
        <p style={{float:'left' ,marginLeft:'500', textAlign:'center', fontSize:23}}>Please connect to Metamask to view your account number</p>
      )}          </>
        )}
              <Add open={open} setOpen={setOpen}/>

      </div>
     
      
      <div className='buys'>
          <h3>Buys- </h3>
          {
          products.map(product =>(
           <img src={product.Link1}></img> 
          ))
          } 
      </div>
      <div className='Sell'>
        <h2>Sells -</h2>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
