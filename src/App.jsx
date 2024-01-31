import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import Error404 from './components/Error404'



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<Carousel />} />
        <Route path={"/productos"} element={<ItemListContainer />} />
        <Route path={"/categoria/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
