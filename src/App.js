import React from 'react';
import NavBar from './Components/NavBar';
import Profile from './Components/Profile';
import HomeInfo from './Components/HomeInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
 <Router>
        
        <Routes>
          <Route exact path='/' element={<NavBar/>}/>
          <Route exact path='Home' element={<HomeInfo/>}/>
          <Route exact path="profile" element={<Profile />} />
        </Routes>
      </Router>   
   </div>
  );
}

export default App;
