import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from "./Components/Navbar";
import { Home, About, Vans, Host } from "./Components/pages";
import { Login } from "./Components/pages/Login";
import { SignUp } from "./Components/pages/SignUp";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/host" element={<Host />} />
      </Routes>
    </div>
  );
}

export default App;
