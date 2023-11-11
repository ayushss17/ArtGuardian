import NavBar from './Components/NavBar';
import { Link } from 'react-router-dom';
import HomeInfo from './Components/HomeInfo';
import About from './Components/About';
import Why from './Components/why';

function App() {
  return (
    <div>
      <NavBar/>
      <HomeInfo/>  
      <About/>
      <Why/>
        </div>
  );
}

export default App;
