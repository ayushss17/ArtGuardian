import React from 'react';
import NavBar from './Components/NavBar';
import Profile from './Components/Profile';
import HomeInfo from './Components/HomeInfo';
import Frame from './Components/frame';
import Products from './Components/Products';
import { useEffect } from 'react';
import { getProducts } from './Components/redux/actions/prodActions.js';
import { useDispatch ,useSelector} from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  const dispatch = useDispatch();

  const {products}=useSelector(state =>  state.getProducts)
  console.log(products)
  useEffect(()=>{
    dispatch(getProducts())
  }, [dispatch])
  return (
    
    <div>
      
 <Router>
        <Routes>
          <Route exact path='/' element={<NavBar/>}/>
          <Route exact path='Home' element={<HomeInfo/>}/>
          <Route exact path='profile' element={<Profile />} />
          <Route exact path='products' element={<Products/>}/>
        </Routes>
      </Router>   
   </div>
  );
}

export default App;
