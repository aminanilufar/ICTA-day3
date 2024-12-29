import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Tabl from './components/Tabl'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Welcome from './components/Welcome'
import Api from './components/Api'
import Homepage from './components/Homepage'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>FACEBOOK</h1>
      <Login />
      <Signup />
      <Tabl /> 
      <Statebasics />
      <Counter/>
      <Welcome/>
      <Api/>
      <Homepage/>
      <Product/>*/}
      <Navbar />
      <Routes>
        <Route path="/l" element={<Login />} />
        <Route path="/s" element={<Signup />} />
        <Route path="/t" element={<Tabl />} />
        <Route path="/state" element={<Statebasics />} />
        <Route path="/c" element={<Counter />} />
        <Route path="/w" element={<Welcome />} />
        <Route path="/a" element={<Api />} />
        <Route path="/h" element={<Homepage />} />
        <Route path="/p" element={<Product />} />
      </Routes>
    </>
  )
}

export default App
