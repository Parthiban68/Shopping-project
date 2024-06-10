import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AddItems from './component/AddItems'
import ListItem from './component/ListItem'
import AddAdmin from './component/AddAdmin'
import Navbar from './component/Navbar'
import EditItems from './component/EditItems'
import Login from './component/Login'
import AuthProvider from './component/Auth'
import RequiredAuth from './component/RequiredAuth'
import toast, { Toaster } from 'react-hot-toast';


function App() {

  return (
    <BrowserRouter>
    <Toaster position="top-right" reverseOrder={false}/>
    <AuthProvider>
    <Navbar/>
    <Routes>
      <Route path='/additems' element={<RequiredAuth><AddItems/></RequiredAuth>}/>
      <Route path='/listitems' element={<RequiredAuth><ListItem/></RequiredAuth>}/>
      <Route path='/addadmin' element={<RequiredAuth><AddAdmin/></RequiredAuth>}/>
      <Route path='/edititems/:_id' element={<EditItems/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default App
