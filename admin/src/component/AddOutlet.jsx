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
      <form onSubmit={handleuploade}>
        <input type="file" onChange={(e) => { setUploadFile(e.target.files[0]) }} />
        <lable>CountryName</lable>
        <input type="text" onChange={handlechange} value={data.countryname} name='countryname' />
        <label>Street</label>
        <input type="text" onChange={handlechange} value={data.street} name='street' />
        <label>area</label>
        <input type="text" onChange={handlechange} value={data.area} name='area' />
        <label>State</label>
        <input type="text" onChange={handlechange} value={data.state} name='state' />
        <button type='submit'>Uploade</button>
      </form>
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