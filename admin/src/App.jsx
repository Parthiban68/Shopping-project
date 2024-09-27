import { useState } from 'react'
import { BrowserRouter,Outlet,Route,Routes } from 'react-router-dom'
import AddItems from './component/AddItems'
import ListItem from './component/ListItem'
import AddAdmin from './component/AddAdmin'
import Navbar from './component/Navbar'
import EditItems from './component/EditItems'
import Login from './component/Login'
import AuthProvider from './component/Auth'
import RequiredAuth from './component/RequiredAuth'
// import toast, { Toaster } from 'react-hot-toast';
import AddOutlet from './component/AddOutlet'


function App() {

  return (
    <BrowserRouter>
    {/* <Toaster position="top-right" reverseOrder={false}/> */}
    <AuthProvider>
    <Navbar/>
    <Routes>
      <Route path='/additems' element={<AddItems/>}/>
      <Route path='/listitems' element={<ListItem/>}/>
      <Route path='/addadmin' element={<AddAdmin/>}/>
      <Route path='/edititems/:_id' element={<EditItems/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/addoutlet' element={<AddOutlet/>}/>
    </Routes>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default App
