import React from 'react';
import { Route, Routes } from 'react-router-dom';
//Components
import Header from './Components/HomeComponents/Header';
import Footer from './Components/HomeComponents/Footer';
//Routes
import Home from './Routes/Home'
import Login from './Routes/Login'


function App() {

  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
