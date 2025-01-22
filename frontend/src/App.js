import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from './components/auth/ForgotPassword';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;