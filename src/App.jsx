import { useContext, useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProductPage from './components/public/ProductPage'
import { BrowserRouter as Router } from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import Home from '../src/components/public/Home'
import Backet from './components/private/Backet'


function App() {
 
  return (
    <>
        <Navbar/>
          <Routes>
            <Route path = '/' element={<Home/>}/>
            <Route path='/backet' element={<Backet/>}/>
            <Route path='/products' element={<ProductPage/>}/>
          </Routes>
          
    </>
  )
}

export default App
