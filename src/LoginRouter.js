import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Auth/Login/Login';

export default function LoginRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element = {<Login />} />
        </Routes>
    </BrowserRouter>
  )
}
