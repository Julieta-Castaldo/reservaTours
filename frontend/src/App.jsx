import React from 'react';
import { Route, Routes } from 'react-router-dom';
//Components
import Header from './Components/HomeComponents/Header';
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
    </div>
  )
}

export default App
