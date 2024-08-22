
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from "./Components/Navbar";
import {Home,About,Vans,Signin,Host,} from "./Components/pages"


function App() {
  return (
     <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/host" element={<Host />} />


      </Routes>
      
    </div>
  );
 
}

export default App;
