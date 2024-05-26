import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ListItem() {
  const [data, setData] = useState([])

  useEffect(()=>{
    items()
  },[])

  const items = () =>{
    try{
      axios.get(`http://localhost:3001/product/listitem`)
      .then(res => setData(res.data.listitems))
    }
    catch(err){
      console.log(err);
    }
  }

  console.log(data);
  return (
    <div>
     {data.map((item)=>(
      <div key={item.id}>
        <h1>{item.shoemodel}</h1>
        <h2>{item.gender}</h2>
        <h3>{item.mrp}</h3>
        <img src={item.poster}/>
      </div>
     ))}
    </div>
  )
}

export default ListItem