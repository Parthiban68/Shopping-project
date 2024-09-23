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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className='w-full max-w-md p-6 bg-white rounded-lg shadow-lg'>
    <form onSubmit={additem}>
      <h2 className="text-2xl font-bold mb-4 text-center">Add Shoe Item</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Shoe Model</label>
        <input
          type='text'
          onChange={(e) => setShoeModel(e.target.value)}
          value={shoemodel}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <input
          type='text'
          onChange={(e) => setGender(e.target.value)}
          value={gender}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">MRP</label>
        <input
          type='number'
          onChange={(e) => setMrp(e.target.value)}
          value={mrp}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="descrp"
          rows="4"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Color</label>
        <input
          type='text'
          onChange={(e) => setColor(e.target.value)}
          value={color}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Product Information</label>
        <textarea
          name="prdinfo"
          rows="4"
          onChange={(e) => setPrdinfo(e.target.value)}
          value={prdinfo}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Poster Url</label>
        <input
          type='text'
          onChange={(e) => setPoster(e.target.value)}
          value={poster}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
          required
        />
      </div>

      <button type='submit' className='w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition duration-200'>
        Upload
      </button>
    </form>
  </div>
</div>

  )
}

export default AddItems