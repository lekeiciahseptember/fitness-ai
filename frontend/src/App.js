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
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;