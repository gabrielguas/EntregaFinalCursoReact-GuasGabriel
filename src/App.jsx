import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Titulo from './Components/Titulo/Titulo';


import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


//import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Titulo />
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categody/:id' element={<ItemListContainer />} />
        <Route path='/detalle/:id' element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
