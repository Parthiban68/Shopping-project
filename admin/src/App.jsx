import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AddItems from './component/AddItems'
import ListItem from './component/ListItem'
import AddAdmin from './component/AddAdmin'
import Navbar from './component/Navbar'
import EditItems from './component/EditItems'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/additems' element={<AddItems/>}/>
      <Route path='/listitems' element={<ListItem/>}/>
      <Route path='/addadmin' element={<AddAdmin/>}/>
      <Route path='/edititems/:_id' element={<EditItems/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
