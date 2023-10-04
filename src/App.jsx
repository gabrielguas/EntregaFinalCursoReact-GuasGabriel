import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Titulo from './Components/Titulo/Titulo';


import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './Components/CartContainer/CartContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <Titulo />
      <Navbar />
      <CartContextProvider>
      <Routes>
          <Route path='/' element={<ItemListContainer />} />
          {/*  <Route path='/category/:id' element={<ItemListContainer />} /> Lo hice de otra forma, espero que este bien !*/}
          <Route path='/detalle/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer  /> } />
      </Routes>
      </CartContextProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App
