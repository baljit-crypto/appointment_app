import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

import GiveMode from './pages/GiveMode';
import Homepage from './pages/Homepage';
import GetMode from './pages/GetMode';
import './pages/register.css';

import './pages/giveMode.css';
import './pages/homepage.css';
import './pages/getMode.css';
import './components/dropdown.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path="/GiveMode" element={<GiveMode/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
