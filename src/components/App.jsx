import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import NavBar from 'pages/NavBar/NavBar';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import PrivateRoutes from 'routes/PrivateRoutes';

export function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route element={<PrivateRoutes></PrivateRoutes>}>
        <Route 
          path="/phonebook"
          element={<ContactsPage></ContactsPage>}
        ></Route>
        </Route>
      </Routes>
    </div>
  );
}
