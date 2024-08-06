
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from "./Components/Navbar";
import {Home,About,Vans} from "./Components/pages"


function App() {
  return (
     <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </div>
  );
 
}

export default App;
