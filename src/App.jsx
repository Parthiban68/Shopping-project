import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './component/NavBar'
import Home from './component/Home'
import Men from './component/Men'
import Women from './component/Women'
import Kids from './component/Kids'
import Sports from './component/Sports'
import Outlet from './component/Outlet'
import SignUp from './component/SignUp'
import AddCart from './component/AddCart'
import Login from './component/Login'

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/men' element={<Men/>}/>
      <Route path="/women" element={<Women/>}/>
      <Route path='/kids' element={<Kids/>}/>
      <Route path='/sports' element={<Sports/>}/>
      <Route path='/outlet' element={<Outlet/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/addcart' element={<AddCart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
