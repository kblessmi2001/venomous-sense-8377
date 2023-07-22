import './App.css';
import AllRoutes from './Components/Allroutes/Allroutes';
import Navbar from './Components/Allroutes/Navbar';
import Footer from "./Components/Footer"
// import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    
       <Navbar/>
     <AllRoutes />
     <Footer/>
    
    </div>
  );
}

export default App;
