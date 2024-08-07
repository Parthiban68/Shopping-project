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
import AuthProvider  from "./component/Auth";
import ProductDetails from './component/ProductDetails'
import Footer from './component/Footer'
import User from './component/User'



function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
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
      <Route path='/pd/:_id' element={<ProductDetails/>}/>
      <Route path='/profile' element={<User/>}/>
    </Routes>
    <Footer/>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default App
