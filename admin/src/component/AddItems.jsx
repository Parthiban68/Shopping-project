import axios from 'axios'
import React, { useState } from 'react'

function AddItems() {
    const [shoemodel, setShoeModel] = useState("")
    const [gender, setGender] = useState("")
    const [mrp, setMrp] = useState("")
    const [description, setDescription] = useState("")
    const [color, setColor] = useState("")
    const [prdinfo, setPrdinfo] = useState("")
    const [poster, setPoster] = useState("")

  const additem = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:3001/product/mens`,{shoemodel, gender, mrp, description, color, prdinfo, poster})
    .then(res => console.log(res.data.message))
    .catch(err => console.log(err))
  }


  return (
    <div className='w-[500px] h-[500px]'>
      <form onSubmit={additem}>
        <label>Shoe Model</label>
        <input type='text' onChange={(e) => setShoeModel(e.target.value)} value={shoemodel}  /><br />
        <label>Gender</label>
        <input type='text' onChange={(e) => setGender(e.target.value)} value={gender} /><br />
        <label>MRP</label>
        <input type='number' onChange={(e)=> setMrp(e.target.value)} value={mrp} /><br />
        <label>Description</label>
        <textarea name="descrp" rows="10" cols="30" onChange={(e)=> setDescription(e.target.value)} value={description} ></textarea><br />
        <label>Color</label>
        <input type='text' onChange={(e)=> setColor(e.target.value)} value={color} /><br />
        <label>Product Information</label>
        <textarea name="prdinfo" rows="10" cols="30" onChange={(e)=> setPrdinfo(e.target.value)} value={prdinfo} ></textarea><br />
        <label>Poster Url</label>
        <input type='text' onChange={(e)=> setPoster(e.target.value)} value={poster} />
        <input type='Submit' value={"Upload"} className='bg-orange-600 px-3 py-1 rounded-2xl' />
      </form>
    </div>
  )
}

export default AddItems