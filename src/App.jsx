import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error404 from './components/Error404'
import Cart from './components/Cart'
import CartContextProvider from './components/context/CartContext'
import Checkout from './components/Checkout'

function App() {
  return (
  <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={"/"} element={<Carousel />} />
          <Route path={"/productos"} element={<ItemListContainer />} />
          <Route path={"/categoria/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
