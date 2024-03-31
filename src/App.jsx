import React, { useContext, useEffect } from 'react'
import ContextData, { UserContext } from './context/userContext'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from './Home'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Adduser from './Adduser';
import EditUser from './EditUser';
import Footer from './Footer';
import UserFullDet from './UserFullDet';
import "./App.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {

  return (
    <>
      <UserContext>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/adduser' element={<Adduser />} />
          <Route path='/edituser'>
            <Route path=':id' element={<EditUser />}></Route>
          </Route>
          <Route path='/userdetails'>
            <Route path=':id' element={<UserFullDet />}></Route>
          </Route>
        </Routes>
        <Footer />
        <ToastContainer />
      </UserContext>
    </>

  )
}

export default App
