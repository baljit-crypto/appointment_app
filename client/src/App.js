import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import SelectMode from './pages/SelectMode';
import GiveMode from './pages/GiveMode';
import Homepage from './pages/Homepage';
import GetMode from './pages/GetMode';
import LoginCtrl from './utils/login_ctrl';
import './pages/register.css';
import './pages/selectMode.css';
import './pages/giveMode.css';
import './pages/homepage.css';
import './pages/getMode.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css';

function App() {
  LoginCtrl.loginRequired();
  const user = LoginCtrl.getUser();
  return (
    <BrowserRouter>
    <div className='navbar navbar-expand-lg'>
      <div className='container-fluid px-4'>
          <Link className='navbar-brand' to='/'>Appointment App</Link>
          <ul className='nav navbar-nav navbar-right'>
          <li className="nav-item">
          <Link to='/' className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
          <Link to='/About' className="nav-link">About</Link>
          </li>
          <li className="nav-item">
          <Link to='/Contact' className="nav-link">Contact</Link>
          </li>
          <li className="btn">
          <Link to='/Login' className="nav-link">{user ? user.username : "Get Started"}</Link>
          </li>
          </ul>
      </div>
    </div>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path="/SelectMode" element={<SelectMode/>}/>
      <Route path="/GiveMode" element={<GiveMode/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
