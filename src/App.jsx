import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Carousel from './components/Carousel'
import CardContainer from './components/CardContainer'
import Footer from './components/Footer'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Padel Factory"} />
      <Carousel />
      <CardContainer />
      <Footer />
    </>
  )
}

export default App
