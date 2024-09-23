import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AddOutlet = () => {
  const [uploadfile, setUploadFile] = useState()
  const [data, setData] = useState({
    countryname: "",
    street: "",
    area: "",
    state: ""
  })
  const [out, setOut] = useState([])

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((data) => ({ ...data, [name]: value }))
  }
  const handleuploade = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", uploadfile);
    formData.append("countryname", data.countryname);
    formData.append("street", data.street);
    formData.append("area", data.area);
    formData.append("state", data.state)

    try {
      const response = axios.post('http://localhost:3001/product/addoutlet', formData)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
   fetch()
    
  }, [])
  const fetch = async () =>{
    try {
      const response = await axios.get('http://localhost:3001/product/outlet')
      setOut(response.data.listofoulet)
      console.log(out);
    } catch (error) {
      console.error("Data not Feched", error);
    }
  }
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-600">
  <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-lg'>
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Upload Details</h2>
    
    <form onSubmit={handleuploade}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Upload File</label>
        <input 
          type="file" 
          onChange={(e) => setUploadFile(e.target.files[0])} 
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Country Name</label>
        <input 
          type="text" 
          onChange={handlechange} 
          value={data.countryname} 
          name='countryname' 
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300" 
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Street</label>
        <input 
          type="text" 
          onChange={handlechange} 
          value={data.street} 
          name='street' 
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300" 
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Area</label>
        <input 
          type="text" 
          onChange={handlechange} 
          value={data.area} 
          name='area' 
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300" 
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">State</label>
        <input 
          type="text" 
          onChange={handlechange} 
          value={data.state} 
          name='state' 
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300" 
          required
        />
      </div>

      <button 
        type='submit' 
        className='w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-200'
      >
        Upload
      </button>
    </form>
  </div>
</div>

      {out.map((list)=>(
        <div>
        <img src={list.image} alt="" />
        <h1>{list.street}</h1>
        </div>
      ))}
    </div>
  )
}

export default AddOutlet