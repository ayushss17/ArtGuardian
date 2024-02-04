import React from 'react';
import NavBar from './Components/NavigationBar/NavBar.jsx';
import Profile from './Components/Profile';
import HomeInfo from './Components/Homepage/HomeInfo.js';
import Products from './Components/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
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
